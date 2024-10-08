---
created: 2024-08-19 01:58:51 +0900
updated: 2024-08-19 02:12:11 +0900
---

개발 환경에서만 특정 전역 상태가 갱신될 때 콜스택이 초과하는 에러가 발생했다. 현재 클라이언트의 전역 상태를 위해 zustand를 사용하고 있다. stack trace를 따라가보니 devtools 미들웨어에서 전역 상태를 JSON으로 직렬화하는 과정에서 발생한 에러였다. zustand의 devtools 미들웨어는 redux의 devtools를 사용하게 해주는 도구라서 결국 redux-devtools-extension의 코드가 동작하고 있었다.

원인은 전역 상태에 저장되는 객체에서 비롯됐다. 그 중 일부에는 DOM 요소가 포함되어 있는데 DOM 요소는 순환 참조로 인해 `JSON.stringify()`를 시도하면 에러가 발생시키기 때문이다. 브라우저 콘솔에서 아무 DOM 요소를 전역 변수에 저장하고 직렬화를 시도하면 이런 에러를 확인할 수 있다.

```
Uncaught TypeError: Converting circular structure to JSON
```

redux-devtools-extensions는 이런 객체를 직렬화하기 위해서 [jsan](https://www.npmjs.com/package/jsan)이라는 라이브러리를 사용하고 있다. jsan은 순환 참조를 해결해준다고 한다. redux-devtools-extensions은 jsan을 사용한다. 그렇다면 DOM 직렬화에 문제가 없어야 할 것 같은데 콜스택이 왜 초과했을까?

```js
// https://github.dev/reduxjs/redux-devtools-extension/blob/c220fd18d6fb4b0790a501ec4df0de52b5bee460/src/app/api/index.js

function windowReplacer(key, value) {
  if (value && value.window === value) {
    return '[WINDOW]';
  }
  return value;
}

function tryCatchStringify(obj) {
  try {
    return JSON.stringify(obj);
  } catch (err) {
    /* eslint-disable no-console */
    if (process.env.NODE_ENV !== 'production') console.log('Failed to stringify', err);
    /* eslint-enable no-console */
    return jsan.stringify(obj, windowReplacer, null, { circular: '[CIRCULAR]', date: true });
  }
}

let stringifyWarned;
function stringify(obj, serialize) {
  const str = typeof serialize === 'undefined' ? tryCatchStringify(obj) :
    jsan.stringify(obj, serialize.replacer, null, serialize.options);

  if (!stringifyWarned && str && str.length > 16 * 1024 * 1024) { // 16 MB
    /* eslint-disable no-console */
    console.warn('Application state or actions payloads are too large making Redux DevTools serialization slow and consuming a lot of memory. See https://git.io/fpcP5 on how to configure it.');
    /* eslint-enable no-console */
    stringifyWarned = true;
  }

  return str;
}
```

근본적인 원인을 파헤치기 위해서는 아무래도 jsan을 들여다봐야 할 것 같은데 더 확인해보진 않았다. 다만, 크게 두 가지로 그 원인으로 추정하고 있다. redux-devtools-extensions이 jsan을 사용하는 방식에 문제가 있거나, jsan이 DOM 객체의 순환 참조를 제대로 처리하지 못할 수도 있다. 간헐적으로 익스텐션이 JSON이 16MB을 초과할 때 발생시키는  `'Application state or actions payloads are too large making Redux DevTools serialization slow and consuming a lot of memory. See https://git.io/fpcP5 on how to configure it.'` 콘솔이 뜨는 것을 보면, jsan이 가끔은 직렬화에 성공한 걸수도 있다.

결론적으로는 나는 DOM 객체를 전역 상태에서 제외시키는 것이 가능한 상황이었기 때문에 DOM 객체를 전역 상태에 저장하지 않는 방법으로 이 문제를 회피했지만, 만약 피할 수 없는 상황이거나 코드를 단숨에 바꾸기 어렵다면 sanitizer 옵션을 사용하는 방법도 있다.

참고: [redux-devtools-extension/docs/API/Arguments.md at master · reduxjs/redux-devtools-extension](https://github.com/reduxjs/redux-devtools-extension/blob/master/docs/API/Arguments.md#actionsanitizer--statesanitizer)

다만, zustand에서는 devtools의 옵션으로 sanitizer의 타입까지는 제공하지 않기 때문에, 타입스크립트를 사용한다면 불편함을 감수해야 한다. 코드는 아래와 같다.

```ts
export const useStore = create<TState>()(
  devtools(
    persist(
      immer((...a) => ({
        // ...slice
      })),
      {
        name: 'some-options',
        partialize: (state) => ({ options: state.options }),
      },
    ),
    {
      stateSanitizer: (state: any) =>
        state.something ? { ...state, something: '<<DEEP_JSON>>' } : state,
    },
  ),
);
```

실제 devtools에서 확인하는 결과는 대략 이렇다.

```tsx
{
  // ... 다른 상태들
  something: '<<DEEP_JSON>>',
}
```

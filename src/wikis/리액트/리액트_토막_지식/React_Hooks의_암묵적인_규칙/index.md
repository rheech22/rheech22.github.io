---
created: 2024-10-09 13:47:44 +0900
updated: 2024-10-09 14:38:20 +0900
---

useEffect의 종속성 배열에는 콜백 내에서 참조되는 모든 변수가 포함되어야 한다는 규칙이 있다. 규칙 위반을 방지하기 위해 eslint의 `react-hooks/exhaustive-dpeps` 규칙을 설정하기도 하는데, 종속성 배열에서 누락된 참조가 있다면 알려주는 식이다.

하지만, 이 규칙에도 예외가 있는데 일부 "안정적인 것으로 알려져 있는" 값은 종속성 배열에 추가하지 않아도 된다는 내용이다. [eslint 규칙 구현](https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/ExhaustiveDeps.js#L177-L188)에서도 그 일부를 확인할 수 있다.

```js
// Some are known to be stable based on Hook calls.
// const [state, setState] = useState() / React.useState()
//               ^^^ true for this reference
// const [state, dispatch] = useReducer() / React.useReducer()
//               ^^^ true for this reference
// const [state, dispatch] = useActionState() / React.useActionState()
//               ^^^ true for this reference
// const ref = useRef()
//       ^^^ true for this reference
// const onStuff = useEffectEvent(() => {})
//       ^^^ true for this reference
// False for everything else.
```

[리액트 공식 문서](https://react.dev/learn/synchronizing-with-effects#why-was-the-ref-omitted-from-the-dependency-array)도 이 내용을 언급하고 있는데 요약하자면,

- `useRef` 훅의 `ref`객체는 종속성 배열에 포함시키지 않아도 된다.
- 모든 렌더링에서 항상 동일한 객체를 얻을 수 있음이 보장된다.
- `useState`의 set 함수도 stable identity를 갖기 때문에 종속성 배열에 포함시키지 않아도 된다.
- 단, 부모 컴포넌트에서 전달된 경우 항상 동일한 참조를 전달하는지 알기 어렵기 때문에 종속성 배열에 포함시켜야 한다.

회사 프로젝트에서도 해당 eslint 규칙을 사용하기 때문에 어느 정도 알고 있던 내용이지만 깊게 생각해 본 적은 없었다. 근데 어떤 값이 안정이고 그렇지 않은지 어떻게 판별할 수 있는걸까? 실제로 어떤 라이브러리에서 넘기는 값은 종속성 배열의 예외로 취급되기도 하고 아니기도 한데, [출처](https://macwright.com/2024/09/19/the-extra-rules-of-hooks)에서는 이러한 내용들이 명확하지 않다고 지적하고 있다. 리액트 공식 문서에서는 다음과 같이 언급할 뿐이고 더 자세한 내용은 찾지 못했다.

> Omitting always-stable dependencies only works when the linter can “see” that the object is stable.


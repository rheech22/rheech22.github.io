---
created: 2024-09-08 14:47:38 +0900
updated: 2024-09-08 15:00:00 +0900
---

`Apollo Link` 생성자는 `RequestHandler` 함수를 매개변수로 받는다.

```ts
declare class ApolloLink {
		// ...
    constructor(request?: RequestHandler);
}
```
<br />

`RequestHandler`는 `operation`과 `forward`를 매개변수로 받는다.

```ts
type RequestHandler = (operation: Operation, forward: NextLink) 
=> Observable<FetchResult> | null;
```

<br />

`operation`은 `Operation` 타입이다. GraphQL 오퍼레이션을 의미한다.

```ts
interface Operation {
    query: DocumentNode;
    variables: Record<string, any>;
    operationName: string;
    extensions: Record<string, any>;
    setContext: (context: DefaultContext) => DefaultContext;
    getContext: () => DefaultContext;
}
```

<br />

`forward`는 `NextLink` 타입의 함수다. `RequestHandler`와 유사하게 `operation`을 받아 `Observable<FetchResult>`를 반환한다. `forward`는 링크 체인에서 다음 링크를 실행시키는 함수를 의미한다.

```ts
type NextLink = (operation: Operation) => Observable<FetchResult>;
```

<br />

마지막 링크가 아니라면 `RequestHandler`는 `forward(operation)`의 실행시키며 함수를 종료한다. 이로써 각 링크에서 `context` 조작 등이 가능해진다. 아래 예시에 다음 링크는 `start` 속성이 `context`에 정의된 채로 실행된다.

```ts
const timeStartLink = new ApolloLink((operation, forward) => {
  operation.setContext({ start: new Date() });
  return forward(operation);
});
```

<br />

`Apollo Link`는 `Observable` 구현을 위한 [zen-observable](https://www.npmjs.com/package/zen-observable) 라이브러리를 사용한다.

`Observable`은 이런 모양이다.

```ts
declare class Observable<T> {
  constructor(subscriber: Subscriber<T>);

  // For backwards compatibility when super(subscriber) is transpiled to
  // Observable.call(this, subscriber), which typically happens when the
  // Observable class is compiled to ES5 function contructor syntax.
  static call<R>(instance: Observable<R>, subscriber: Subscriber<R>): undefined;
  static apply<R>(instance: Observable<R>, args: IArguments | [Subscriber<R>]): undefined;

  subscribe(observer: Observer<T>): Subscription;
  subscribe(
    onNext: (value: T) => void,
    onError?: (error: any) => void,
    onComplete?: () => void,
  ): Subscription;

  [Symbol.observable](): Observable<T>;

  forEach(callback: (value: T) => void): Promise<void>;
  map<R>(callback: (value: T) => R): Observable<R>;
  filter<S extends T>(callback: (value: T) => value is S): Observable<S>;
  filter(callback: (value: T) => boolean): Observable<T>;
  reduce(callback: (previousValue: T, currentValue: T) => T, initialValue?: T): Observable<T>;
  reduce<R>(callback: (previousValue: R, currentValue: T) => R, initialValue?: R): Observable<R>;
  flatMap<R>(callback: (value: T) => ObservableLike<R>): Observable<R>;
  concat<R>(...observable: Array<Observable<R>>): Observable<R>;

  static from<R>(observable: Observable<R> | ObservableLike<R> | ArrayLike<R>): Observable<R>;
  static of<R>(...items: R[]): Observable<R>;
}
```

<br />

만약 `Apollo Link`에서 비동기 로직 제어가 필요하다면 `fromPromise`를 사용한다. 공식 문서에는 없지만 `Promise<T>`를 받아 `Observable<T>`를 반환시키는 함수다. 다시 말해, `Promise`를 `Observable`로 바꿀 수 있다.


```ts
declare function fromPromise<T>(promise: Promise<T>): Observable<T>;
```

<br />

유효한 토큰을 받아온 후 헤더에 저장하는 링크를 만들어 봤다. `getTokenPromise`는 토큰이 만료된 경우 서버로부터 리프레시 토큰에 의해 갱신된 토큰을 가져오는 로직을 포함하고 있다고 가정한다. 오퍼레이션을 다음 링크로 전달하고 싶다면 `RequestHandler`는 `forward`를 반환시켜야 한다.

```ts
export const headerLink = new ApolloLink((operation, forward) =>
  fromPromise(getTokenPromise()).flatMap((accessToken) => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        ...(accessToken ? { Authorization: ${accessToken} } : null),
      },
    }));

    return forward(operation);
  }),
);
```

<br />

여기서 `flatMap`은 `Observable`의 메서드다. 좀 더 자세히 보면, `fromPromise`가 반환하는 `Observable`의 각 값에 대해 콜백을 실행한다. 콜백은 필요에 따라 무언가를 실행하고 유사 `Observable` 객체를 리턴한다.

```ts
flatMap<R>(callback: (value: T) => ObservableLike<R>): Observable<R>;
```

<br />

`headerLink`는 요청이 발생할 때마다 `getTokenPromise()`가 반환하는 `Promise`가 `Observable`로 변경되고 `flatMap`에 의해 `header`에 토큰을 갱신한 후 다음 링크를 실행한다.

```ts
export const headerLink = new ApolloLink((operation, forward) =>
  fromPromise(getTokenPromise()).flatMap((accessToken) => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        ...(accessToken ? { Authorization: ${accessToken} } : null),
      },
    }));

    return forward(operation);
  }),
);
```


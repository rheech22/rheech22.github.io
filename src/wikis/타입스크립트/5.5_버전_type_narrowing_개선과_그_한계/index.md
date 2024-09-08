---
created: 2024-09-08 14:09:10 +0900
updated: 2024-09-08 15:37:25 +0900
---

타입스크립트 5.5 버전에서 타입 추론에 관한 큰 변경이 있었다. 이전까지는 filter 메서드의 결과 추론이 만족스럽지 않았는데, 가령 아래와 같은 경우다.

```typescript
function makeBirdCalls(countries: string[]) {
  // birds: (Bird | undefined)[]
  const birds = countries
    .map((country) => nationalBirds.get(country))
    .filter((bird) => bird !== undefined);

  for (const bird of birds) {
    bird.sing(); // error: 'bird' is possibly 'undefined'.
  }
}
```

<br />
하지만 이번 패치로 인해 타입스크립트가 좀 더 똑똑해졌다.

```typescript{2, 7-9}
function makeBirdCalls(countries: string[]) {
  // birds: Bird[]
  const birds = countries
    .map((country) => nationalBirds.get(country))
    .filter((bird) => bird !== undefined);

  for (const bird of birds) {
    bird.sing(); // ok!
  }
}
```

<br />
덕분에 타입 가드를 만들지 않아도 돼서 더 편하게 사용할 수 있다.
다만, 여전히 내부 객체의 속성에 대해서는 잘 추론할 수 없다.

user의 name이 존재하지 않을 수도 있는 상황에서

```typescript
type User = { id: string; name?: string | null };

const users: User[] = [
  {
    id: '1',
    name: 'aiden'
  },
  {
    id: '2'
  }
];
```

<br />
name을 가진 user를 걸러내고 그 중 이름만 하나의 배열에 담으려고 한다면

```typescript
const userNames1: string[] = users.filter((user) => !!user.name).map((user) => user.name);
const userNames2: string[] = users.filter((user) => Boolean(user.name)).map((user) => user.name);
const userNames3: string[] = users
  .filter((user) => user.name !== null && user.name !== undefined)
  .map((user) => user.name);
```

<br />
아래와 같은 타입 에러가 발생한다.

```typescript
Type '(string | null | undefined)[]' is not assignable to type 'string[]'.(2322)

```

<br />
user의 name이 아닌 User 타입 자체가 유니언인 경우에는 비교 연산자를 통한 타입 추론이 가능하다.

```typescript
type User =
  | { id: string; name: string }
  | { id: string; name?: undefined }
  | { id: string; name: null };

const userNames1: string[] = users.filter((user) => !!user.name).map((user) => user.name); // error
const userNames2: string[] = users.filter((user) => Boolean(user.name)).map((user) => user.name); // error
const userNames3: string[] = users
  .filter((user) => user.name !== null && user.name !== undefined)
  .map((user) => user.name); // good
```

<br />

혹은 할당된 타입이 없어도 비교 연산자를 통한 타입 추론이 가능하다.

```typescript
const users = [
  {
    id: '1',
    name: 'aiden'
  },
  {
    id: '2'
  }
];

const userNames: string[] = users
  .filter((user) => user.name !== null && user.name !== undefined)
  .map((user) => user.name); // good
```

<br />

아쉽게도 타입을 당장 바꾸기 어렵거나 코드젠으로 직접 생성하지 않는 타입이라면 결국 타입 가드를 사용해야 한다.
이미 타입스크립트 레포에는 관련 이슈가 등록돼 있는데, 여기서 누군가 만들어 놓은 타입 가드도 참고할 수 있다.

https://github.com/microsoft/TypeScript/issues/42384#issuecomment-1440615593

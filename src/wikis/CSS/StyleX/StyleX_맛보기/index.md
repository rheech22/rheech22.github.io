---
created: 2024-10-13 16:50:43 +0900
updated: 2024-10-19 16:46:15 +0900
---

## 소개

[StyleX](https://stylexjs.com/)는 메타에서 만든 스타일링 툴이다. 다소 짧았지만 그 사용 경험이 나쁘지 않았다. 다음에 한번 제대로 사용해보고 싶다. 회사 프로젝트에서는 Sass를 사용하고 있는데 파일을 넘나 들어야 한다는 점이 때론 번거롭게 느껴진다. 한편 최근 유행하는(?) Tailwind는 별도의 문법을 익혀야 하고 마크업에 인라인으로 스타일을 삽입하는 것이 읽기에 그닥 좋지 않았다. StyleX가 내세우는 원칙 중 하나는 마크업과 같은 파일 안에서 스타일을 작성하는 것이다. 이런 점에서 Styled Component, Emotion과 같은 CSS in JS 라이브러리와 유사하긴 한데, Styled Component를 예로 들면 백틱 안에서 작성하는 스타일 코드가 린트에 많이 의존적이라는 느낌을 받는다.

내가 단점으로 기록한 내용들은 아주 짧은 경험에서 느꼈던 바라 아마도 이를 보완할 수 있는 여러 방법들이 이미 존재하겠지만, StyleX의 기본적인 유스 케이스가 여러 불편함을 해소시켜줄 수 있다는 기대를 갖고 있다.

create 메서드를 호출하여 스타일을 정의할 수 있다. 매개변수로 스타일 객체를 전달하면 끝인데 자바스크립트 문법으로 작성할 수 있고 타입스크립트와 함께 사용한다면 타입 안정성을 확보할 수 있다.
```js
const styles = x.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '80px',
    width: '100%',
  },
  logo: {
    marginTop: '360px',
  },
  input: {
    width: '560px',
    height: '48px',
  },
});

```

스타일을 사용할 때는 props 메서드를 호출한다. 여러 스타일을 병합하는 것도 가능한데 마지막으로 적용된 스타일이 항상 우선한다는 기본 원칙이 적용된다.
```js
export const Document = () => {
  return (
    <div {...x.props(styles.base)}>
      <div {...x.props(styles.thumbnail, styles.animation)} />
      <div {...x.props(styles.contents)}>
        <p {...x.props(styles.title, styles.animation)} />
        <p {...x.props(styles.footer, styles.animation)} />
      </div>
    </div>
  );
};
```

애니메이션은 keyframes 메서드를 사용한다.
```js
const gradient = x.keyframes({
  '0%': {
    backgroundColor: colors.gray20,
  },
  '50%': {
    backgroundColor: colors.gray30,
  },
  '100%': {
    backgroundColor: colors.gray20,
  },
});
```

대부분의 동적 스타일은 자바스크립트 연산자로 간단하게 구현할 수 있다.
```js
<div
  {...x.props(
    styles.base,
    props.isHighlighted && styles.highlighted,
    isActive ? styles.active : styles.inactive,
  )}
/>
```

만약, 동적 스타일에 사용되는 값이 런타임에서만 획득할 수 있는 것이라면 객체 리터럴을 반환하는 함수를 정의하면 된다. StyleX는 CSS 변수에 의존하는 정적 스타일을 생성하고 런타임에 변수를 설정한다.
```js
const styles = x.create({
  base: (height) => ({ height }),
});

function Home() {
  // ...
  return <div {...x.props(styles.base(height))} />;
}
```

이 밖에도 테마를 위한 스타일링, 변수를 선언하고 사용하는 방법 등은 [공식 문서](https://stylexjs.com/docs/learn/)를 참고하면 되겠다.

## 마무리

스타일 작성 경험 말고도 다른 장점이 많은 것으로 보인다. 특히 런타임이 아닌 빌드 타임에 스타일 코드를 컴파일하고 여러 최적화 요소가 있어 성능 측면에서 확실한 장점이 있다. 타입 스크립트와 궁합도 좋다. 추론이 되니까 코드 자동 완성 경험도 좋고 특정 요소가 제외된 스타일 타입을 정의하는 것도 가능하다. 한편 제약도 있는데 이로 인해 불편했던 경험이 있다. 가령 CSS로 `.className:hover > div:first-child`, `svg > path`와 같이 간접적이고 복합적인 선택자를 사용할 수 있는 방법을 제공하지 않는다. 이는 `styles at a distance` 문제를 방지하기 위한 것이라고 하는데, 의도치 않은 스타일을 다른 요소에 적용시킬 수 있는 가능성을 방지하기 위한 것이라고 설명하고 있다. 하지만 svg 에셋을 리액트 컴포넌트로서 사용하고 있다면 아래와 같은 코드로 `path`의 스타일을 바꿀 수는 없는 것으로 보인다. 결국 svg를 JSX에 포함시켜야 하는걸까?
```js
const styles = x.create({
  svg: {
    '& > path': {
      fill: 'red'
    }
  }
})
```

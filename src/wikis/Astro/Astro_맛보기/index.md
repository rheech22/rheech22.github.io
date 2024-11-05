---
created: 2024-11-01 15:26:04 +0900
updated: 2024-11-05 13:33:53 +0900
---

# 프로젝트 만들기

```bash
yarn create astro
```

- Empty 템플릿
- Typescript 사용
- Typescript Strict Mode 사용
- Install dependencies? Yes
- Initialize a new git repo? Yes

# 개발 서버 시작
 
```bash
yarn dev
```

# 편집 기본

```jsx
---

---

<html lang="en">
    <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>Astro</title>
  </head>
  <body>
-   <h1>Astro</h1>
+   <h1>My Astro Site</h1>
  </body>
</html>
```

✅ 제목이 바뀌는 것을 볼 수 있음

# 새 페이지 생성

`src/pages/about.astro` 파일 생성 후 
```jsx
---

---

<body>
    <h1>About Me</h1>
    <p>bla-bla</p>
</body>

```

✅ about 경로에서 새 페이지를 볼 수 있음


# 컴포넌트 구조 

컴포넌트는 자바스크립트 코드를 작성할 수 있는 frontmatter 영역과 HTML 및 자바스크립트 표현식이 포함되는 탬플릿 영역이 있음
frontmatter 영역은 코드 펜스(`---`)로 구분됨

```jsx
---

const name = "Astro";

---

<body>
    <h1>About Me</h1>
    <p>My name is {name}</p>
</body>

```

# 스타일링

`<style></style>` 태그를 사용하여 페이지 항목의 스타일을 지정할 수 있음

```jsx
---

const name = "Astro";

---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>About</title>
    <style>
      h1 {
        color: purple;
        font-size: 4rem;
      }
    </style>
  </head>
<body>
    <h1>About Me</h1>
    <p>My name is {name}</p>
</body>

```

`define:vars={ {...} }` 지시어를 사용하여 스크립트의 변수를 참조할 수도 있음


```jsx
---

const name = "Astro";
const color = "purple";

---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>About</title>
    <style define:vars={{ color }}>
      h1 {
        color: var(--color);
        font-size: 4rem;
      }
    </style>
  </head>
<body>
    <h1>About Me</h1>
    <p>My name is {name}</p>
</body>

```

전역 스타일이 있다면 frontmatter에서 css를 import하면 됨


# 재사용할 수 있는 컴포넌트

`src/components/toggle.astro` 생성 후

```jsx
---

---

<button>toggle</button>
```

`src/pages/index.astro`에서 불러오기

```jsx
---

import Toggle from '../components/toggle.astro'

---

<html lang="en">
    <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>Astro</title>
  </head>
  <body>
    <h1>My Astro Site</h1>
    <Toggle />
  </body>
</html>

```

✅ 화면에서 버튼을 볼 수 있다.


# 브라우저에서 동작하는 스크립트 작성하기

frontmatter에 작성된 스크립트는 서버에서만 사용되기 때문에 `window`나 `document` 객체에 접근할 수 없음
빌드 타임에 실행되고 HTML이 생성되면 버려지는 코드 !

`<script>` 태그로 클라이언트 사이드 자바스크립트를 작성할 수 있음

```jsx
---

---

<button>toggle</button>
<script>
    const button = document.querySelector('button');
    button?.addEventListener('click', () => {
        alert('clicked')
    });
</script>

```

# Props 받고 넘기기


받기

```jsx
---

const { title } = Astro.props;

---

<button>{title}</button>
<script>
    const button = document.querySelector('button');
    button?.addEventListener('click', () => {
        alert('clicked')
    });
</script>
```

넘기기


```jsx
<Toggle title='토글 버튼' />
```

# 요소 전달하기


`src/components/wrapper.astro` 생성 후
```jsx
---

---

<div>
  <slot />
</div>
```

사용하기

```jsx
<Wrapper>
  <h1>My Astro Site</h1>
</Wrapper>
```


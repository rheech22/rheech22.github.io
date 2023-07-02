---
path: "/datepicker-with-regex"
created: "2023-03-28"
updated: "2023-03-28"
title: "정규 표현식으로 날짜 자동 포맷팅하기"
tags: ["regex"]
---

## Custom Date Picker를 위한 인풋

웹에서 커스텀한 Date Picker를 보여주고 싶다면, 원하는 구성을 직접 만들거나 라이브러리를 활용해야 할 것이다. MUI 같은 라이브러리는 연, 월, 일을 구분하는 구분자를 자동으로 추가하고 유효성도 잘 체크하는 구성을 제공하지만 내게 필요했던 range date picker는 유료여서 채택할 수 없었다. 결국 `react-datepicker`를 골랐는데 이 라이브러리가 제공하는 인풋에는 아무 문자나 입력할 수 있다는 아쉬움이 있었다. 유효하지 않은 입력을 제한하고 날짜 형식을 자동으로 잡아줘야 했는데 이번 글에 그 목적을 달성하기 위해 공부한 정규 표현식에 관한 내용을 담았다. 최대한 간단한 형태의 예제로 소개할 생각이다 .

내가 원하는 날짜 형식은 `yyyy.MM.dd - yyyy.MM.dd`와 같은 형식이다.

`date` 타입의 인풋은 커스텀하는데 한계가 많기 때문에 커스텀한 달력들은 대부분 `text` 타입을 사용한다.

```html{4}
// index.html

<body>
  <input type="text"/>
  <script src="index.js"></script>
</body>
```

## 숫자만 입력 받기

인풋에서는 숫자 입력만 받고 싶다. `keydown` 이벤트 핸들러에서 숫자 입력이 아닌 경우에 이벤트의 기본 동작을 제한한다. `match()` 메서드는 문자열이 정규식에 매칭되는지 검사한다. 만약 매칭된다면 문자열이 포함된 배열을 반환하고, 없다면 `null`을 반환한다.

```js{3-7}
const input = document.querySelector('input');

input.addEventListener('keydown', (e) => {
  if (!e.key.match(/\d/g)) {
    e.preventDefault();
  }
})
```

***About Regex***

- 정규 표현식에는 메타 문자라는 것이 있는데 주로 쓰이는 **문자 집합**들을 대체하는 특수 문자라고 생각하면 쉽다. `\d`도 메타 문자 중 하나로 숫자를 나타낸다. 이 문자는`[0-9]`와 같은 의미를 가진다.
- `/\d/g`와 같이 사용하는 `g`플래그는 일치하는 모든 패턴을 찾는다. 만약 이 플래그가 없다면 패턴과 일치하는 첫 번째 결과만을 반환한다.

## Whitelist 만들기

숫자 외에도 커서 이동을 위한 방향 키, 폼 제출을 위한 엔터 키, 그리고 삭제를 위한 백스페이스 키도 입력이 가능해야 한다. 입력 가능한 키를 하나의 정규 표현식 그룹에 담는다. 입력된 키가 `whitelist`에 속하지 않으면 이벤트의 기본 동작을 막는다. 정규 표현식의 `test()`메서드는 주어진 문자열이 정규식을 만족하는지 검사한다.

```js
input.addEventListener('keydown', (e) => {
  const whitelist = /(\d|ArrowLeft|ArrowRight|Backspace|Enter)/;

  if (!whitelist.test(e.key)) {
    e.preventDefault();
  }
})
```

***About Regex***

- 앵커는 행의 시작과 끝 지점을 나타낸다. `^`은 행의 시작을 의미하고 `$`는 행의 끝을 의미한다. `apple`과 완전히 일치하는 문자열을 찾고 싶다면 `^apple$`와 같이 두 앵커로 감싸준다.

## 자동으로 점 찍어주기

숫자 입력만 받기 때문에 자동으로 점을 찍어줘야 한다. 먼저 시도해 볼 것은 8자리의 숫자를 입력할 때 `yyyy.mm.dd`와 같은 형태가 되는 것이다. `replace()`의 두 번째 매개변수 타입이 `string`이라면 해당 문자열은 특수한 교체 패턴을 포함할 수 있다. 아래의 `'$1.$2.$3'`처럼 `$n`의 패턴이 놓인 자리에는 정규 표현식 내 소괄호로 묶인 `n`번째 그룹에 매치된 문자열을 삽입한다. 만약 정규 표현식을 각각 (4자리), (2자리), (2자리) 숫자로 묶인 세 캡쳐링 그룹으로 구성한다면, `11112233`와 같은 문자열을 `1111.22.33`로 대체한다. 앞서 말했듯이 문자열이 포함하는 특수 교체 패턴에 각 그룹에 매치된 문자열을 삽입하기 때문이다.

```js
input.addEventListener('input', (e) => {
  let date = e.target.value;

  date = date.replace(/^(\d{4})(\d{2})(\d{2})$/g, '$1.$2.$3');

  input.value = date;
})
```

***About Regex***

- 캡쳐링 그룹(capturing group)은 소괄호로 묶인 영역을 의미한다. 캡쳐링 그룹을 사용하면 매치된 부분 문자열을 따로 추출할 수 있다. 캡쳐링된 문자열은 `$n`과 같은 특수 패턴을 활용하여 추출할 수 있다.
- 수량자(quantity)는 패턴이 나타날 수 있는 횟수를 지정해 준다. 수량자는 다음과 같이 사용할 수 있다.
  - `*`: 0개 이상
  - `+`: 1개 이상
  - `?`: 0개 또는 1개
  - `{n}`: n개
  - `{n,}`: n개 이상
  - `{n,m}`: n개 이상, m개 이하
- 예를 들어, `/\d{2,4}/` 패턴은 2자리에서 4자리의 숫자에 매치된다. `/\d+/` 패턴은 1개 이상의 숫자에 매치된다. `/\d*/` 패턴은 0개 이상의 숫자에 매치된다. `/\d?/` 패턴은 0개 또는 1개의 숫자에 매치된다.

***구현***

8자리 숫자를 입력하면 원하는 자리에 점을 찍어주고 있다. 

![regex1](assets/regex1.gif)

그러나 사실 내가 원했던 것은 8자리를 모두 입력하지 않더라도 필요한 시점에 점이 찍히는 것이다. 수량자를 변경해보자. 각 그룹이 0개의 숫자부터 캡쳐링할 수 있도록 수량자를 조절한다. 하지만 이렇게만 하면 `1..`처럼 점이 연속으로 찍히고 그 다음 입력은 마지막 자리에 붙게 된다.

```js{4}
input.addEventListener('input', (e) => {
  let date = e.target.value;

  date = date.replace(/^(\d{0,4})(\d{0,2})(\d{0,2})$/g, '$1.$2.$3');

  input.value = date;
})
```

포맷을 바꿔주기 전 숫자를 제외한 문자를 제거하면 최종적으로 원하는 위치에 점을 찍어준다.

```js{5}
input.addEventListener('input', (e) => {
  let date = e.target.value;

  date = date
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{0,4})(\d{0,2})(\d{0,2})$/g, '$1.$2.$3');

  input.value = date;
})
```

하지만 여전히 입력 중에는 문자열의 끝에 두 개 이상의 점이 붙는다. 이를 방지하기 위해 정규식을 하나 더 추가한다. 이 정규식은 연속된 점을 삭제한다.

```js{7}
input.addEventListener('input', (e) => {
  let date = e.target.value;

  date = date
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{0,4})(\d{0,2})(\d{0,2})$/g, '$1.$2.$3')
    .replace(/(\.{2})/g, '');

  input.value = date;
})
```

***구현***

이제는 입력 중에도 원하는 위치에 점을 잘 찍는다.

![regex2](assets/regex2.gif)

## 입력 구분하기

지금까지는 백스페이스로 삭제를 하더라도 정규식 패턴에 의해 점이 다시 찍히기 때문에 삭제 기능이 동작하지 않았다. 삭제를 할 때는 자동 포맷팅을 하지 않도록 해야 한다. 이런 경우에 `InputEvent` 인터페이스가 제공하는 `inputType` 속성을 사용할 수 있다. `inputType`속성은 타이핑에 의한 **텍스트 주입**이라면 `“insertText”` 값을 갖는다. 입력을 추가할 때만 `replace()`를 호출한다.

```js{4, 9}
input.addEventListener('input', (e) => {
  let date = e.target.value;
  
  if (e.inputType === 'insertText') {
    date = date
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{0,4})(\d{0,2})(\d{0,2})$/g, '$1.$2.$3')
      .replace(/(\.{2})/g, '');
  }
  
  input.value = date;
})
```

## 날짜 범위를 위한 정규 표현식

단일 인풋으로 하나의 날짜가 아닌, 특정 기간을 입력 받아야 한다면 좀 더 많은 정규 표현식이 필요하다. 서두에 언급했듯이 당초 원했던 것은 `yyyy.MM.dd - yyyy.MM.dd`와 같은 형식이다. 먼저 하이픈(-)과 같은 날짜 구분자를 추가해야 한다.

```js{7-9}
input.addEventListener('input', (e) => {
  let date = e.target.value;
  
  if (e.inputType === 'insertText') {
    date = date
      .replace(/[^0-9]/g, '')
      .replace(
        /^(\d{0,4})(\d{0,2})(\d{0,2})(\d{0,4})(\d{0,2})(\d{0,2})$/g, 
        '$1.$2.$3 - $4.$5.$6'
      )
      .replace(/(\.{2})/g, '');
  }
  
  input.value = date;
})
```

***구현***

이렇게만 해도 어느 정도는 잘 된다.

![regex3](assets/regex3.gif)

다만 날짜를 모두 지우거나 종료 날짜가 없음에도 보여주고 있는 하이픈(-)을 지우고 싶다. 정규식을 하나 더 추가한다. 부정 전방 탐색을 사용하여 뒤에 `숫자`, 또는 `공백 + 숫자`가 오지 않는 하이픈에 대한 매칭을 수행한다. 하이픈의 앞뒤에는 공백 문자가 0개 이상 올 수 있다.

```js{12}
input.addEventListener('input', (e) => {
  let date = e.target.value;

  if (e.inputType === 'insertText') {
     date = date
       .replace(/[^0-9]/g, '')
       .replace(
        /^(\d{0,4})(\d{0,2})(\d{0,2})(\d{0,4})(\d{0,2})(\d{0,2})$/g, 
        '$1.$2.$3 - $4.$5.$6'
       )
       .replace(/(\.{2})/g, '')
       .replace(/\s*-\s*(?!\s*\d)/g, '')
  }

  input.value = date;
})
```

***About Regex***

- `\s` 메타 문자는 공백 문자를 의미한다. 반면, `\S` 는 공백 문자가 아닌 모든 문자를 의미한다.
- 전방 탐색(positive lookahead)은 정규 표현식에서 일치하는 부분 문자열을 제외한 부분에 대해 매칭을 수행하는 것을 말한다. 글로 보는 것보다 실제 동작을 보는 것이 더 이해하기 쉬운데 예를 들어, `q(?=u)`는 `u` 오른쪽에 둔 `q`를 매칭한다. 이 정규식은 `quiet`에서 `q`에 대해 매칭을 수행하지만, `Qantas`와 같은 문자열에서는 매칭을 수행하지 않는다.
- 부정 전방 탐색(negative lookahead)은 전방 탐색의 반대로 생각하면 쉽다. 예를 들어, `q(?!u)`는 오른쪽에 `u`가 나오지 않는 `q`에 대해 매칭을 수행한다. 이 정규식은 `Iraq`에서 `q`와 `Qantas`에서 `q`에 대해 매칭을 수행하지만, `quiet`에서는 매칭을 수행하지 않는다

***구현***

이제 원하는 모습이 됐다.

![regex4](assets/regex4.gif)

## 코드 리팩토링

`replace()`의 호출을 위한 중복 코드를 제거하고 정규 표현식과 대체 문자열/패턴을 분리하면 코드가 더 읽기 좋아질 것 같아 리팩토링을 했다.

```js
const regexPatterns = [
  { regex: /[^0-9]/g, replaceWith: '' },
  { 
    regex: /^(\d{0,4})(\d{0,2})(\d{0,2})(\d{0,4})(\d{0,2})(\d{0,2})$/g, 
    replaceWith: '$1.$2.$3 - $4.$5.$6' 
  },
  { regex: /(\.{2})/g, replaceWith: '.' },
  { regex: /\s*-\s*(?!\s*\d)/g, replaceWith: '' },
]

input.addEventListener('input', (e) => {
  let date = e.target.value;

  if (e.inputType === 'insertText') {
     date = regexPatterns.reduce((inputValue, pattern) => 
              inputValue.replace(pattern.regex, pattern.replaceWith), date
            );
  }

  input.value = date;
})
```

## 남아있는 한계 (부제: 유효하지 않은 입력 값 수정 방지하기)

사용자가 순서대로 지우고 순서대로 입력한다면 문제될 것이 없지만, 만약 커서를 옮겨 날짜 구분자를 지우고 입력하거나, 두 개 이상의 숫자를 지우고 입력하면 결국 날짜 형식이 망가질 수 있다. 이런 경우를 최대한 제한하기 위해 여러 정규식을 추가해 봤다.

각 정규식에 대한 설명은 주석으로 대체한다.

```js
const regexPatterns = [
  // 'yyyy.mm.dd - yyyy.mm.dd'에서 separator를 제거 후 입력 방지:
  // (1) 왼쪽에 숫자가 있고 (2)왼쪽에 separator는 없는, (3 - matched) yyyy.mm.dd , (3 - matched) 그룹을 제거
  { regex: /(?<=\d\s?)(?<!(-\s?))(\d{4}\.\d{2}\.\d{2}$)/g, replaceWith: '' },
  // 'yyyy.mm.dd'에서 왼쪽 점을 제거 후 입력 방지:
  // (1) 왼쪽에 4자리 숫자가 있는, (2 - matched) 3자리 숫자에 (3) 오른쪽에 점(.)과 2자리 숫자도 있다면, (2 - matched) 그룹을 '01'로 대체
  { regex: /(?<=(\d{4}))(\d{3})(?=\.\d{2})/g, replaceWith: '01' },
  // 'yyyy.mm.dd'에서 오른쪽 점을 제거 후 입력 방지:
  // (1) 왼쪽에 4자리 숫자 + 점(.) + 2자리 숫자가 있는, (2 - matched) 3자리 숫자가 있다면, (2 - matched) 그룹을 '.01'로 대체
  { regex: /(?<=(\d{4}\.\d{2}))(\d{3})/g, replaceWith: '01' },
  // 커서 이동 후 separator의 왼쪽 공백 문자를 다른 문자로 대체하는 입력 방지
  { regex: /(?<=(^\d{4}\.\d{2}\.\d{2}))(\d)(?=-)/g, replaceWith: '' },
  // year 영역에 커서 이동 > 2개 이상 삭제 > 입력할 때 숫자 당겨지는 현상 방지: year 영역은 최소 4자리로 맞추기
  { regex: /\d{1,4}(?=\.\d{2}\.\d{2})/g, replaceWith: (match) => match.padEnd(4, '0') },
  // month 영역에 커서 이동 > 2개 이상 삭제 > 입력할 때 숫자 당겨지는 현상 방지: month 영역은 최소 2자리로 맞추기
  { regex: /(?<=(\.))\d{1,2}(?=\.\d{2})/g, replaceWith: (match) => match.padEnd(2, '0') },
  // date 영역에 커서 이동 > 2개 이상 삭제 > 입력할 때 숫자 당겨지는 현상 방지: 시작 날짜의 date 영역은 최소 2자리로 맞추기
  { regex: /(?<=\.)(\d{1,2})(?=[\s-])/g, replaceWith: (match) => match.padEnd(2, '0') },
  { regex: /[^0-9]/g, replaceWith: '' },
  { regex: /^(\d{0,4})(\d{0,2})(\d{0,2})(\d{0,4})(\d{0,2})(\d{0,2})$/g, replaceWith: '$1.$2.$3 - $4.$5.$6' },
  { regex: /(\.{2})/g, replaceWith: '' },
  { regex: /\s*-\s*(?!\s*\d)/g, replaceWith: '' },
]

input.addEventListener('input', (e) => {
  let date = e.target.value;

  if (e.inputType === 'insertText') {
     date = regexPatterns.reduce((inputValue, pattern) => 
      inputValue.replace(pattern.regex, pattern.replaceWith), date);
  }

  input.value = date;
})
```

다만 이렇게 여러 정규식을 추가하는 것이 과연 좋은 방법일까? 여전히 커버하지 못하는 엣지 케이스가 있다. 정규식보다는 인풋의 입력 영역을 나누거나, 좀 더 명확한 방법으로 해결할 필요가 있다고 느꼈다. 아마도 MUI의 `<DateField />`와 같은 모습이라면 좋을 것 같은데 나중에 더 좋은 방법을 찾게 되면 기록으로 남기고 싶다.

---
created: 2023-08-22 22:36:49 +0900
updated: 2023-08-27 12:54:29 +0900
---

현상: 사파리나 아이폰12 크롬에서 블로그 메인 페이지를 들어가면 잠시 깜빡이는 현상과 함께 흰 화면만 출력되는 현상

에러: `chrome://inspect`로 로그를 확인해보니 `RangeError: date value is not finite in DateTimeFormat.format()` 에러가 찍힘

원인: ios에서는 `-` 날짜 구분자를 지원하지 않아서 발생하는 에러

해결: 아래와 같이 하이픈 기호를 슬래시로 대체하여 사용

```javascript

new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium' })
	.format(new Date(date.replace('-', '/')));

```

[참고](https://github.com/w3c/respec/issues/1357)


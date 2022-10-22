# gatsby-starter-github-theme-blog `BETA`

<img width="640" alt="lighthouse" src="https://user-images.githubusercontent.com/57756798/195974256-db696680-d8c1-4260-9d36-f50cf36cfcdc.png">

`gatsby-starter-github-theme-blog`는 기술 블로그를 위한 Gatsby 스타터입니다. [(배포 예시)](https://rheech22.github.io)

- github 테마, 심플, 반응형 디자인
- 마크다운 with 코드 하이라이팅
- 키워드, 태그, 연재물 검색
- 프로그레시브 웹 앱(PWA)
- 검색 엔진 최적화(SEO)
- Google Analystics
- github 댓글
- 다크모드
- CICD

<br />

## :rocket: Quick start

이 가이드는 github pages 배포를 기준으로 작성했어요.  
<br />

### 1. 개츠비 사이트 생성  

Gatsby CLI로 시작하세요.

<br />

```
npx gatsby new my-blog https://github.com/rheech22/gatsby-starter-github-theme-blog.git
```
<br />

### 2. 개발 시작  

```
cd [username].github.io
git switch -c develop
npm start
```
배포 편의를 위해 `develop` 브랜치에서 개발하는 것을 권장합니다.

<br />

### 3. 레포지토리 만들기  
<br />

1. 먼저 레포지토리 이름을 `[github's username].github.io`로 생성합니다. [[참고](https://pages.github.com/)]

2. 로컬 CLI에서 방금 생성한 원격 레포지토리를 연결해주세요.
```
git remote add origin [repository's url]
```

<br />

:star: 만약 디폴트 브랜치가 `develop`이 아니라면 `develop`으로 변경해주세요. [[참고](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/changing-the-default-branch)]

<br />

## :hammer_and_wrench: 블로그 설정하기
<br />

`blog-config.ts`에서 블로그의 기본 정보를 설정해주세요.

```ts
const config = {
  // for bio, header and meta tag
  title: 'git log', // title of the site
  description: 'inspired by github.', // describe anything about your site
  language: 'ko-KR', // default language
  author: 'gatsby blog starter', // your name
  twitterUsername: '@username', // twitter username
  siteUrl: 'https://username.github.io/', // site url
  themeColor: '#161b22', // theme color for PWA

  // google analytics
  googleAnalyticsTrackingId: 'G-0DM3BCAAAA',

  // utterance comment
  commentRepo: 'username/username.github.io', // github's username/repository

  // links - if you don't wanna add any link to your bio, just leave it empty string.
  linkedIn: '',
  twitter: 'https://twitter.com/username',
  github: 'https://github.com/username',
  instagram: '',
  email: 'username@xmail.com',
  personal: '',
};
```
<br />

## :pencil2: 게시글 작성하기  
<br />

`src/posts` 경로에 마크다운 파일을 생성하고 첫 글을 작성해보세요.
<br />

각 게시글은 `frontmatter`를 포함해야 합니다.

| 속성   | 설명                      |
| ------ | ------------------------- |
| path   | 게시글 페이지 경로 (필수) |
| date   | 업데이트 날짜 (필수)      |
| title  | 게시글 제목 (필수)        |
| tags   | 태그 목록 (선택)          |
| series | 연재명 (선택)             |

<br />

`마크다운 예시`
```md
---
path: "/pathname"
date: "2022-10-22"
title: "[HOW TO - 1] Gatsby Blog" 
tags: ["blog", "gatsby"]
series: "HOW TO"
---

Lorem sth...
```
<br />

## :rainbow: 배포하기
     
### :star: 배포하기 전
1. 레포지토리 이름이 `[github's username].github.io`가 맞는지 확인해주세요.
2. `blog-config.ts`를 한번 더 확인해주세요.
3. 작업 중인 브랜치가 `develop`이 맞는지 확인해주세요.

### 자동 배포

`.github/workflows/cicd.yml`의 주석 처리만 해제시켜 주세요.

`develop` 브랜치에 `push` 하면 자동으로 배포합니다.

### 수동 배포

자동 배포를 원치 않는다면 `.github` 폴더를 삭제하고 아래 커맨드로 직접 배포해주세요.

```
npm run deploy
```

배포를 마치고 `https://[github's username].github.io/`에서 확인해보세요.

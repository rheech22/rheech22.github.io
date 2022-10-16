# gatsby-starter-blog-github-theme

<img width="640" alt="lighthouse" src="https://user-images.githubusercontent.com/57756798/195974256-db696680-d8c1-4260-9d36-f50cf36cfcdc.png">

`gatsby-starter-blog-github-theme`는 기술 블로그를 위한 Gatsby 스타터입니다. [(데모 페이지)](https://githubtheme.gatsbyjs.io/)

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
<br />
Gatsby CLI로 시작해보세요.

```
npx gatsby new my-blog https://github.com/rheech22/gatsby-starter-blog-github-theme.git
```
<br />

### 2. 개발 시작  
<br />

```
cd [username].github.io
npm start
```
`http://localhost:8000`에서 시작하세요.
<br />

### 3. 레포지토리 만들기  
<br />

레포지토리를 만들어주세요.  

1. 레포지토리 이름을 `[github's username].github.io`로 생성합니다. [[참고](https://pages.github.com/)]
2. `develop` 브랜치를 생성하고 `master`가 아닌 `develop`을 디폴트 브랜치로 변경해주세요. [[참고](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/changing-the-default-branch)]
3. :star: 작업은 `master`가 아닌 `develop`브랜치에서 해주세요. (`master` 브랜치는 배포 전 빌드를 위해 사용합니다.)
4. 로컬에서 방금 생성한 레포지토리를 연결해주세요.

<br />

```
git remote add origin [repository's url]
```

<br />

<br />

## :hammer_and_wrench: 블로그 설정하기
<br />

`blog-config.ts`에서 블로그의 기본 정보를 설정해주세요.

```ts
const config = {
  // used for bio, meta tag...
  title: 'git log', // title of the site
  description: 'for blog inspired by github.', // describe anything about your site
  language: 'ko-KR', // default language
  author: 'gatsby blog starter', // your name
  twitterUsername: '@username', // twitter username
  siteUrl: 'https://username.github.io/', // site url
  themeColor: '#161b22', // theme color for PWA

  // google analytics
  googleAnalyticsTrackingId: 'G-0DM3BCAAAA',

  // utterance comment
  commentRepo: 'rheech22/rheech22.github.io', // {github's username}/{repository} - will contain comments

  // links - if you don't wanna add any link to your bio, just leave it empty string.
  linkedIn: '',
  twitter: 'https://twitter.com/username',
  github: 'https://github.com/username',
  instagram: '',
  email: 'username@gmail.com',
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
date: "2022-01-15"
title: "개츠비 스타터" 
tags: ["react", "etc"]
series: "개츠비 블로그 만들기"
---

contents here...
```
<br />

## :rainbow: 배포하기
<br />
     
배포하기 전
1. 레포지토리 이름이 `[github's username].github.io`가 맞는지 확인해주세요.
2. `blog-config.ts`를 한번 더 확인해주세요.
3. 작업 중인 브랜치가 `develop`이 맞는지 확인해주세요.

<br />

### 자동 배포

:star: `.github/workflows/cicd.yml`의 주석 처리만 해제시켜 주세요.

이제 `develop` 브랜치에 `push` 하면 자동 배포됩니다.

<br />

### 수동 배포

자동 배포를 원치 않는다면 `.github` 폴더를 삭제하고 아래 커맨드로 직접 배포해주세요.

```
npm run deploy
```

`https://username.github.io/`에 배포된 페이지를 확인해보세요. 다소 시간이 걸릴 수 있습니다.


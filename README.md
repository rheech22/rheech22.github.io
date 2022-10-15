# gatsby-starter-blog-github-theme

<img width="640" alt="lighthouse" src="https://user-images.githubusercontent.com/57756798/195974256-db696680-d8c1-4260-9d36-f50cf36cfcdc.png">

`gatsby-starter-blog-github-theme`는 기술 블로그를 위한 Gatsby Starter입니다.  

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

## 🚀 Quick start

이 가이드는 github pages 배포를 기준으로 작성했어요.  
<br />

### 1. 개츠비 사이트 생성  
<br />
Gatsby CLI를 이용해서 시작하세요.  

추후 배포 편의를 위해 프로젝트 이름을 `[username].github.io`로 하는 것을 권장합니다.

```
npx gatsby new [username].github.io https://github.com/rheech22/rheech22.github.io.git
```
<br />

### 2. 레포지토리 만들기  
<br />

레포지토리를 만들어주세요.  

1. 레포지토리 이름을 `[username].github.io`로 생성합니다. [[참고](https://pages.github.com/)]
2. `develop` 브랜치를 생성하고 `master`가 아닌 `develop`을 디폴트 브랜치로 변경해주세요. [[참고](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/changing-the-default-branch)]
3. **[중요 !]** 작업은 `master`가 아닌 `develop`브랜치에서 해주세요. (`master` 브랜치는 배포 전 빌드를 위해 사용합니다.)

<br />

### 3. 개발 시작  
<br />

```
cd [username].github.io
git remote add origin [repository's url]
npm start
```
`http://localhost:8000`에서 시작하세요.

<br />

### 4. 블로그 설정하기
<br />

`blog-config.ts`에서 블로그의 기본 정보를 설정해주세요.

```ts
const config = {
  title: 'gatsby-github-theme-blog', // blog name
  description: 'inspired by github.', // blog description
  author: 'Demo', // your name
  language: 'ko-KR', // html language attribute's value
  twitterUsername: '@twitterUsername', // twitter username
  location: 'Seoul', // where u at
  email: 'your@email.com', // ur email
  github: 'https://github.com/githubUsername', // github url
  siteUrl: 'https://githubUsername.github.io/', // production url
  themeColor: '#161b22', // theme color for PWA
  googleAnalyticsTrackingId: 'G-0DM3BCAAAA', // google analytics tracking id
  commentRepo: 'githubUsername/repo', // {githubId}/{repo} - will contain comments
};
```
<br />

### 5. 게시글 작성하기  
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
title: "데모2" 
tags: ["react", "etc"]
series: "회고 모음"
---

contents here...
```
<br />

### 6. 배포하기
<br />
     
배포하기 전
1. 레포지토리 이름이 `[username].github.io`가 맞는지 확인해주세요.
2. `blog-config.ts`를 한번 더 확인해주세요.
3. 작업 중인 브랜치가 `develop`이 맞는지 확인해주세요.

<br />

**`develop` 브랜치에 `push` 하면 자동으로 배포가 됩니다.**

<br />

자동 배포를 원치 않는다면 `.github` 폴더를 삭제하고 아래 커맨드로 직접 배포해주세요.

```
npm run deploy
```

`https://username.github.io/`에 배포된 페이지를 확인해보세요. 다소 시간이 걸릴 수 있습니다.


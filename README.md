# gatsby-starter-blog-github-theme

`gatsby-starter-blog-github-theme`는 기술 블로그를 위한 Gatsby 보일러플레이트입니다.  

- github에서 영감받은 심플한 디자인
- 마크다운, 코드 하이라이팅, 반응형 웹 지원
- 검색 기능, 시리즈 및 태그 분류 지원
- 검색 엔진 최적화(SEO) 및 프로그레시브 웹 앱(PWA) 다운로드 지원
- Google Analystics 지원
- Utterance로 github 댓글 지원
- 다크모드 지원
- CICD 지원

<br />

## 빠른 시작

시작 가이드는 github pages 배포를 기준으로 작성했어요.  
<br />

### 1. 개츠비 사이트 생성  
<br />
Gatsby CLI를 이용해서 시작해보세요.  

개발 편의를 위해 프로젝트 이름을 `[username].github.io`로 하는 것을 권장합니다.

```
npx gatsby new [username].github.io https://github.com/rheech22/rheech22.github.io.git
```
<br />

### 2. 레포지토리 만들기  
<br />

새로운 레포지토리를 아래와 같이 만들어주세요.  

1. 레포지토리 이름을 `[username].github.io`로 생성합니다.
2. `develop` 브랜치를 생성하고 `master`가 아닌 `develop`을 디폴트 브랜치로 변경해주세요.
3. **[중요 !]** `master`가 아닌 `develop`브랜치에서 작업을 시작해주세요.

<br />

### 3. 개발 시작  
<br />

```
cd [username].github.io
git remote add origin [repository's url]
npm start
```
`http://localhost:8000`에서 시작할 수 있습니다.

<br />

### 4. 블로그 설정하기  
<br />

`blog-config.ts`에서 자신에게 맞게 블로그를 설정해주세요.

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

`src/posts` 경로에 마크다운 파일을 생성하고 첫 게시글을 작성해보세요.  
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
     
배포하기 전에
1. github 레포지토리 이름이 `[username].github.io`가 맞는지 확인해주세요.
2. `blog-config.ts`를 제대로 설정해주었는지 확인해주세요.
3. 작업 중인 브랜치가 `develop`이 맞는지 확인해주세요.

<br />

**`develop` 브랜치에 `push` 하면 자동으로 배포되기 때에 직접 배포하지 않아도 됩니다.**

<br />

만약 자동 배포를 원치 않는다면 `.github` 폴더를 삭제하고 아래 명령어를 통해 블로그를 배포할 수 있어요.

```
npm run deploy
```



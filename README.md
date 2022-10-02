# 개인 블로그 만들기

## TODOS

- [x] useStaticQuery 사용
- [x] 포스트 정보 보여주기
- [x] 포스트 정보 요청하기
- [x] 포스트 리스트 정렬하기
- [x] 태그 추가하기
- [x] 검색 기능 추가하기
- [x] 다크 모드를 적용하기 (우선순위: 로컬 스토리지 > 디바이스 기본 값 > 다크)
- [x] 포스트 레이아웃 적용하기
- [x] 코드 블럭 적용하기
- [x] 댓글 기능 추가하기
- [x] 헤더 구체화하기
- [x] outSideClick 추가하기
- [x] 다크 모드 버튼 디자인하기
- [x] 라이트 모드 디자인하기
- [x] 검색창 다시 구현하기
- [x] bio / 태그 / 리스트 / 포스트 레이아웃 잡아보기
- [x] 반응형으로 디자인하기(1차: 레이아웃 위주)
- [x] bio 구현하기
- [x] 태그 리스트 구현하기
- [x] 태그 검색 기능 구현하기
- [x] 상태 관리 리팩토링하기
- [x] 검색 결과 페이지에 사이드바 적용하고 리팩토링하기
- [x] 커스텀 훅으로 추출하기
- [x] 태그 아이콘 디자인하기
- [x] 태그 정렬하기
- [x] 작은 화면에서도 태그 보여주기
- [x] 선택된 태그 강조하기
- [x] 미리보기 레이아웃 잡기
- [x] 포스트 디자인 레이아웃 잡기
- [x] TOC 붙이기
- [x] TOC 강조하기
- [x] TOC sticky 적용하기
- [x] 날짜 표출 방식 개선하기
- [x] 새로고침 후에 태그, 키워드 검색 남아있도록 개선하기
- [x] 레이아웃에서 graphql 요청하도록 개선하기
- [x] 코드 정리하기
- [x] isDark 상태 리팩토링
- [x] time to read 추가하기
- [x] 전체 레이아웃 사이즈 조정하기 (특히 bio)
- [x] 2차 반응형 디자인하기
- [x] 검색 카테고리 선택하기 (제목+내용, 제목, 내용)
- [x] SEO 하기
- [x] 404 page
- [x] 극단 케이스 적용해서 UI 깨짐 확인하기
- [x] hydration 이슈 해결하기
- [x] Footer 붙이기
- [x] payload 타입 정의하기
- [x] 반응형 디자인 마무리하기
- [x] 상태 관리 로직 리팩토링하기
- [x] css-breakpoint 직관적으로 변경하기
- [x] 스타일 코드 리팩토링하기
- [x] lighthuouse 점수 올리기
- [x] PWA 적용하기
- [x] eslint 더 엄격하게 사용하기
- [x] 서비스워커 적용하기
- [x] sitemap 적용하기
- [x] 포스트 이미지 모바일에서 벗어나는 문제 해결하기
- [x] 아이폰 12 mini 등에서 bio 깨지는 문제 해결하기
- [x] width 360px 반응형 고려하기
- [x] 스크롤 이벤트 빠릿하게 고치기
- [x] gh-pages에 배포하기
- [x] TOC 레이아웃 조정하기
- [x] 구글 애널리틱스 붙이기
- [x] config 다듬기
- [x] TOC 없는 경우 본문 위치 조정하기
- [x] 이전글 다음글 표시하기
- [x] 스크롤 탑 기능 추가하기
- [x] 시리즈 기능 추가
- [ ] 자동 배포 액션 추가
- [ ] 다른 템플릿 사용해보기
- [ ] header link 뒤로가기 작동시키기
- [ ] document title 바뀌지 않는 문제 해결하기
- [ ] 사이트 첫 진입하고 태그 검색 UI 변경 딜레이되는 문제 해결하기 - hydration 이슈인듯
- [ ] 실제 내 폰에서 bio 깨지는 문제 해결하기 - svg 문제인가? 다른 css 미디어쿼리를?
- [ ] README 작성


## Findings

- [StaticQuery](https://www.gatsbyjs.com/docs/how-to/querying-data/static-query/)에는 variables를 전달할 수 없음(대신 페이지가 아닌 컴포넌트에서 사용 가능)
- [GraphQL Type Generator](https://www.gatsbyjs.com/blog/how-to-use-gatsby-graphql-type-generation/)를 활용
- [gatsby-browser API](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) - page 컴포넌트를 감싸는 루트가 없기 때문에 전역 상태 관리를 하기 위해 활용
- [코드 하이라이트 플러그인](https://www.gatsbyjs.com/plugins/gatsby-remark-highlight-code/)을 사용
- [utterances](https://utteranc.es/?installation_id=28274981&setup_action=install)로 댓글 기능 추가
- ThemeProvider 편하다
- TOC 하이라이트를 intersectionObserver로 구현하려 했지만, 클릭해서 이동할 때 제대로 intersection을 감지하지 못함, 스크롤 이벤트를 최적화하는 방법으로 사용해야 할듯
- sticky position을 사용할 때 부모 요소의 align-items 속성을 유심히 봐야 함 
- rehydration으로 적용안되는 부분이 생길 수 있음, 리액트 생명주기 메서드로 어렵지 않게 해결할 수 있음
- 배포 순서
  1. github에서 username.github.io 레포 생성
  2. 자신의 로컬 원하는 곳에서 프로젝트 클론 `git clone -b develop --single-branch [원본 클론 주소] [username.github.io]`
  4. git remote add origin [레포 원격 주소]
  3. 레포 세팅에서 default 브랜치를 master(or main)에서 develop으로 변경
  4. npm run deploy로 배포 실행
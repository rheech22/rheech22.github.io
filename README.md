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
- [ ] 코드 리팩토링하기
- [ ] dark and light 사용 어휘 바꾸기
- [ ] 검색 선택 가능하게 (제목+내용, 제목, 내용)
- [ ] pinned area 추가
- [ ] 2차 반응형 디자인
- [ ] SEO 구현
- [ ] 반응형 디자인 마무리
- [ ] 연관된 글 보여주기 - 그래프 라이브러리 활용?

## Findings

- [StaticQuery](https://www.gatsbyjs.com/docs/how-to/querying-data/static-query/)에는 variables를 전달할 수 없음(대신 페이지가 아닌 컴포넌트에서 사용 가능)
- [GraphQL Type Generator](https://www.gatsbyjs.com/blog/how-to-use-gatsby-graphql-type-generation/)를 활용
- [gatsby-browser API](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) - page 컴포넌트를 감싸는 루트가 없기 때문에 전역 상태 관리를 하기 위해 활용
- [코드 하이라이트 플러그인](https://www.gatsbyjs.com/plugins/gatsby-remark-highlight-code/)을 사용
- [utterances](https://utteranc.es/?installation_id=28274981&setup_action=install)로 댓글 기능 추가
- ThemeProvider 편하다.
- 태그 대소문자를 구분?
- 전체 구조는 포스트, 404 제외 두 페이지, 두 컨테이너, 다수의 컴포넌트로
- TOC 하이라이트를 intersectionObserver로 구현하려 했지만, 클릭해서 이동할 때 제대로 intersection을 감지하지 못함, 스크롤 이벤트를 최적화하는 방법으로 사용해야 할듯
- sticky position을 사용할 때 부모 요소의 align-items 속성을 유심히 봐야 함
# 개인 블로그 만들기

## TODOS

- [x] useStaticQuery 사용하기
- [x] 포스트 정보 추가하기
- [x] 포스트 정보 불러오기
- [x] 포스트 리스트 정렬하기
- [x] 태그 추가하기
- [x] 검색 기능 제공하기
- [x] 다크모드 on/off with 로컬? 브라우저 기본 설정? 시스템 설정?
- [x] 포스트 레이아웃
- [x] 코드 블럭
- [x] 댓글 기능
- [x] 헤더 구체화
- [x] outSideClick 추가 
- [x] 다크 모드 버튼 디자인 변경
- [x] 라이트 모드 디자인 적용
- [x] 검색창 다시 구현하기
- [x] bio / 태그 / 리스트 / 포스트 레이아웃 잡기
- [x] 1차 반응형 디자인(레이아웃 위주)
- [x] bio 구현하기
- [x] 태그 리스트 구현하기
- [x] 태그 검색 기능 구현
- [ ] 상태 관리 리팩토링
- [ ] 태그 아이콘 디자인 변경
- [ ] 검색 결과에 메인 페이지와 같은 레이아웃 적용하기
- [ ] 포스트 디자인
- [ ] 포스트 네비게이션 붙이기
- [ ] 2차 반응형 디자인
- [ ] 검색 엔진 최적화
- [ ] 반응형 디자인 마무리
- [ ] 연관된 글 보여주기 - 그래프 라이브러리 활용?

## Findings

- [StaticQuery](https://www.gatsbyjs.com/docs/how-to/querying-data/static-query/)에는 variables를 전달할 수 없음(대신 페이지가 아닌 컴포넌트에서 사용 가능)
- [GraphQL Type Generator](https://www.gatsbyjs.com/blog/how-to-use-gatsby-graphql-type-generation/)를 활용
- [gatsby-browser API](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) - page 컴포넌트를 감싸는 루트가 없기 때문에 전역 상태 관리를 하기 위해 활용
- [코드 하이라이트 플러그인](https://www.gatsbyjs.com/plugins/gatsby-remark-highlight-code/)을 사용
- [utterances](https://utteranc.es/?installation_id=28274981&setup_action=install)로 댓글 기능 추가
- ThemeProvider를 편하다.
- 태그 대소문자를 구분
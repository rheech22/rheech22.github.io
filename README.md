# 개츠비로 블로그 만들기

## TODO

- [x] useStaticQuery 사용하기
- [x] 포스트 정보 추가하기
- [x] 포스트 정보 불러오기
- [x] 포스트 리스트 정렬하기
- [x] 태그 추가하기
- [x] 검색 기능 제공하기
- [x] 다크모드 on/off with 로컬? 브라우저 기본 설정? 시스템 설정?
- [x] 포스트 레이아웃
- [x] 코드 블럭
- [ ] 댓글 기능
- [ ] bio?
- [ ] 사이드바
- [ ] 포스트 네비게이션
- [ ] 반응형 디자인
- [ ] 검색 엔진 최적화
- [ ] 연관된 글 보여주기 - 그래프 라이브러리 활용?


## Findings

- StaticQuery에는 variables를 전달할 수 없다. 대신 페이지가 아닌 컴포넌트에서 사용 가능
- 개츠비에서 제공하는 GraphQl Type Generator를 활용하면 타입 스크립트를 쉽게 적용할 수 있음(나름 최신 버젼 필요)
- forntmatter가 생각보다 유용하다. 어떤 원리인지는 아직 모르겠다.
- page 컴포넌트를 감싸는 루트가 없기 때문에 전역 상태 관리를 하기 위해 gatsby-browser API 활용
- [플러그인](https://www.gatsbyjs.com/plugins/gatsby-remark-highlight-code/)으로 쉽게 코드 하이라이팅 가능
- 
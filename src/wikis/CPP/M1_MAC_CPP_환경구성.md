---
created: 2023-09-18 01:34:29 +0900
updated: 2023-09-18 02:07:06 +0900
---

- C++에 대한 경험도 아는 바도 없지만 `컴파일러 만들기`의 예제 코드를 돌려보고 싶었다.
- Visual Studio Mac 버전에서는 C++을 지원하지 않는다. VSCode를 사용하자.
- [VSCode 공식문서](https://code.visualstudio.com/docs/cpp/config-clang-mac)에 따라 설치 및 실행
- `error: linker command failed with exit code 1` 에러가 발생하여 `task.json`에서 `args` 중 `${file}`을 `${fileDirname}/*.cpp`으로 수정했다.
- 그럼에도 `warning: 'auto' type specifier is a C++11 extension [-Wc++11-extensions]` 경고와 `error: expected function body after function declarator` 에러 등이 발생했는데 `task.json`의 `args`에 `-std=c++17`을 추가해 주었더니 정상 동작했다.


---
created: 2023-12-25 00:58:26 +0900
updated: 2023-12-25 01:36:50 +0900
---

## Neovim 소개

Neovim은 Vim을 베이스로 더 업그레이된 버전의 에디터라고 할 수 있다. 기존 기능을 이어가면서도 유용하고 편리한 기능을 더 제공한다. 강력한 플러그인이 많다는 것이 가장 큰 특징이라고 할 수 있다. 아무래도 스크립트 언어인 Lua를 사용할 수 있다는 것이 개발자의 오픈소스 기여를 촉진시키는 것이 아닌가 싶다.

여러 자료에서 말하는 특징을 나열하자면

- 아키텍처 측면에서 성능이 더 뛰어나다.
- 유지 관리가 용이하기 때문에 오픈소스 컨트리뷰터들이 느낄 수 있는 진입 장벽이 낮다.
- LSP(Language Server Protocol)을 기본적으로 지원한다. 덕분에 코드 자동 완성, 코드 힌트 등을 이용할 수 있다.
- Vim 스크립트 외에도 Lua를 사용하여 개발할 수 있다.
- 위와 같은 이유로 풍부한 기능을 제공하는 플러그인이 많다.

## NeoVim 확장판

Vim보다는 덜하지만 Neovim도 역시 초기 세팅에 많은 공을 들여야 한다. 나와 같은 초보의 경우엔 더욱 그러한데 국내 자료도 결코 많은 편이라고 할 수는 없다. 다행스럽게도 Neovim에는 여러 확장판이 존재한다. 사실 이것들을 뭐라고 불러야 좋을지는 몰라 확장판이고 표현했다. 여러 유용한 플러그인들을 포함한 셋업을 제공한다고 이해하면 된다.

- [LunarVim](https://www.lunarvim.org/)
- [AstroNvim](https://astronvim.com/)
- [NvChad](https://nvchad.com/)
- [Trashvim](https://github.com/ixahmedxi/trashvim)
- [LazyVim](https://www.lazyvim.org/)

나는 현재 LazyVim을 사용하고 있다. 다른 셋업에 비해 비교적 미니멀하고 그렇기 때문에 커스텀하기에 좋다고 한다. 다른 것들을 사용해본 적은 없어서 비교는 어렵다.

## 참고

- LazyVim에 기반한 최근 설정은 Takuya Matsuyama의 [YouTube 채널](https://www.youtube.com/devaslife)을 가장 많이 참고했다. 처음에는 마치 클론코딩 하듯이 따라했다.

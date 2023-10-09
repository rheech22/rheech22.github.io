---
created: 2023-10-09 21:28:24 +0900
updated: 2023-10-09 22:47:09 +0900
---

[Alacritty](https://github.com/alacritty/alacritty)는 Rust로 작성된 GPU 가속 터미널 에뮬레이터다. iTerm에서만 한글 입력 중 백스페이스가 한번 씹히는 현상이 있어서 다른 툴을 찾아보던 중 알게 됐다. 사실 Alacritty에서는 한글 입력 중 특수문자가 씹히는 또다른 문제 현상이 있었는데 정작 언급한 두 가지 문제는 구름 입력기를 설치하는 것으로 해결했다. (문제 해결에 도움을 주신 이종립님 감사합니다 흑흑) 짧게나마 사용하면서 확실히 iTerm보다는 가볍고 빠르다고 느껴서 이번 경험하려고 한다.

## 설치

```bash
brew install --cask alacritty
```

## 설정

Alacritty는 탭 기능을 지원하지 않는다. 탭을 포기할 수는 없어 tmux를 설치해서 사용한다. 모든 설정은 이종립님의 위키 글을 참고했다.

아래 경로에 설정 파일을 먼저 만들었다.

`~/.config/alarcritty.yml`

내용은 [종립님의 설정](https://github.com/johngrib/dotfiles/blob/master/alacritty/alacritty.yml)에서 아래 내용만 추가했다. tmux 설정도 역시 [종립님의 것](https://github.com/johngrib/dotfiles/blob/master/.tmux.conf)과 동일하다. 다른 것이 있다면 tmux에서 [gruvbox 테마](https://github.com/egel/tmux-gruvbox)를 사용하는 것 정도...

```yml
# alacritty.yml

# 요즘은 gruvbox 테마를 빠져있다.
import:
  - ~/.config/alacritty/themes/themes/gruvbox_material_medium_dark.yaml

# tmux를 디폴트로 실행
shell:
  program: /usr/local/bin/tmux
  args:
    - new-session
    - -A
    - -D
    - -s
    - main

# 커서 이동을 위한 단축키 추가 설정
key_bindings:
  - { key: Right, mods: Alt, chars: "\x1BF" }
  - { key: Left,  mods: Alt, chars: "\x1BB" }
  - { key: Left,     mods: Command, chars: "\x1bOH",   mode: AppCursor   } # Home
  - { key: Right,    mods: Command, chars: "\x1bOF",   mode: AppCursor   } # End
  - { key: Back,     mods: Command, chars: "\x15"                        } # Delete line
  - { key: Back,     mods: Alt,     chars: "\x1b\x7f"                    } # Delete word

```

## 디버깅

- 한글 입력 중 커서가 입력 중인 문자를 포커스하고 있을 때 특수문자 입력이 씹히는 현상은 [구름 입력기](https://gureum.io/)를 사용하니까 문제가 해결됐다.
- git commit을 날릴 때 vim을 에디터로 사용하고 있는데 `'tmux-256color': unknown terminal type.`이라는 콘솔이 찍히는 현상이 있었다. `.gitconfig`의 `core.editor` 속성에 `TERM=xterm-256color`를 추가하는 방식으로 해결했다.
  ```
  # .gitconfig
  [core]
    editor = TERM=xterm-256color vim -c 'norm! ggA ' -c 'startinsert'
  ```

## 사용 예시

1. Alacritty를 실행하면 바로 tmux와 함께 켜진다.
2. `Command + d` 단축키로 탭을 수직 분할한다.
3. `Command + D` 단축키로 탭을 수평 분할한다.
4. `Command + w` 단축키로 탭을 닫는다.
5. `Command + 화살표` 단축키로 탭의 사이즈를 조절한다.
6. `Command + o` 단축키로 다음 탭으로 이동한다.

## 참고

- [이종립님 위키](https://johngrib.github.io/wiki/tools/alacritty/)
- [alarcritty](https://github.com/alacritty/alacritty)


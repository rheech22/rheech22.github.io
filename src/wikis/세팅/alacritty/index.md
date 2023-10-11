---
created: 2023-10-09 21:28:24 +0900
updated: 2023-10-12 03:13:51 +0900
---

[Alacritty](https://github.com/alacritty/alacritty)는 Rust로 작성된 GPU 가속 터미널 에뮬레이터라고 한다. 유독 iTerm에서만 한글을 입력하다가 백스페이스가 한번씩 씹히는 현상이 있어서 다른 도구를 찾던 중 알게 됐다. 사실 Alacritty에서는 특수문자가 씹히는 또다른 현상이 있었는데 정작 언급한 두 문제는 구름 입력기를 설치하는 것으로 해결했다. (문제 해결에 도움을 주신 이종립님 감사합니다 흑흑) 그러던 중 iTerm보다는 가볍고 빠르다고 느껴서 이번 기회에 사용해 보려고 한다.

## 설치

```bash
brew install --cask alacritty
```

## 설정

Alacritty는 탭 기능을 지원하지 않는다. 탭을 포기할 수는 없으니까 tmux를 설치한다.

```bash
brew install tmux
```

종립님의 [alacritty 설정](https://github.com/johngrib/dotfiles/blob/master/alacritty/alacritty.yml)과 [tmux 설정](https://github.com/johngrib/dotfiles/blob/master/.tmux.conf)과 거의 동일하다. 다른 부분만 기술한다.

```yml
# ~/.config/alacritty.yml

# 요즘은 gruvbox 테마에 빠져있음
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

# 나머지는 동일
```

```bash
# ~/.tmux.conf

set -g default-terminal "tmux-256color"

# vim insert mode에서 esc 반응이 느린 현상 해결
set -sg escape-time 10

# scroll history 설정, 기본은 2천줄이었던걸로 기억
set-option -g history-limit 20000

# 나머지는 동일
```

## 디버깅

- 한글 입력 중 커서가 입력 중인 문자를 포커스할 때 특수문자 입력이 씹히는 현상은 [구름 입력기](https://gureum.io/)를 사용하니까 발생하지 않았다. Mac 기본 한글 입력기의 문제일까?
- git commit을 작성할 때 vim을 기본 에디터로 사용하고 있는데 `'tmux-256color': unknown terminal type.`이라는 콘솔이 찍히면서 에디터가 제대로 실행되지 않았다. `.gitconfig`의 `core.editor` 속성에 `TERM=xterm-256color`를 추가하는 방식으로 해결했다.
  ```yml
  # .gitconfig
  [core]
    editor = TERM=xterm-256color vim -c 'norm! ggA ' -c 'startinsert'
  ```
- tmux에 터미널 테마가 제대로 적용되지 않고 문자가 두번씩 입력되는 현상이 있었다. tmux를 종료한 상태에서 이 [링크](https://stackoverflow.com/questions/45931164/duplicated-characters-and-non-updating-input-using-tmux-in-zsh)를 참고하여 아래와 같이 입력하여 해결했다.
  ```bash
  /opt/homebrew/Cellar/ncurses/6.2/bin/infocmp tmux-256color > ~/tmux-256color.info
  tic -xe tmux-256color tmux-256color.info
  infocmp tmux-256color | head
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
- [tmux](https://github.com/tmux/tmux)

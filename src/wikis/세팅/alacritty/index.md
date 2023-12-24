---
created: 2023-10-09 21:28:24 +0900
updated: 2023-12-24 22:39:11 +0900
---

[Alacritty](https://github.com/alacritty/alacritty)는 Rust로 작성된 GPU 가속 터미널 에뮬레이터. iTerm에서 한글 입력 중 BackSpace가 씹히는 현상이 있어 다른 터미널 프로그램을 찾던 중 알게 되었다. 사실 Alacritty에서도 특수문자가 씹히는 비슷한 현상이 있었는데 정작 두 문제는 구름 입력기를 설치하여 해결했다. (문제 해결에 도움을 주신 이종립님 감사합니다 흑흑)

어쨋든 그 와중에 Alacritty가 가볍다고 느껴서 현재까지 사용하고 있다. 설정 파일만 보고 싶다면 내 [dotfiles](https://github.com/rheech22/dotfiles)를 참고하면 된다.

## 설치

```bash
brew install --cask alacritty
```

만약 투명 배경의 blur 효과를 경험하고 싶다면 최근 업데이트된 [v0.13.0-rc](https://github.com/alacritty/alacritty/releases/tag/v0.13.0-rc1) 버전을 받아서 직접 설치해야 한다.

## 설정

- Alacritty는 탭 기능을 지원하지 않는다. 탭을 포기할 수는 없으니까 tmux도 함께 사용한다.

```bash
brew install tmux
```

- 종립님의 [alacritty 설정](https://github.com/johngrib/dotfiles/blob/master/alacritty/alacritty.yml)과 [tmux 설정](https://github.com/johngrib/dotfiles/blob/master/.tmux.conf)을 상당 부분 참고하다가 최근에 사용하지 않는 설정은 모두 걷어냈다.
- 최근 alacritty의 버전을 업데이트하면서 yaml 형식이 아닌 toml 형식으로 마이그레이션되었다.

```toml
# ~/.config/alacritty/alacritty.toml
live_config_reload = true

[env]
TERM = "alacritty"

[shell]
# run with tmux
args = ["new-session", "-A", "-D", "-s", "main"]
program = "/usr/local/bin/tmux"

# style
[window]
blur = true
dynamic_padding = true
opacity = 0.75
decorations = "Buttonless"
option_as_alt = "Both"
padding = { x = 4, y = 0 }

[colors]
# When true, bold text is drawn using the bright variant of colors.
draw_bold_text_with_bright_colors = true

[colors.bright]
black = "0x002b36"
blue = "0x839496"
cyan = "0x93a1a1"
green = "0x586e75"
magenta = "0x6c71c4"
red = "0xcb4b16"
white = "0xfdf6e3"
yellow = "0x657b83"

[colors.normal]
black = "0x002b36"
blue = "0x268bd2"
cyan = "0x2aa198"
green = "0x859900"
magenta = "0xd33682"
red = "0xdc322f"
white = "0xeee8d5"
yellow = "0xb58900"

[colors.primary]
background = "0x001217"
foreground = "0x708183"

# font
[font]
size = 14.0

[font.bold]
family = "MesloLGMDZ Nerd Font Mono"
style = "Bold"

[font.italic]
family = "MesloLGMDZ Nerd Font Mono"
style = "Italic"

[font.normal]
family = "MesloLGMDZ Nerd Font Mono"

# keymaps

# command mode
# (Control + q + :) to (Command + :)
[[keyboard.bindings]]
chars = "\u0011:"
key = "Semicolon"
mods = "Command"

# command mode
# (Control + q + :) to (Command + Shift + :)
[[keyboard.bindings]]
chars = "\u0011:"
key = "Semicolon"
mods = "Command|Shift"

# split horizontally
# (Control + q + ") to (Command + Shift + d)
[[keyboard.bindings]]
chars = "\u0011\""
key = "D"
mods = "Command|Shift"

# split vertically
# (Control + q + %) to (Command + d)
[[keyboard.bindings]]
chars = "\u0011%"
key = "D"
mods = "Command"

# new tab
# (Control + q + c) to (Command + t)
[[keyboard.bindings]]
chars = "\u0011c"
key = "T"
mods = "Command"

# close pane
# (Control + q + X) to (Command + w)
[[keyboard.bindings]]
chars = "\u0011X"
key = "W"
mods = "Command"

# next pane
# (Control + q + o) to (Command + o)
[[keyboard.bindings]]
chars = "\u0011o"
key = "O"
mods = "Command"

# switch pane
# (Control + q, Control + o) to (Command + Shift + o)
[[keyboard.bindings]]
chars = "\u0011\u000F"
key = "O"
mods = "Command|Shift"

# next tab
# (Control + q + p) to (Command + Shift + t)
[[keyboard.bindings]]
chars = "\u0011p"
key = "P"
mods = "Control"

# resize pane
# (Control + q + H) to (Command + Left)
[[keyboard.bindings]]
chars = "\u0011H"
key = "Left"
mods = "Command"

# (Control + q + J) to (Command + Down)
[[keyboard.bindings]]
chars = "\u0011J"
key = "Down"
mods = "Command"

# (Control + q + K) to (Command + Up)
[[keyboard.bindings]]
chars = "\u0011K"
key = "Up"
mods = "Command"

# (Control + q + L) to (Command + Right)
[[keyboard.bindings]]
chars = "\u0011L"
key = "Right"
mods = "Command"

# move to next word
# (ESC + F) to (Alt + Right)
[[keyboard.bindings]]
chars = "\u001BF"
key = "Right"
mods = "Alt"

# move to previous word
# (ESC + B) to (Alt + Left)
[[keyboard.bindings]]
chars = "\u001BB"
key = "Left"
mods = "Alt"

# move to start of line
# (ESC + O + H) to (Command + Left)
[[keyboard.bindings]]
chars = "\u001BOH"
key = "Left"
mode = "AppCursor"
mods = "Command"

# move to end of line 
# (ESC + O + F) to (Command + Right)
[[keyboard.bindings]]
chars = "\u001BOF"
key = "Right"
mode = "AppCursor"
mods = "Command"

# delete all inputs
[[keyboard.bindings]]
chars = "\u0015"
key = "Back"
mods = "Command"

# delete previous word
# (ESC + Delete) to (Alt + BackSpace)
[[keyboard.bindings]]
chars = "\u001B\u007F"
key = "Back"
mods = "Alt"
```

```bash
# ~/.tmux.conf

# set initial window number to zero not one
set -g base-index 1

# about latency of ESC key in Vim
set -sg escape-time 0

# extends history limit
set-option -g history-limit 20000

# set default terminal
set-option -g default-terminal "tmux-256color"

# about undercurl maybe...
set-option -a terminal-overrides ",alacritty:RGB"

# prevent to get a gap between window numbers
set-option -g renumber-windows on

# set styles
# style 관련 설정은 생략했으니 dotfiles을 참고

```

## 디버깅

- 한글 입력 중 커서가 입력 중인 문자를 포커스할 때 특수문자 입력이 씹히는 현상은 [구름 입력기](https://gureum.io/)를 사용하니까 발생하지 않았다. Mac의 기본 한글 입력기의 문제일까?
- git commit을 작성할 때 vim을 기본 에디터로 사용하고 있는데 `'tmux-256color': unknown terminal type.`이라는 콘솔이 찍히면서 에디터가 제대로 실행되지 않았다. `.gitconfig`의 `core.editor` 속성에 `TERM=xterm-256color`를 추가했다.
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

1. Raycast로 Al을 입력하여 Alacritty를 실행하면 자동으로 tmux와 함께 구동된다.
2. `Command + d` 단축키로 탭을 수직 분할한다.
3. `Command + D` 단축키로 탭을 수평 분할한다.
4. `Command + w` 단축키로 탭을 닫는다.
5. `Command + 화살표` 단축키로 탭의 사이즈를 조절한다.
6. `Command + o` 단축키로 다음 탭으로 이동한다.

## 참고

- [이종립님 위키](https://johngrib.github.io/wiki/tools/alacritty/)
- [alacritty](https://github.com/alacritty/alacritty)
- [tmux](https://github.com/tmux/tmux)

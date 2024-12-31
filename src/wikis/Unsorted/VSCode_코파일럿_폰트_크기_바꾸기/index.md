---
created: 2025-01-01 03:20:29 +0900
updated: 2025-01-01 03:30:41 +0900
---

## 계기

VSCode에서 코파일럿 Chat의 폰트 사이즈를 바꿀 수 있는 설정 옵션을 제공하지 않음

## 방법


터미널에서 아래 경로로 이동
```bash
cd Visual\ Studio\ Code.app/Contents/Resources/app/out/vs/workbench

# 윈도우라면
# C:\Users{user}\AppData\Local\Programs\Microsoft VS Code\resources\app\out\vs\workbench
```

편집기로 CSS 파일 수정

```bash
code workbench.desktop.main.css
```

아래 코드 추가
```css
// ...

:root {
  /* 원하는대로 수정하면 됨 */
  --vscode-copilot-chat-font-size: 16px;
  --vscode-copilot-chat-font-family: sans-serif;
  --vscode-copilot-chat-user-font-size: calc(
    var(--vscode-copilot-chat-font-size) - 3px
  );
}
.monaco-tl-contents .username {
  font-size: var(--vscode-copilot-chat-user-font-size) !important;
}
.monaco-button.interactive-followup-reply.monaco-text-button {
  font-size: var(--vscode-copilot-chat-font-size) !important;
}
.interactive-session
  .interactive-input-and-execute-toolbar
  .monaco-editor
  .mtk1,
.interactive-session .interactive-session-followups code {
  font-size: var(--vscode-copilot-chat-font-size) !important;
}
.interactive-item-container .monaco-tokenized-source,
.interactive-item-container code {
  background-color: var(--vscode-textPreformat-background);
  border-radius: 4px;
  color: var(--vscode-textPreformat-foreground);
  font-family: var(--vscode-copilot-chat-font-family);
  font-size: var(--vscode-copilot-chat-font-size) !important;
  padding: 1px 3px;
}
.interactive-item-container .value > .rendered-markdown h3,
.interactive-item-container .value > .rendered-markdown p,
.interactive-item-container .value > .rendered-markdown li {
  font-size: var(--vscode-copilot-chat-font-size) !important;
  line-height: 1.5em !important;
}

```

## 출처

https://github.com/orgs/community/discussions/55469

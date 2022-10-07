---
path: "/demo6"
date: "2022-04-15"
title: "코드 블럭"
tags: ["회고", "typescript"]
series: "반응형 프로그래밍"
---

The standard Lorem Ipsum passage, used since the 1500s
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

```tsx

type ButtonTypes = React.ButtonHTMLAttributes<HTMLButtonElement>['type']

interface ButtonProps {
  innerText?: string;
  type?: ButtonTypes;
  hidden?: boolean;
  onClick?: ()=> void;
}

const Button = ({
  type = 'button',
  hidden,
  innerText,
  onClick,
}: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} hidden={hidden}>
      {innerText}
    </button>
  );
};

export default Button;


```

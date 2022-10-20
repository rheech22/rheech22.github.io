---
path: "/code"
date: "2022-04-15"
title: "highlighting code"
tags: ["code", "markdown"]
series: "example 2"
---

The standard Lorem Ipsum passage, used since the 1500s...

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

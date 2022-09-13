import { css } from "styled-components";

export const flex = (alignItems = 'normal', justifyContent = 'normal', flexDirection = 'row') => css`
  display: flex;
  flex-direction: ${flexDirection};
  align-items: ${alignItems};
  justify-content: ${justifyContent};
`;

export const preventUserDrag = () => css`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

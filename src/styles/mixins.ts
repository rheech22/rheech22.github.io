import { css } from "styled-components";

export const flex = (alignItems = 'normal', justifyContent = 'normal', flexDirection = 'row') => css`
  display: flex;
  flex-direction: ${flexDirection};
  align-items: ${alignItems};
  justify-content: ${justifyContent};
`;

export const red = () => css`
  color: red;
`;
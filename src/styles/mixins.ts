import { css } from "styled-components";

export const flex = (alignItems = 'normal', justifyContent = 'normal', flexDirection = 'row') => css`
  display: flex;
  flex-direction: ${flexDirection};
  align-items: ${alignItems};
  justify-content: ${justifyContent};
`;

export const mainElementBreakPoints = () => css`
  @media screen and (min-width: 521px) {
    max-width: 840px;
  }

  @media screen and (min-width: 1341px) {
    max-width: 1240px;
  }
`;

export const horizontalDivider = () => css`
  border-bottom: 1px solid #21262d;
`;

import { css, CSSProperties } from 'styled-components';

export const flex = ({ alignItems = 'normal', justifyContent = 'normal', flexDirection = 'row' }: {
  alignItems?: CSSProperties['alignItems'];
  justifyContent?: CSSProperties['justifyContent'];
  flexDirection?: CSSProperties['flexDirection'];
} = {}) => css`
  display: flex;
  flex-direction: ${flexDirection};
  align-items: ${alignItems};
  justify-content: ${justifyContent};
`;

export const border = {
  top: () => css`
    border-top: ${({ theme }) => `1px solid ${theme.border}`}
  `,
  bottom: () => css`
    border-bottom: ${({ theme }) => `1px solid ${theme.border}`}
  `,
  right: () => css`
    border-right: ${({ theme }) => `1px solid ${theme.border}`}
  `,
  left: () => css`
    border-left: ${({ theme }) => `1px solid ${theme.border}`}
  `,
  default: () => css`
    border: ${({ theme }) => `1px solid ${theme.border}`}
  `,
};

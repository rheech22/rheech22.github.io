import { CSSProperties } from 'react';
import { css } from 'styled-components';

export const flex = ({
  alignItems = 'normal',
  justifyContent = 'normal',
  flexDirection = 'row'
}: {
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
    border-top: ${({ theme }) => `1px solid ${theme.border}`};
    transition: border-color 0.5s;
  `,
  bottom: () => css`
    border-bottom: ${({ theme }) => `1px solid ${theme.border}`};
    transition: border-color 0.5s;
  `,
  right: () => css`
    border-right: ${({ theme }) => `1px solid ${theme.border}`};
    transition: border-color 0.5s;
  `,
  left: () => css`
    border-left: ${({ theme }) => `1px solid ${theme.border}`};
    transition: border-color 0.5s;
  `,
  default: () => css`
    border: ${({ theme }) => `1px solid ${theme.border}`};
    transition: border-color 0.5s;
  `
};

export const font_sora = () => css`
  font-family: 'Sora', 'Open Sans', 'Helvetica Neue', sans-serif;
`;

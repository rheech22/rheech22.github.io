import { css } from 'styled-components';
import { device } from './breakpoints';
import { border, flex } from './mixins';

export const avatarWrapper = css`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  margin-right: 12px;
  width: 148px;
  height: 148px;
  
  @media ${device.widerThanLaptop} {
    margin-right: 0;
    width: 100%;
    min-height: 168px;  
  }
`;

export const avatar = css`
  width: 130px;
  height: 130px;
  border-radius: 50%;

  @media ${device.widerThanLaptop} {
    width: 168px;
    height: 168px;
  }
`;

export const previews = css`
  @media ${device.widerThanTablet} {
    margin: 0 10px;
    padding: 0px 10px;
    max-width: 780px;
  }

  ${flex({ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' })}
  margin-left: 0;
  padding: 0px 20px;
  width: 100%;
  
  & > p {
    margin-top: 50px;
    width: 100%;
    text-align: center;
  }

  & > li + li {
    ${border.top};
  }
`;

export const preventUserDrag = css`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const markdown = css`
  font-size: 16px;

  @media ${device.widerThanTablet} {
    font-size: 18px;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;

    .header-anchor {
      fill: ${({ theme }) => theme.default};
    }
  }

  h1 {
    margin-block-start: 1em;
    margin-block-end: 1em;
    font-size: 36px;
  }

  h2 {
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    font-size: 28.8px;
  }

  h3 {
    margin-block-start: 1em;
    margin-block-end: 1em;
    font-size: 21.6px;
  }

  h4 {
    margin-block-start: 1.22em;
    margin-block-end: 1.22em;
    font-size: 19.8px;
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    word-break: break-word;
    line-height: 1.8em;
  }

  ol, ul {
    padding-left: 40px;
  }

  ul {
    list-style-type: disc;
  }

  ol {
    list-style-type: decimal;
  }

  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }

  code {
    margin: 0;
    padding: 0.2em 0.4em;
    background-color: ${({ theme }) => theme.codeBg };
    border-radius: 6px;
    font-size: 85%;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  }

  deckgo-highlight-code {
    max-width: 90vw;
    font-size: 14px;
  }

  img {
    @media ${device.widerThanTablet} {
      max-width: 694px;
    }

    max-width: 90vw;
  }
`;

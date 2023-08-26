import { css } from 'styled-components';

import { device } from './breakpoints';
import { border, flex } from './mixins';

export const avatarWrapper = css`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  margin-right: 12px;
  width: 148px;
  height: 148px;

  @media ${device.widerThanLaptopS} {
    margin-right: 0;
    width: 100%;
    min-height: 168px;
  }
`;

export const avatar = css`
  width: 130px;
  height: 130px;
  border-radius: 50%;

  @media ${device.widerThanLaptopS} {
    width: 168px;
    height: 168px;
  }
`;

export const previews = css`
  @media ${device.widerThanTablet} {
    max-width: 780px;
  }

  ${flex({
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  })}

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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;

    .header-anchor {
      fill: ${({ theme }) => theme.link};
    }

    &:not(:first-of-type) {
      margin-top: 1.2em;
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

  em {
    font-style: oblique;
  }

  a {
    text-underline-position: under;

    &:hover {
      color: ${({ theme }) => theme.link};
    }
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    word-break: break-word;
    line-height: 32px;
  }

  ol,
  ul {
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
    line-height: 32px;

    p {
      margin: 0;
    }
  }

  table {
    display: block;
    border-color: gray;
    border-spacing: 0;
    border-collapse: collapse;
    width: max-content;
    max-width: 100%;
    overflow: auto;
    font-size: 16px;

    thead {
      display: table-header-group;
      vertical-align: middle;
      border-color: inherit;
    }

    tbody {
      display: table-row-group;
      vertical-align: middle;
      border-color: inherit;
    }

    tr {
      display: table-row;
      vertical-align: inherit;
      border: inherit;
      background-color: ${({ theme }) => theme.tableRowBg};
      border-top-width: 1px;
      border-top-style: solid;
      border-top-color: ${({ theme }) => theme.border};
      transition: all 0.5s;

      &:nth-of-type(2n) {
        background-color: ${({ theme }) => theme.searchBgFocused};
      }
    }

    th,
    td {
      display: table-cell;
      vertical-align: inherit;
      padding: 6px 13px;
      border-width: 1px;
      border-style: solid;
      border-color: ${({ theme }) => theme.tableCellBorder};
      transition: all 0.5s;
    }
  }

  blockquote {
    padding: 12px 20px 12px 28px;
    margin: 30px 0px;
    border-left: ${({ theme }) => `4px solid ${theme.default}`};
    font-family: Georgia, serif;
    font-style: italic;
    text-align: justify;
    font-size: 24px;
    line-height: 1.2;
    transition: all 0.5s;

    p {
      margin: 0;
    }
  }

  code {
    margin: 0;
    padding: 0.2em 0.4em;
    background-color: ${({ theme }) => theme.codeBg};
    color: ${({ theme }) => theme.codeFontColor};
    border-radius: 6px;
    font-size: 85%;
    font-family:
      SFMono-Regular,
      Menlo,
      Consolas,
      Liberation Mono,
      monospace;
  }

  strong {
    font-weight: bold;
  }

  deckgo-highlight-code {
    --deckgo-highlight-code-carbon-toolbar-display: none;
    --deckgo-highlight-code-white-space: pre-wrap;

    max-width: 90vw;
    font-size: 3vw;
    margin-bottom: 32px;

    @media ${device.widerThanMobile} {
      font-size: 14px;
    }
  }

  img {
    @media ${device.widerThanTablet} {
      max-width: 694px;
    }

    max-width: 90vw;
  }
`;

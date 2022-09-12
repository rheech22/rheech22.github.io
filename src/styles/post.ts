import { css } from "styled-components";
import { device } from "./breakpoints";

export const postStyle = css`
  font-size: 16px;

  @media ${device.tablet} {
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
`;

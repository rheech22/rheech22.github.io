import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

interface GlobalStyle {
  theme: {
    [key: string]: string;
  }
}

const globalStyle = createGlobalStyle<GlobalStyle>`
  ${reset}

  @font-face {
    font-family: 'pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    unicode-range: U+AC00-U+D7A3;
  }
  
  @font-face {
    font-family: BlinkMacSystemFont;
    src: local('※');
    font-weight: 400;
    font-style: normal;
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }
  
  * {
    box-sizing: border-box;
  }
  
  html, body {
    scroll-behavior: smooth;
    margin: 0;
  }
  
  body {
    font-family: BlinkMacSystemFont, 'pretendard', Arial ,sans-serif;
    width: 100%;
    background-color: ${({ theme }) => (theme.bg)};
    color: ${({ theme }) => (theme.default)};
    min-height: 100vh;
    line-height: 1.5;
    
    #gatsby-focus-wrapper{
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    
    main {
      font-size: 16px;
      width: 100%;
    }

    a {
      color: unset;
    }
  }
`;

export default globalStyle;

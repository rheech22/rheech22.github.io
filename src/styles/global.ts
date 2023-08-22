import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

interface GlobalStyle {
  theme: {
    [key: string]: string;
  };
}

const globalStyle = createGlobalStyle<GlobalStyle>`
  ${reset}
  
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
    font-family: 'Spoqa Han Sans', BlinkMacSystemFont,Arial ,sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    width: 100%;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.default};
    min-height: 100vh;
    line-height: 1.5;
    transition: all .5s;

    #gatsby-focus-wrapper{
      max-width: 1440px;
      padding: 0 15px;
      margin: 0 auto;
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

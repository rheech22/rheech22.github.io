import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

interface GlobalStyle {
  theme: {
    [key: string]: string;
  }
}

const globalStyle = createGlobalStyle<GlobalStyle>`
  ${reset}
  
  * {
    box-sizing: border-box;
  }
  
  html, body {
    scroll-behavior: smooth;
    margin: 0;
  }
  
  body {
    width: 100%;
    background-color: ${({ theme }) => (theme.bg)};
    color: ${({ theme }) => (theme.default)};
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
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

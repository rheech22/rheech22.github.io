import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Theme } from "./themes";

interface GlobalStyle {
  theme: Theme
}

export const GlobalStyle = createGlobalStyle<GlobalStyle>`
  ${reset}
  
  * {
    box-sizing: border-box;
  }

  
  html, body {
    scroll-behavior: smooth;
    margin: 0;
  }
  
  body {
    width: 100vw;
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

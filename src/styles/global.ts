import { createGlobalStyle } from "styled-components";
import { headerHeight } from "./measures";
import { Theme } from "./themes";
import reset from "styled-reset";

interface GlobalStyle {
  theme: Theme
}


export const GlobalStyle = createGlobalStyle<GlobalStyle>`
  ${reset}
  
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => (theme.bg)};
    color: ${({ theme }) => (theme.default)};
    min-height: 100%;
    min-width: 550px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    line-height: 1.5;
    
    main {
      padding-top: ${headerHeight};
      font-size: 16px;
    }

    a {
      color: unset;
    }
  }
`;
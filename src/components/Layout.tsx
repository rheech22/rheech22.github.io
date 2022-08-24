import { defineCustomElements as highlightCodeBlock } from "@deckdeckgo/highlight-code/dist/loader";
import { initialState, useGlobalContext, useDispatch } from "../contexts/GlobalContext";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { mainElementBreakPoints } from "../styles/mixins";
import { headerHeight } from "../styles/measures";
import { dark, light, Theme } from "../styles/themes";
import reset from 'styled-reset';

import Header from "./Header";
import SEO from "./SEO";

interface Props {
  children: JSX.Element | null;
  theme?: string;
}

const Layout = ({
  children,
}: Props) => {
  const { isDark } = useGlobalContext() ?? initialState;
  const dispatch = useDispatch();

  const changeDisplayMode = () => {
    dispatch?.({
      name: 'isDark',
      payload: !isDark,
    });
    localStorage.setItem('isDark', JSON.stringify(!isDark));
  };

  highlightCodeBlock();

  return (
    <ThemeProvider theme={isDark ? dark : light }>
      <GlobalStyle/>
      <SEO title="BLOG" />
      <Header changeDisplayMode={changeDisplayMode}/>
      <main>
        {children}
      </main>
    </ThemeProvider>
  );
};

export default Layout;

interface GlobalStyle {
  theme: Theme
}

const GlobalStyle = createGlobalStyle<GlobalStyle>`
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
      margin: 0 auto;
      padding: ${headerHeight} 40px;
      width: 720px;
      font-size: 16px;
      /* ${mainElementBreakPoints} */
    }

    a {
      color: unset;
    }
  }
`;

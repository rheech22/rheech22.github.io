import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import { initialState, usePostContext, usePostDispatch } from "../contexts/PostContext";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { mainElementBreakPoints } from "../styles/mixins";
import { dark, light, Theme } from "../styles/themes";
import reset from 'styled-reset';

import Header from "./Header";

interface GlobalStyle {
  theme: Theme
}

const GlobalStyle = createGlobalStyle<GlobalStyle>`
  ${reset}
  
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => (theme.bgColor)};
    color: ${({ theme }) => (theme.color)};
    min-height: 100%;
    min-width: 550px;
    
    main {
      margin: 0 auto;
      padding: 50px 40px;
      ${mainElementBreakPoints}
      font-size: 16px;
    }

    a {
      color: unset;
    }
  }
`;


interface LayoutProps {
  children: JSX.Element | null;
  theme?: string;
}


const Layout = ({
  children,
}: LayoutProps) => {
  const { isDark } = usePostContext() ?? initialState;
  const dispatch = usePostDispatch();

  const changeDisplayMode = () => {
    dispatch?.({
      name: 'isDark',
      payload: !isDark,
    });
    localStorage.setItem('isDark', JSON.stringify(!isDark));
  };

  deckDeckGoHighlightElement();

  return (
    <>
      <ThemeProvider theme={isDark ? dark : light }>
        <GlobalStyle/>
        <Header changeDisplayMode={changeDisplayMode}/>
        <main>
          {children}
        </main>
      </ThemeProvider>
    </>
  );
};

export default Layout;

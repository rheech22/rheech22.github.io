import { createGlobalStyle, ThemeProvider } from "styled-components";
import { mainElementBreakPoints } from "../styles/mixins";
import reset from 'styled-reset';
import Header from "./Header";
import { PostContextProvider } from "../contexts/PostContext";
import { dark, light, Theme } from "../styles/themes";
import { useEffect, useState } from "react";

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
    
    main {
      /* display: flex;
      flex-wrap: wrap; */
      padding: 50px 40px;
      margin: 0 auto;
      ${mainElementBreakPoints}
    }

    a {
      &:visited {
        color: unset;
      }
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
  const [isDark, setIsDark] = useState(false);

  const changeDisplayMode = () => setIsDark(prev => !prev);

  return (
    <>
      <ThemeProvider theme={isDark ? dark : light }>
        <GlobalStyle/>
        <PostContextProvider>
          <Header changeDisplayMode={changeDisplayMode}/>
          <main>
            {children}
          </main>
        </PostContextProvider>
      </ThemeProvider>
    </>
  );
};

export default Layout;

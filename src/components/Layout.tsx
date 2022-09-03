import { defineCustomElements as highlightCodeBlock } from "@deckdeckgo/highlight-code/dist/loader";
import { useGlobalContext } from "../contexts/GlobalContext";

import { ThemeProvider } from "styled-components";
import { dark, light } from "../styles/themes";
import { GlobalStyle } from "../styles/global";

import Header from "./Header";
import SEO from "./SEO";

interface Props {
  children: JSX.Element | null;
  theme?: string;
}

const Layout = ({
  children,
}: Props) => {
  const { isDark } = useGlobalContext();

  highlightCodeBlock();

  return (
    <ThemeProvider theme={isDark ? dark : light }>
      <GlobalStyle/>
      <SEO title="BLOG" />
      <Header />
      <main>
        {children}
      </main>
    </ThemeProvider>
  );
};

export default Layout;

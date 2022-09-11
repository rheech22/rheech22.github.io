import { useEffect } from "react";

import { defineCustomElements as highlightCodeBlock } from "@deckdeckgo/highlight-code/dist/loader";

import { useDispatch, useGlobalContext } from "../contexts/GlobalContext";
import usePosts from "../hooks/usePosts";

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
  const dispatch = useDispatch();
  const posts = usePosts();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const tag = params.get('tag');
    const keyword = params.get('keyword');

    if (tag) dispatch({ type: 'searchByTag', payload: { tag } });
    if (keyword) dispatch({ type: 'searchByKeyword', payload: { keyword } });
  }, []);

  useEffect(()=>{
    if (!posts.length) return;
    dispatch({ type: 'setPosts', payload: { posts } });
  }, [posts]);

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

import { useEffect } from "react";

import { useDispatch, useGlobalContext } from "../contexts/GlobalContext";
import usePosts from "../hooks/usePosts";

import { ThemeProvider } from "styled-components";
import { dark, light } from "../styles/themes";
import { GlobalStyle } from "../styles/global";

import Header from "./Header";
import SEO from "./SEO";

import {
  defineCustomElements as highlightCodeBlock,
} from "@deckdeckgo/highlight-code/dist/loader";
import Footer from "./Footer";

interface Props {
  children: JSX.Element | null;
  theme?: string;
}

const Layout = ({
  children,
}: Props) => {
  const { displayMode } = useGlobalContext();
  const dispatch = useDispatch();
  const posts = usePosts();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const tag = params.get('tag');
    const keyword = params.get('keyword');
    const filter = params.get('filter');

    if (tag) dispatch({ type: 'searchByTag', payload: { tag, filter } });
    if (keyword) dispatch({ type: 'searchByKeyword', payload: { keyword, filter } });
  }, []);

  useEffect(()=>{
    if (!posts.length) return;
    dispatch({ type: 'setPosts', payload: { posts } });
  }, [posts]);

  highlightCodeBlock();

  return (
    <ThemeProvider theme={displayMode === 'day' ? light : dark }>
      <GlobalStyle/>
      <Header />
      <main>
        {children}
      </main>
      <Footer/>
    </ThemeProvider>
  );
};

export default Layout;

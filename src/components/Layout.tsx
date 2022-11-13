import { ThemeProvider } from 'styled-components';
import { dark, light } from '../styles/themes';
import GlobalStyle from '../styles/global';

import { useContext } from '../store/context';
import useSearchParams from '../hooks/useSearchParams';
import usePosts from '../hooks/usePosts';
import useTheme from '../hooks/useTheme';

import Header from './Header';
import Footer from './Footer';

import {
  defineCustomElements as highlightCodeBlock,
} from '@deckdeckgo/highlight-code/dist/loader';

interface Props {
  children: JSX.Element | null;
  theme?: string;
}

const Layout = ({ children }: Props) => {
  useTheme();

  useSearchParams();

  usePosts();

  highlightCodeBlock();

  const { displayMode } = useContext();

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

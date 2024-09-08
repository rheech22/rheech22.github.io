import { ThemeProvider } from 'styled-components';

import useSearchParams from '../hooks/useSearchParams';
import useTheme from '../hooks/useTheme';
import useWikis from '../hooks/useWikis';
import { useContext } from '../store/context';
import GlobalStyle from '../styles/global';
import { dark, light } from '../styles/themes';
import Footer from './Footer';
import Header from './Header';
import { MDXProvider } from '@mdx-js/react';

interface Props {
  children: JSX.Element | null;
  theme?: string;
}

const Layout = ({ children }: Props) => {
  useTheme();

  useSearchParams();

  useWikis();

  const { displayMode } = useContext();

  return (
    <ThemeProvider theme={displayMode === 'day' ? light : dark}>
      <GlobalStyle theme={displayMode === 'day' ? light : dark} />
      <MDXProvider>
        <Header />
        <main>{children}</main>
        <Footer />
      </MDXProvider>
    </ThemeProvider>
  );
};

export default Layout;

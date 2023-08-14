import { ThemeProvider } from 'styled-components';

import usePosts from '../hooks/usePosts';
import useSearchParams from '../hooks/useSearchParams';
import useTheme from '../hooks/useTheme';
import { useContext } from '../store/context';
import GlobalStyle from '../styles/global';
import { dark, light } from '../styles/themes';
import Footer from './Footer';
import Header from './Header';

interface Props {
  children: JSX.Element | null;
  theme?: string;
}

const Layout = ({ children }: Props) => {
  useTheme();

  useSearchParams();

  usePosts();

  const { displayMode } = useContext();

  return (
    <ThemeProvider theme={displayMode === 'day' ? light : dark}>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;

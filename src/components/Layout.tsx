import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background-color: ${props => (props.theme === 'dark' ? "black" : "white")};
    color: ${props => (props.theme === 'dark' ? "white" : "black")};
    min-height: 100%;
    
    main {
      max-width: 840px;
      padding: 0 40px;
      margin: 0 auto;
    }
  }
`;

interface LayoutProps {
  children: JSX.Element | null;
  theme?: string;
}

const Layout = ({
  children,
  theme = 'dark',
}: LayoutProps) => {
  return (
    <>
      <GlobalStyle theme={theme} />
      {children}
    </>
  );
};

export default Layout;

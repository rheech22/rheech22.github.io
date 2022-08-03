import { createGlobalStyle } from "styled-components";
import { mainElementBreakPoints } from "../styles/mixins";
import reset from 'styled-reset';
import Header from "./Header";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background-color: ${props => (props.theme === 'dark' ? "black" : "white")};
    color: ${props => (props.theme === 'dark' ? "white" : "black")};
    min-height: 100%;
    
    main {
      /* display: flex;
      flex-wrap: wrap; */
      padding: 0 40px;
      margin: 0 auto;
      ${mainElementBreakPoints}
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
      <Header/>
      <main>
        {children}
      </main>
    </>
  );
};

export default Layout;

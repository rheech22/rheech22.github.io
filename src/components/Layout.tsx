import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';


const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background-color: ${props => (props.theme === "dark" ? "black" : "white")};
    color: ${props => (props.theme === "dark" ? "white" : "black")};

    width: 100%;
    min-height: 100vh;
  }
`;

interface LayoutProps {
  children: JSX.Element;
  theme: string;
}

const Layout = ({
  children,
  theme,
}: LayoutProps) => {
  return (
    <>
      <GlobalStyle theme={theme} />
      {children}
    </>
  );
};

export default Layout;

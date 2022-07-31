import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.theme === "dark" ? "black" : "white")};
    color: ${props => (props.theme === "dark" ? "white" : "black")};
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
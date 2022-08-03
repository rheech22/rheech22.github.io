import styled from "styled-components";
import { flex } from "../styles/mixins";
import Search from "./Search";

const Container = styled.header`
  ${flex('center')}
  padding: 0 30px;
  width: 100%;
  height: 50px;
  background-color: blue;
`;

const Header = () => {
  return (
    <Container>
      <Search />
    </Container>
  );
};

export default Header;
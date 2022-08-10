import styled from "styled-components";
import { flex } from "../styles/mixins";
import SearchBar from "./SearchBar";

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
      <SearchBar />
    </Container>
  );
};

export default Header;
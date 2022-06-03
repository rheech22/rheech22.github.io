import styled from 'styled-components';
import { Link } from "gatsby";

const Container = styled.main`
  background-color: red;
  color: '#232129';
  padding: 96;
  font-family: '-apple-system, Roboto, sans-serif, serif';
`;

export default () => {
  return (
    <Container>
      <title>blog</title>
      <nav>
        <Link to={'/about'}>About!</Link>
      </nav>
    </Container>
  );
};

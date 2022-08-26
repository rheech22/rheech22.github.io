import styled from "styled-components";
import { flex } from "../styles/mixins";

const Tags = () => {
  return (
    <Container>
      Tags here...
    </Container>
  );
};

export default Tags;

const Container = styled.div`
  /* border: 1px solid violet; */
  ${flex('center', 'center', 'center')}
  width: 100%;
  height: fit-content;
`;
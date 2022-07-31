import styled from "styled-components";
import { Link } from "gatsby";

import Layout from "../components/Layout";

const Container = styled.main``;

export default () => {
  return (
    <Layout theme='dark'>
      <Container>
        <title>Not found</title>
        <p>
          <Link to="/">Go home</Link>
        </p>
      </Container>
    </Layout>
  );
};


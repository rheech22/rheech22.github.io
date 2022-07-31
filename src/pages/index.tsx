import styled from 'styled-components';

import PostPreviews from '../components/PostPreviews';
import Layout from '../components/Layout';

const Container = styled.main``;

export default () => {
  return (
    <Layout theme='dark'>
      <Container>
        <PostPreviews />
      </Container>
    </Layout>
  );
};

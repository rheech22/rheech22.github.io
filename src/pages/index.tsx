import PostPreviews from '../components/PostPreviews';
import Layout from '../components/Layout';
import { globalContext } from '../context';
import { useContext } from 'react';

export default () => {
  const { queryText } = useContext(globalContext);

  console.log(queryText);

  return (
    <Layout>
      <PostPreviews />
    </Layout>
  );
};

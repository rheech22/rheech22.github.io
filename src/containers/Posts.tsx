import styled from 'styled-components';
import { previews } from '../styles/modules';

import { useContext } from '../store/context';
import useLoadMore from '../hooks/useLoadMore';

import Post from '../components/Post';
import LoadMore from '../components/LoadMore';
import ScrollToTop from '../components/ScrollToTop';

const Posts = () => {
  const { posts } = useContext();

  const { offset, loadMore } = useLoadMore(posts);

  if (!posts.length) return null;

  return (
    <Container>
      {posts
        .slice(0, offset)
        .map(({ node: {
          id,
          frontmatter: {
            updated,
            title,
          },
          fields: {
            slug,
          },
        } }) =>
          <Post
            key={id}
            path={slug}
            updated={updated}
            title={title}
          />
        )}
      <LoadMore load={loadMore}/>
      <ScrollToTop />
    </Container>
  );
};

export default Posts;

const Container = styled.ul`
  ${previews}
`;

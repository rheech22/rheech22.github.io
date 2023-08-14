import { useEffect } from 'react';

import styled from 'styled-components';
import { previews } from '../styles/modules';

import { useContext, useDispatch } from '../store/context';
import useLoadMore from '../hooks/useLoadMore';

import Post from '../components/Post';
import LoadMore from '../components/LoadMore';
import ScrollToTop from '../components/ScrollToTop';

const Posts = () => {
  const dispatch = useDispatch();

  const { posts } = useContext();

  const { offset, loadMore } = useLoadMore(posts);

  useEffect(()=> {
    dispatch({ type: 'clearSearch' });
  }, []);

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

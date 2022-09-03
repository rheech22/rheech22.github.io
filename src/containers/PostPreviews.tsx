import { useEffect } from 'react';
import { useDispatch } from '../contexts/GlobalContext';

import styled from 'styled-components';

import PostPreview from '../components/PostPreview';
import LoadMore from '../components/LoadMore';
import NoContent from '../components/NoContent';

import useLoadMore from '../hooks/useLoadMore';
import usePosts from '../hooks/usePosts';

const PostPreviews = () => {
  const posts = usePosts();

  const { offset, loadMore } = useLoadMore(posts);

  const dispatch = useDispatch();

  useEffect(()=>{
    if (!posts.length) return;

    dispatch({ type: 'setPosts', payload: { posts } });
  }, [posts]);

  return (
    <Container>
      {posts.length === 0
        ? <NoContent prefix='게시글이' />
        : posts
          .slice(0, offset)
          .map(({ node: post }) =>
            <PostPreview
              key={post.id}
              path={post.frontmatter?.path}
              date={post.frontmatter?.date}
              title={post.frontmatter?.title}
              tags={post.frontmatter?.tags}
              excerpt={post.excerpt}
            />
          )}
      <LoadMore load={loadMore}/>
    </Container>
  );
};

export default PostPreviews;

const Container = styled.ul`
  margin-top: 40px;
`;

import { useContext } from '../store/context';
import useLoadMore from '../hooks/useLoadMore';

import styled from 'styled-components';
import { previews } from '../styles/modules';

import PostPreview from '../components/PostPreview';
import LoadMore from '../components/LoadMore';

const PostPreviews = () => {
  const { posts } = useContext();

  const { offset, loadMore } = useLoadMore(posts);

  if (!posts.length) return null;

  return (
    <Container>
      {posts
        .slice(0, offset)
        .map(({ node: post }) =>
          <PostPreview
            key={post.id}
            path={post.frontmatter?.path ?? ''}
            date={post.frontmatter?.date ?? ''}
            title={post.frontmatter?.title ?? ''}
            tags={post.frontmatter?.tags ?? []}
            excerpt={post.excerpt ?? ''}
          />
        )}
      <LoadMore load={loadMore}/>
    </Container>
  );
};

export default PostPreviews;

const Container = styled.ul`
  ${previews}
`;

import { useGlobalContext } from '../contexts/GlobalContext';
import useLoadMore from '../hooks/useLoadMore';

import styled from 'styled-components';
import { postPreviews } from '../styles/postPreviews';

import PostPreview from '../components/PostPreview';
import LoadMore from '../components/LoadMore';
import NoContent from '../components/NoContent';


const PostPreviews = () => {
  const { posts } = useGlobalContext();

  const { offset, loadMore } = useLoadMore(posts);

  return (
    <Container>
      {posts.length === 0
        ? <NoContent prefix='게시글이' />
        : posts
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
  ${postPreviews}
`;

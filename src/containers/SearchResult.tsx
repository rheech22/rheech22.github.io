import styled from 'styled-components';
import { previews } from '../styles/previews';

import useFilteredPosts from '../hooks/useFilteredPosts';
import useLoadMore from '../hooks/useLoadMore';

import PostPreview from '../components/PostPreview';
import NoContent from '../components/NoContent';
import LoadMore from '../components/LoadMore';

const SearchResult = () => {
  const filteredPosts = useFilteredPosts();

  const { offset, loadMore } = useLoadMore(filteredPosts);

  return (
    <Container>
      {filteredPosts.length === 0
        ? <NoContent prefix='검색 결과가'/>
        : filteredPosts
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

export default SearchResult;

const Container = styled.ul`
  ${previews}
`;

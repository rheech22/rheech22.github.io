import styled from 'styled-components';

import PostPreview from '../components/PostPreview';
import NoContent from '../components/NoContent';
import LoadMore from '../components/LoadMore';

import useFilteredPosts from '../hooks/useFilteredPosts';
import useLoadMore from '../hooks/useLoadMore';

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
              excerpt={post.excerpt}
            />
          )}
      <LoadMore load={loadMore}/>
    </Container>
  );
};

export default SearchResult;

const Container = styled.ul`
  margin-top: 40px;
`;

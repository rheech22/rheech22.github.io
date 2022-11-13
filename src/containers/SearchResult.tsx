import styled from 'styled-components';
import { previews } from '../styles/modules';

import useFilteredPosts from '../hooks/useFilteredPosts';
import useLoadMore from '../hooks/useLoadMore';

import ScrollToTop from '../components/ScrollToTop';
import NoContent from '../components/NoContent';
import LoadMore from '../components/LoadMore';
import Post from '../components/Post';

import { SearchPageProps } from '../pages/search';

const SearchResult = ({ locationState }: {locationState: SearchPageProps['location']['state']}) => {
  const filteredPosts = useFilteredPosts({
    tag: locationState?.tag,
    series: locationState?.series,
    searchFilter: locationState?.searchFilter,
    searchKeyword: locationState?.searchKeyword,
  });

  const { offset, loadMore } = useLoadMore(filteredPosts);

  return (
    <Container>
      {filteredPosts.length === 0
        ? <NoContent prefix="검색 결과가"/>
        : filteredPosts
          .slice(0, offset)
          .map(({ node: {
            id,
            excerpt,
            frontmatter: {
              path,
              date,
              title,
              tags,
            },
          } }) =>
            <Post
              key={id}
              path={path}
              date={date}
              title={title}
              tags={tags ?? []}
              excerpt={excerpt}
            />
          )}
      <LoadMore load={loadMore}/>
      <ScrollToTop />
    </Container>
  );
};

export default SearchResult;

const Container = styled.ul`
  ${previews}
`;

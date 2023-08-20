import styled from 'styled-components';

import LoadMore from '../components/LoadMore';
import NoContent from '../components/NoContent';
import Post from '../components/Post';
import ScrollToTop from '../components/ScrollToTop';
import useFilteredPosts from '../hooks/useFilteredPosts';
import useLoadMore from '../hooks/useLoadMore';
import { SearchPageProps } from '../pages/search';
import { device } from '../styles/breakpoints';
import { border, font_sora } from '../styles/mixins';
import { previews } from '../styles/modules';

const SearchResult = ({
  locationState
}: {
  locationState: SearchPageProps['location']['state'];
}) => {
  const filteredPosts = useFilteredPosts({
    searchFilter: locationState?.searchFilter,
    searchKeyword: locationState?.searchKeyword
  });

  const { offset, loadMore } = useLoadMore(filteredPosts);

  return (
    <Container>
      <Title>
        SEARCHING FOR <strong>{locationState?.searchKeyword}</strong>
      </Title>
      {filteredPosts.length === 0 ? (
        <NoContent prefix="검색 결과가" />
      ) : (
        filteredPosts.slice(0, offset).map(
          ({
            node: {
              id,
              frontmatter: { updated, title },
              fields: { slug }
            }
          }) => <Post key={id} path={slug} updated={updated} title={title} />
        )
      )}
      <LoadMore load={loadMore} />
      <ScrollToTop />
    </Container>
  );
};

export default SearchResult;

const Container = styled.ul`
  ${previews};

  & > p {
    font-size: 24px;
    font-weight: 600;
  }
`;

const Title = styled.div`
  ${font_sora()};
  font-weight: 600;
  font-size: 24px;
  width: 100%;
  text-align: end;

  & > strong {
    color: #bd4a55;
  }

  ${border.bottom};

  @media ${device.widerThanTablet} {
    font-size: 32px;
  }
`;

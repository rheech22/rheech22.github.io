import styled from 'styled-components';

import BigSearch from '../assets/icons/BigSearch';
import LoadMore from '../components/LoadMore';
import NoContent from '../components/NoContent';
import Post from '../components/Post';
import ScrollToTop from '../components/ScrollToTop';
import useFilteredPosts from '../hooks/useFilteredPosts';
import useLoadMore from '../hooks/useLoadMore';
import { SearchPageProps } from '../pages/search';
import { device } from '../styles/breakpoints';
import { flex } from '../styles/mixins';
import { previews } from '../styles/modules';

const SearchResult = ({ locationState }: {locationState: SearchPageProps['location']['state']}) => {
  const filteredPosts = useFilteredPosts({
    searchFilter: locationState?.searchFilter,
    searchKeyword: locationState?.searchKeyword,
  });

  const { offset, loadMore } = useLoadMore(filteredPosts);

  return (
    <Container>
      <div>
        <BigSearch/>
        <span>{locationState?.searchKeyword}</span>
      </div>
      {filteredPosts.length === 0
        ? <NoContent prefix="검색 결과가"/>
        : filteredPosts
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

export default SearchResult;

const Container = styled.ul`
  & > div {
    ${flex({ alignItems: 'center' })};
    margin: 30px 0;
    font-size: 28.8px;

    span {
      margin-left: 8px;
      height: 100%;
    }

    svg {
      height: 32px;
      width: 32px;
      path {
        fill: transparent;
        stroke: ${({ theme })=> theme.mute};
        transition: all .5s;
      }
    }

    @media ${device.widerThanLaptopS} {
      margin-top: 0;
    }
  }
  
  ${previews};
`;

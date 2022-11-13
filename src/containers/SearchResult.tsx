import styled from 'styled-components';
import { previews } from '../styles/modules';
import { device } from '../styles/breakpoints';
import { flex } from '../styles/mixins';
import BigSearch from '../assets/icons/BigSearch';
import Series from '../assets/icons/Series';

import useFilteredPosts from '../hooks/useFilteredPosts';
import useLoadMore from '../hooks/useLoadMore';

import ScrollToTop from '../components/ScrollToTop';
import NoContent from '../components/NoContent';
import LoadMore from '../components/LoadMore';
import Post from '../components/Post';

import { SearchPageProps } from '../pages/search';

const ICONS: Record<string, JSX.Element | string> = {
  'tag': '#',
  'series': <Series/>,
  'searchKeyword': <BigSearch/>,
};

const SearchResult = ({ locationState }: {locationState: SearchPageProps['location']['state']}) => {
  const filteredPosts = useFilteredPosts({
    tag: locationState?.tag,
    series: locationState?.series,
    searchFilter: locationState?.searchFilter,
    searchKeyword: locationState?.searchKeyword,
  });

  const { offset, loadMore } = useLoadMore(filteredPosts);

  const [ filter, value ] = Object.entries(locationState ?? {})[0] ?? [ '', '' ];

  return (
    <Container>
      <div>{ICONS[filter]}<span>{value}</span></div>
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

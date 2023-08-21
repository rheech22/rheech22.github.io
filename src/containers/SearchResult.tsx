import styled from 'styled-components';

import LoadMore from '../components/LoadMore';
import NoContent from '../components/NoContent';
import ScrollToTop from '../components/ScrollToTop';
import WikiLink from '../components/WikiLink';
import useFilter from '../hooks/useFilter';
import useLoadMore from '../hooks/useLoadMore';
import { SearchPageProps } from '../pages/search';
import { device } from '../styles/breakpoints';
import { border, font_sora } from '../styles/mixins';
import { previews } from '../styles/modules';

const SearchResult = ({
  locationState: { keyword, filter }
}: {
  locationState: SearchPageProps['location']['state'];
}) => {
  const filtered = useFilter({ filter, keyword });

  const { offset, loadMore } = useLoadMore(filtered);

  return (
    <Container>
      <Title>
        SEARCHING FOR <strong>{keyword}</strong>
      </Title>
      {filtered?.length ? (
        filtered.slice(0, offset).map(
          ({
            node: {
              id,
              frontmatter: { updated },
              fields: { slug, title }
            }
          }) => <WikiLink key={id} slug={slug} updated={updated} title={title} />
        )
      ) : (
        <NoContent prefix="검색 결과가" />
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

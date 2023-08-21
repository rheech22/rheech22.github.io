import styled from 'styled-components';

import LoadMore from '../components/LoadMore';
import ScrollToTop from '../components/ScrollToTop';
import WikiLink from '../components/WikiLink';
import useLoadMore from '../hooks/useLoadMore';
import { useContext } from '../store/context';
import { device } from '../styles/breakpoints';
import { border, font_sora } from '../styles/mixins';
import { previews } from '../styles/modules';

const RecentWikis = () => {
  const { wikis } = useContext();

  const { offset, loadMore } = useLoadMore(wikis);

  if (!wikis.length) return null;

  return (
    <Container>
      <Title>RECENT UPDATES</Title>
      {wikis.slice(0, offset).map(
        ({
          node: {
            id,
            frontmatter: { updated },
            fields: { slug, title }
          }
        }) => (
          <WikiLink key={id} slug={slug} updated={updated} title={title} />
        )
      )}
      <LoadMore load={loadMore} />
      <ScrollToTop />
    </Container>
  );
};

export default RecentWikis;

const Container = styled.ul`
  ${previews}
`;

const Title = styled.div`
  ${font_sora()};
  font-weight: 600;
  font-size: 24px;
  text-align: end;
  width: 100%;
  ${border.bottom};

  @media ${device.widerThanTablet} {
    font-size: 32px;
  }
`;

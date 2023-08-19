import { Link } from 'gatsby';
import styled from 'styled-components';

import ScrollToTop from '../components/ScrollToTop';
import useSlugs from '../hooks/useSlugs';
import { border, font_sora } from '../styles/mixins';
import { previews } from '../styles/modules';

const Wikis = () => {
  const { slugs } = useSlugs();

  return (
    <Container>
      <Title>INDEX</Title>
      <ul>
        {[...slugs].sort().map((slug) => {
          const segments = slug.replace('/', '').split('/');
          const title = segments[segments.length - 1].replaceAll('_', ' ');

          return (
            <List key={title} depth={segments.length - 1}>
              <Link to={slug}>{title}</Link>
            </List>
          );
        })}
      </ul>
      <ScrollToTop />
    </Container>
  );
};

export default Wikis;

const Container = styled.ul`
  ${previews}
`;

const Title = styled.div`
  ${font_sora()};
  font-weight: 600;
  font-size: 32px;
  text-align: end;
  width: 100%;
  ${border.bottom};
`;

const List = styled.li<{ depth: number }>`
  padding-left: ${({ depth }) => `${depth * 10}px`};

  & > a {
    text-underline-position: under;

    &:hover {
      color: ${({ theme }) => theme.link};
    }
  }
`;

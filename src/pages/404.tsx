import { Link, navigate } from 'gatsby';
import styled from 'styled-components';

import SEO from '../components/SEO';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

// eslint-disable-next-line react/display-name
export default () => (
  <Container>
    <h1>404</h1>
    <p>Sorry, the page could not be found.</p>
    <p>
      Visit the <Link to="/">homepage</Link> or{' '}
      <Link to="#" onClick={() => navigate(-1)}>
        go back.
      </Link>
    </p>
  </Container>
);

const Container = styled.div`
  padding: 3vw;
  width: 100%;
  min-height: 100vh;
  color: ${({ theme }) => theme.title};

  & > h1 {
    font-size: 10vh;
    font-weight: 600;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  & > p {
    font-size: 2vh;

    & > a {
      font-weight: 500;
      text-decoration: tocBgHovered;

      &:hover {
        color: ${({ theme }) => theme.link};
      }
    }
  }
`;

export const Head = () => {
  const { title, description, image, siteUrl, twitterUsername } = useSiteMetadata();

  return (
    <SEO
      title={title}
      subtitle="404"
      description={description}
      image={image}
      url={siteUrl}
      twitterUsername={twitterUsername}
    />
  );
};

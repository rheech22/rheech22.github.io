import { Link, navigate } from 'gatsby';
import styled from 'styled-components';

import SEO from '../components/SEO';

export default () => (
  <Container>
    <h1>404</h1>
    <p>Sorry, the page could not be found.</p>
    <p>Visit the <Link to="/">homepage</Link> or <Link to="#" onClick={()=> navigate(-1)}>go back.</Link></p>
  </Container>
);

const Container = styled.div`
  padding: 3vw;
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(to right bottom, #776fbc, #7677bf, #767fc0, #7787c2, #7a8ec2, #7e95c3, #829bc4, #88a1c4, #90a8c5, #98afc6, #a2b6c6, #adbcc7);
  color: white;

  & > h1 {
    font-size: 10vh;
    font-weight: 600;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  & > p {
    font-size: 2vh;

    & > a {
      color: #273c75;
      font-weight: 500;
      text-decoration: none;
    }
  }
`;

export const Head = () => (
  <SEO subTitle="404"/>
);

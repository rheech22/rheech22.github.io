import { graphql, PageProps } from "gatsby";

import { useGlobalContext } from "../contexts/GlobalContext";
import Comments from "../components/Comments";

import styled from "styled-components";
import { flex, horizontalDivider } from "../styles/mixins";

export default ({ data }: PageProps<Queries.templateQuery>) => {
  const { markdownRemark: post } = data;

  const { isDark } = useGlobalContext();

  const theme = isDark ? 'github-dark-orange' : 'boxy-light';

  return (
    <>
      {post && (
        <Container>
          <h1>{post.frontmatter?.title}</h1>
          <span>{post.frontmatter?.date}</span>
          <div dangerouslySetInnerHTML={{ __html: post.html ?? '' }}/>
          <Comments repo="rheech22/comments" theme={theme}/>
        </Container>
      )}
    </>
  );
};

export const query = graphql`
  query template($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date
        title
        tags
      }
    }
  }
`;

const Container = styled.article`
  ${flex('', '', 'column')};
  margin-top: 24px;

  & > h1 {
    height: 48px;
    font-size: 32px;
    font-weight: 600;
  }

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.mute };
    margin-bottom: 16px;
  }

  div {
    font-size: 18px;

    h1, h2, h3, h4, h5, h6 {
      font-weight: 600;
      ${horizontalDivider}
      margin-bottom: 16px;
    }

    h1 {
      font-size: 32px;
    }

    h2 {
      font-size: 24px;
    }
  }

  deckgo-highlight-code {
    font-size: 16px;
  }
`;

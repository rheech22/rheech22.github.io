import { graphql, PageProps } from "gatsby";
import styled from "styled-components";
import Utterances from "../components/Utterances";
import { initialState, usePostContext } from "../contexts/PostContext";
import { flex } from "../styles/mixins";

const Container = styled.article`
  ${flex('', '', 'column')};
  margin-top: 24px;

  h1 {
    font-size: 32px;
    margin-bottom: 5px;
  }

  span {
    font-weight: 300;
    margin-bottom: 16px;
  }

  div {
    font-size: 20px;
    line-height: 1.7;
  }

  deckgo-highlight-code {
    font-size: 16px;
  }
`;


export default ({ data }: PageProps<Queries.templateQuery>) => {
  const { markdownRemark: post } = data;

  const { isDark } = usePostContext() ?? initialState;

  const theme = isDark ? 'github-dark-orange' : 'boxy-light';

  return (
    <>
      {post && (
        <Container>
          <h1>{post.frontmatter?.title}</h1>
          <span>{post.frontmatter?.date}</span>
          <div dangerouslySetInnerHTML={{ __html: post.html ?? '' }}/>
          <Utterances repo="rheech22/comments" theme={theme}/>
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
      }
    }
  }
`;
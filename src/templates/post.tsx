import { graphql, PageProps } from "gatsby";
import { red } from "../styles/mixins";
import styled from "styled-components";
import Layout from "../components/Layout";

const Post = styled.main`
  ${red}
`;

export default ({ data }: PageProps<Queries.templateQuery>) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      {post && (
        <Post>
          <h1>{post.frontmatter?.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html ?? '' }}/>
        </Post>
      )}
    </Layout>
  );
};

export const query = graphql`
  query template($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
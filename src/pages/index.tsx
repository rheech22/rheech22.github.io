import styled from 'styled-components';
import { graphql, Link, PageProps } from "gatsby";

const Container = styled.main`
  color: '#232129';
  padding: 96;
  font-family: '-apple-system, Roboto, sans-serif, serif';
`;

export default ({ data }: PageProps<Queries.IndexQuery>) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Container>
      {posts && posts
        .filter((post) => post.node?.frontmatter?.title && post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className="blog-post-preview" key={post.id}>
              <h1>
                <Link to={post.frontmatter?.path as string}>{post.frontmatter?.title}</Link>
              </h1>
              <p>{post.excerpt}</p>
            </div>
          );
        })}
    </Container>
  );
};

export const query = graphql`
  query Index {
    allMarkdownRemark {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;
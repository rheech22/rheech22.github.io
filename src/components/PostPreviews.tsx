import styled from 'styled-components';
import { graphql, StaticQuery } from "gatsby";

import PostPreview from './PostPreview';

const Container = styled.ul`
  border: 1px solid black;
`;

const PostPreviews = () => {
  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={(data: Queries.IndexQuery) => {
        const { edges: posts } = data.allMarkdownRemark;
        return (
          <Container>
            {posts && posts
              .map(({ node: post }) =>
                <PostPreview
                  key={post.id}
                  path={post.frontmatter?.path}
                  title={post.frontmatter?.title}
                  excerpt={post.excerpt}
                />
              )}
          </Container>
        );
      }}
    />
  );
};

export default PostPreviews;
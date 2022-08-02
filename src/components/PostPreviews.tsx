import styled from 'styled-components';
import { graphql, useStaticQuery } from "gatsby";

import PostPreview from './PostPreview';

const Container = styled.ul`
  border: 1px solid black;
`;

const GET_POST = graphql`
    query getPosts {
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

const PostPreviews = () => {
  const data: Queries.getPostsQuery = useStaticQuery(GET_POST);

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
};

export default PostPreviews;

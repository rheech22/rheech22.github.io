import { graphql, useStaticQuery } from "gatsby";

const GET_POST = graphql`
  query getPosts {
    allMarkdownRemark (
      sort: { order: DESC, fields: [frontmatter___date] }
    ){
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            tags
            title
            date
            path
          }
          html
        }
      }
    }
  }
 `;

const usePosts = () => {
  const data: Queries.getPostsQuery = useStaticQuery(GET_POST);

  const { edges: posts } = data.allMarkdownRemark;

  return posts;
};

export default usePosts;

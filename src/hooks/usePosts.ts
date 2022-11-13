import { graphql, useStaticQuery } from 'gatsby';

import { useEffect } from 'react';
import { useDispatch } from '../store/context';

const usePosts = () => {
  const data: Queries.getPostsQuery = useStaticQuery(GET_POST);

  const { edges: posts } = data.allMarkdownRemark;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!posts.length) return;

    dispatch({ type: 'setPosts', payload: { posts } });
  }, [ posts ]);
};

export default usePosts;

const GET_POST = graphql`
  query getPosts {
    allMarkdownRemark (
      sort: { order: DESC, fields: [frontmatter___date] }
    ){
      edges {
        node {
          excerpt(pruneLength: 450)
          id
          frontmatter {
            tags
            title
            date
            path
            series
          }
          html
        }
      }
    }
  }
 `;

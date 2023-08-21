import { graphql, useStaticQuery } from 'gatsby';
import { useEffect } from 'react';

import { useDispatch } from '../store/context';

const usePosts = () => {
  const data: Queries.getPostsQuery = useStaticQuery(GET_POST);

  const { edges: wikis } = data.allMarkdownRemark;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!wikis.length) return;

    dispatch({ type: 'setWikis', payload: { wikis } });
  }, [wikis]);
};

export default usePosts;

const GET_POST = graphql`
  query getWikis {
    allMarkdownRemark(sort: { frontmatter: { updated: DESC } }) {
      edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
            title
            created
            updated
          }
        }
      }
    }
  }
`;

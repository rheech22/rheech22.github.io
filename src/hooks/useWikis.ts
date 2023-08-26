import { graphql, useStaticQuery } from 'gatsby';
import { useEffect } from 'react';

import { useDispatch } from '../store/context';

const useWikis = () => {
  const data: Queries.getWikisQuery = useStaticQuery(GET_WIKIS);

  const { edges: wikis } = data.allMarkdownRemark;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!wikis.length) return;

    dispatch({ type: 'setWikis', payload: { wikis } });
  }, [wikis]);
};

export default useWikis;

const GET_WIKIS = graphql`
  query getWikis {
    allMarkdownRemark(sort: { frontmatter: { updated: DESC } }) {
      edges {
        node {
          id
          html
          fields {
            slug
            title
          }
          frontmatter {
            created
            updated
          }
        }
      }
    }
  }
`;

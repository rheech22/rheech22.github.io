import { graphql, useStaticQuery } from 'gatsby';
import { useEffect } from 'react';

import { useDispatch } from '../store/context';

const useWikis = () => {
  const data: Queries.getWikisQuery = useStaticQuery(GET_WIKIS);

  const { edges: mdList } = data.allMarkdownRemark;
  const { edges: mdxList } = data.allMdx;

  const wikis = [...mdList, ...mdxList];

  const dispatch = useDispatch();

  // console.log(wikis);

  useEffect(() => {
    if (!wikis.length) return;

    dispatch({ type: 'setWikis', payload: { wikis } });
  }, []);
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
    allMdx(sort: { frontmatter: { updated: DESC } }) {
      edges {
        node {
          id
          html: body
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

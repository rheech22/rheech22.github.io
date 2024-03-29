import { graphql, useStaticQuery } from 'gatsby';
import { useEffect, useState } from 'react';

const useSlugs = () => {
  const data: Queries.getSlugsQuery = useStaticQuery(GET_PAGES);

  const [slugs, setSlugs] = useState<{ path: string; title: string }[]>([]);

  const { nodes } = data.allMarkdownRemark;

  useEffect(() => {
    const slugs = nodes.map(({ fields: { slug, title } }) => ({
      path: slug.replace('/', ''),
      title
    }));

    setSlugs(slugs);
  }, [nodes]);

  return {
    slugs
  };
};

export default useSlugs;

const GET_PAGES = graphql`
  query getSlugs {
    allMarkdownRemark {
      nodes {
        fields {
          slug
          title
        }
      }
    }
  }
`;

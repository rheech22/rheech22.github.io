import React from "react";
import { graphql, PageProps } from "gatsby";

export default function Template({ data }: PageProps<Queries.TemplateQuery>) {
  const { markdownRemark: post } = data;

  return (
    <div>
      {post && (
        <div >
          <h1>{post.frontmatter?.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html ?? '' }}/>
        </div>
      )}
    </div>
  );
}

export const query = graphql`
  query Template($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
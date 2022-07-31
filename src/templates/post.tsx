import { graphql, PageProps } from "gatsby";

export default ({ data }: PageProps<Queries.templateQuery>) => {
  const { markdownRemark: post } = data;

  return (
    <div>
      {post && (
        <article>
          <h1>{post.frontmatter?.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html ?? '' }}/>
        </article>
      )}
    </div>
  );
};

export const query = graphql`
  query template($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
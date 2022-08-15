import { graphql, PageProps } from "gatsby";

export default ({ data }: PageProps<Queries.templateQuery>) => {
  const { markdownRemark: post } = data;

  return (
    <>
      {post && (
        <>
          <h1>{post.frontmatter?.title}</h1>
          <span>{post.frontmatter?.date}</span>
          <hr />
          <div dangerouslySetInnerHTML={{ __html: post.html ?? '' }}/>
        </>
      )}
    </>
  );
};

export const query = graphql`
  query template($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date
        title
      }
    }
  }
`;
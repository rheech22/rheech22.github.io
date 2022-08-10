import { graphql, PageProps } from "gatsby";
import Layout from "../components/Layout";



export default ({ data }: PageProps<Queries.templateQuery>) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      {post && (
        <>
          <h1>{post.frontmatter?.title}</h1>
          <span>{post.frontmatter?.date}</span>
          <hr />
          <div dangerouslySetInnerHTML={{ __html: post.html ?? '' }}/>
        </>
      )}
    </Layout>
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
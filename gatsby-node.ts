/* eslint-disable @typescript-eslint/no-var-requires */
import { CreatePagesArgs } from "gatsby";

const path = require("path");

exports.createPages = async ({ actions, graphql, reporter }: CreatePagesArgs) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`);

  const result = await graphql<Queries.CreatePageQuery>(`
    query CreatePage {
      allMarkdownRemark(
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    return reporter.panicOnBuild(`Error while running GraphQL query.`);
  }

  if (result.data) {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter?.path ?? '',
        component: blogPostTemplate,
        context: {},
      });
    });
  }
};
/* eslint-disable @typescript-eslint/no-var-requires */
import { CreatePagesArgs } from 'gatsby';

const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }: CreatePagesArgs) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('src/templates/post.tsx');

  const result = await graphql<Queries.createPageQuery>(`
    query createPage {
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
    return reporter.panicOnBuild('Error while running GraphQL query.');
  }

  if (result.data) {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter?.path ?? '',
        component: postTemplate,
        context: {},
      });
    });
  }
};

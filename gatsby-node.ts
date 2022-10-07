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
        sort: {order: DESC, fields: [frontmatter___date]}
      ) {
        edges {
          node { 
            frontmatter {
              path
            }
          }
          previous {
            frontmatter {
              title
              path
            }
          }
          next {
            frontmatter {
              title
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
    result.data.allMarkdownRemark.edges.forEach(({ node, previous, next }) => {
      createPage({
        path: node.frontmatter?.path ?? '',
        component: postTemplate,
        context: {
          prev: {
            path: previous?.frontmatter?.path ?? '',
            title: previous?.frontmatter?.title ?? '',
          },
          next: {
            path: next?.frontmatter?.path ?? '',
            title: next?.frontmatter?.title ?? '',
          },
        },
      });
    });
  }
};

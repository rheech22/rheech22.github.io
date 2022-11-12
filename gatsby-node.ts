/* eslint-disable @typescript-eslint/no-var-requires */
import { CreatePagesArgs, CreateSchemaCustomizationArgs } from 'gatsby';

const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }: CreatePagesArgs) => {
  const { createPage } = actions;

  const component = path.resolve('src/templates/post.tsx');

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
    result.data.allMarkdownRemark.edges.forEach(({ node: { frontmatter: { path } }, previous, next }) => {
      createPage({
        path,
        component,
        context: {
          prev: {
            path: previous?.frontmatter.path ?? '',
            title: previous?.frontmatter.title ?? '',
          },
          next: {
            path: next?.frontmatter.path ?? '',
            title: next?.frontmatter.title ?? '',
          },
        },
      });
    });
  }
};

exports.createSchemaCustomization = ({ actions }: CreateSchemaCustomizationArgs) => {
  const { createTypes } = actions;

  const typeDefs = `
    type templateQuery {
      markdownRemark: MarkdownRemark!
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter!
    }

    type Frontmatter {
      path: String!
      date: String!
      title: String!
      tags: [String!]
      series: String
    }
  `;

  createTypes(typeDefs);
};

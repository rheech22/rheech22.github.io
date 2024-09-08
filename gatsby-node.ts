/* eslint-disable @typescript-eslint/no-var-requires */
import { CreateNodeArgs, CreatePagesArgs, CreateSchemaCustomizationArgs } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';

const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }: CreateNodeArgs) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages',
      trailingSlash: false
    });

    createNodeField({
      node,
      name: 'slug',
      value: slug
    });

    createNodeField({
      node,
      name: 'title',
      value: slug.split('/').slice(-1).pop()?.replaceAll('_', ' ')
    });
  }

  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages',
      trailingSlash: false
    });

    createNodeField({
      node,
      name: 'slug',
      value: slug
    });

    createNodeField({
      node,
      name: 'title',
      value: slug.split('/').slice(-1).pop()?.replaceAll('_', ' ')
    });
  }
};

exports.createPages = async ({ actions, graphql, reporter }: CreatePagesArgs) => {
  const { createPage } = actions;

  const component = path.resolve('src/templates/wiki_template.tsx');

  const result = await graphql<Queries.createPageQuery>(`
    query createPage {
      allMarkdownRemark(limit: 1000, sort: { frontmatter: { updated: ASC } }) {
        edges {
          node {
            fields {
              slug
              title
            }
          }
        }
      }
      allMdx(limit: 1000, sort: { frontmatter: { updated: ASC } }) {
        edges {
          node {
            fields {
              slug
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    return reporter.panicOnBuild('Error while running GraphQL query.');
  }

  if (result.data?.allMarkdownRemark) {
    result.data.allMarkdownRemark.edges.forEach(
      ({
        node: {
          fields: { slug, title }
        }
      }) => {
        createPage({
          path: slug,
          component,
          context: {
            slug,
            title
          }
        });
      }
    );
  }

  if (result.data?.allMdx) {
    result.data.allMdx.edges.forEach(
      ({
        node: {
          fields: { slug, title }
        }
      }) => {
        createPage({
          path: slug,
          component,
          context: {
            slug,
            title
          }
        });
      }
    );
  }
};

exports.createSchemaCustomization = ({ actions }: CreateSchemaCustomizationArgs) => {
  const { createTypes } = actions;

  const typeDefs = `
    type templateQuery {
      markdownRemark: MarkdownRemark!
      mdx: Mdx!
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter!
      fields: MarkdownRemarkFields!
    }

    type Mdx implements Node {
      id: ID!
      body: String
      excerpt: String
      tableOfContents: JSON
      frontmatter: Frontmatter!
      fields: MarkdownRemarkFields!
    }

    type Frontmatter {
      created: String!
      updated: String!
    }

    type MarkdownRemarkFields {
      slug: String!
      title: String!
    }
  `;

  createTypes(typeDefs);
};

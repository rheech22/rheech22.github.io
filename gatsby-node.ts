/* eslint-disable @typescript-eslint/no-var-requires */
import {
  CreateNodeArgs,
  CreatePagesArgs,
  CreateSchemaCustomizationArgs,
} from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';

const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }: CreateNodeArgs) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    // const parentDirectory = path.normalize(node.dir + '/');
    // if (node.parent) {
    //   console.log(node.id);
    //   console.log(node.parent);

    //   const parentNode = getNode(node.parent);

    //   console.log(parentNode);
    // console.log(parentNode.frontmatter.title);
    // }

    // console.log(node.dir);
    // console.log(parentDirectory);

    // const parent = getNodesByType('MarkdownRemark').find(
    //   (node) => path.normalize(node.absolutePath + '/') === parentDirectory
    // );

    // console.log(parent);

    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages',
      trailingSlash: false,
    });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({
  actions,
  graphql,
  reporter,
}: CreatePagesArgs) => {
  const { createPage } = actions;

  const component = path.resolve('src/templates/post.tsx');

  const result = await graphql<Queries.createPageQuery>(`
    query createPage {
      allMarkdownRemark(
        limit: 1000
        sort: { order: ASC, fields: [frontmatter___updated] }
      ) {
        edges {
          node {
            fields {
              slug
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
    result.data.allMarkdownRemark.edges.forEach(
      ({
        node: {
          fields: { slug },
        },
      }) => {
        createPage({
          path: slug,
          component,
          context: {
            slug,
          },
        });
      }
    );
  }
};

exports.createSchemaCustomization = ({
  actions,
}: CreateSchemaCustomizationArgs) => {
  const { createTypes } = actions;

  const typeDefs = `
    type templateQuery {
      markdownRemark: MarkdownRemark!
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter!
      fields: MarkdownRemarkFields!
    }

    type Frontmatter {
      title: String!
      created: String!
      updated: String!
      tags: [String!]
      series: String
    }

    type MarkdownRemarkFields {
      slug: String!
    }
  `;

  createTypes(typeDefs);
};

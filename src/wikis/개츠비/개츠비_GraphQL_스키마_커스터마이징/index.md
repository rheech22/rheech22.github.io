---
created: 2023-08-27 13:10:49 +0900
updated: 2023-08-27 13:18:42 +0900
---

GraphQL Typegen을 사용하면 내가 사용하는 쿼리에 따라 타입을 자동으로 생성해주기 때문에 매우 편리하다. 다만 대부분을 nullable한 필드로 정의하기 때문에 수많은 분기문과 옵셔널 체이닝이 필요하다.

이런 경우에 GraphQL 스키마를 커스터마이징하면 좋다. gatsby-node 파일에서 createSchemaCustomization API를 사용하면 된다. 나는 frontmatter의 created, updated 필드와 fields의 slug, title 필드를 필수 값으로 사용하고 있다.

```ts
// ./gatsby-node.ts

exports.createSchemaCustomization = ({ actions }: CreateSchemaCustomizationArgs) => {
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

```

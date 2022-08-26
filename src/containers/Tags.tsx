import { graphql, useStaticQuery } from "gatsby";

import styled from "styled-components";
import { device } from "../styles/breakpoints";
import { flex } from "../styles/mixins";


const GET_TAGS = graphql`
  query getTags {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
 `;

type ReduceReturnType = {
  [key: string]: number;
}

const Tags = () => {
  const data: Queries.getTagsQuery = useStaticQuery(GET_TAGS);

  const { edges } = data.allMarkdownRemark;

  const tags = edges.map(({ node })=> node.frontmatter?.tags).flat();

  const tagMap = Object
    .entries(tags
      .filter(Boolean)
      .reduce<ReduceReturnType>((acc, cur)=> {
      if (!cur) return acc;


      if (Reflect.has(acc, cur)) {
        acc[cur] += 1;
        return acc;
      }

      acc[cur] = 1;
      return acc;
    }, {}));

  return (
    <Container>
      <span>Tags</span>
      <ul>
        {tagMap && tagMap.map(([tag, count], index)=> (
          <li key={index}>
            <span>{tag}</span>
            <span>({count})</span>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Tags;

const Container = styled.div`
  display: none;
  padding-left: 13px;

  & > span {
    font-size: 24px;
    font-weight: 600;
    display: block;
    padding: 16px 0;
  }

  & > ul {
    li {
      cursor: pointer;

      span:nth-child(2) {
        margin-left: 3px;
        opacity: 0.7
      }

      &:hover {
        span:nth-child(1) {
          text-decoration: underline;
        }
      }
    }

    li + li {
      margin-top: .25rem;
    }
  }

  @media ${device.tablet} {
    ${flex('normal', 'normal', 'column')}
  }
`;
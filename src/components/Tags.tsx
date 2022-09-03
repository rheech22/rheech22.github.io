import styled from "styled-components";
import { device } from "../styles/breakpoints";
import { flex } from "../styles/mixins";

import useTags from "../hooks/useTags";

const Tags = () => {
  const { tags, searchByTag } = useTags();

  return (
    <Container>
      <span>Tags</span>
      <ul>
        {tags && tags.map(([tag, count], index)=> (
          <li key={index}>
            <span onClick={({ currentTarget }) => searchByTag(currentTarget.innerHTML)}>{tag}</span>
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

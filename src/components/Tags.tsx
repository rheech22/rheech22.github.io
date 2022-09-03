import styled from "styled-components";
import { device } from "../styles/breakpoints";
import { flex } from "../styles/mixins";
import { white } from "../styles/themes";

import useTags from "../hooks/useTags";

const Tags = () => {
  const { tags, searchByTag } = useTags();

  return (
    <Container>
      <ul>
        {tags && tags.map(([tag], index)=> (
          <li key={index} onClick={({ currentTarget }) => searchByTag(currentTarget.innerHTML)}>
            {tag}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Tags;

const Container = styled.div`
  ${flex('center', 'center', 'row')}
  padding-left: 13px;
  width: 100%;

  & > ul {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 30px;

    li {
      font-size: 12px;
      font-weight: 500;
      line-height: 22px;
      white-space: nowrap;
      border-radius: 2em;
      border: 1px solid rgba(0,0,0,0);
      margin-right: 1.5px;
      margin-bottom: 3px;
      padding: 0 10px;
      width: fit-content;
      min-height: fit-content;
      background-color: ${({ theme }) => theme.lightBlue};
      color: ${({ theme }) => theme.blue};
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.tagBgHovered};
        color: ${white};
      }
    }
  }

  @media ${device.tablet} {
    ${flex('normal', 'normal', 'column')};
    width: 296px;

    & > ul {
      margin-top: 0;
    }
  }
`;

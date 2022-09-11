import styled from "styled-components";
import { device } from "../styles/breakpoints";
import { flex } from "../styles/mixins";

import { useGlobalContext } from "../contexts/GlobalContext";
import useTags from "../hooks/useTags";

import Tag from "./Tag";

const Tags = () => {
  const { tag: selectedTag } = useGlobalContext();

  const { tags, searchByTag } = useTags();

  return (
    <Container>
      <ul>
        {tags && tags.map(([tag], index)=> (
          <Tag
            key={index}
            tag={tag}
            onClick={searchByTag}
            isSelected={tag === selectedTag}
          />
        ))}
      </ul>
    </Container>
  );
};

export default Tags;

const Container = styled.div`
  ${flex('center', 'center', 'row')}
  width: 100%;

  & > ul {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 30px;
  }

  @media ${device.tablet} {
    ${flex('normal', 'normal', 'column')};
    padding-left: 13px;
    width: 296px;

    & > ul {
      margin-top: 0;
    }
  }
`;

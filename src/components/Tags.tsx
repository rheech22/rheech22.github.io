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
  @media ${device.laptopL} {
    ${flex('normal', 'normal', 'column')};
    margin: 0;
    box-shadow: none;
    padding: 20px;
    max-width: 316px;
  }
  
  ${flex('center', 'center', 'row')};
  margin: 0 20px;
  padding: 10px;
  
  & > ul {
    @media ${device.laptopL} {
      margin-top: 0;
    }
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
  }
`;

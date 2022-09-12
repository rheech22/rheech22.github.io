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
  ${flex('center', 'center', 'row')};
  margin: 0 20px;
  padding: 10px 0;
  
  & > ul {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
  }
  
  @media ${device.tablet} {
    ${flex('normal', 'normal', 'column')};
    border-top: ${({ theme })=> `1px solid ${theme.border}`};
    max-width: 296px;
    margin: 0;
    
    & > ul {
      margin-top: 0;
    }
  }
`;

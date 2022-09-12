import { Link } from "gatsby";

import styled from "styled-components";
import { device } from "../styles/breakpoints";
import { flex } from "../styles/mixins";

import { useGlobalContext } from "../contexts/GlobalContext";
import useTags from "../hooks/useTags";
import Tag from "./Tag";
import { getDateString } from "../utils";

interface Props {
  path?: string | null;
  title?: string | null;
  date?: string | null;
  excerpt?: string | null;
  tags?: readonly (string | null)[] | null;
}

const PostPreview = ({
  path = '',
  title = '',
  date = '',
  excerpt = '',
  tags = [],
}: Props) => {
  const { tag: selectedTag } = useGlobalContext();

  const { searchByTag } = useTags();

  return (
    <Container>
      <Link to={path ?? ''}>
        <h2>{title}</h2>
        <span>{date ? getDateString({ date, addPrefix: true }) : ''}</span>
        <p>{excerpt}</p>
      </Link>
      {
        tags?.length
          ? <ul>{tags.map((tag, index) => (
            <Tag
              key={index}
              tag={tag}
              onClick={searchByTag}
              isSelected={tag === selectedTag}
            />
          ))}</ul>
          : null
      }
    </Container>
  );
};

export default PostPreview;

const Container = styled.li`
  padding: 24px 0;
  border-bottom: ${({ theme })=> `1px solid ${theme.border}`};
  width: 100%;

  &:first-of-type {
    border-top: ${({ theme })=> `1px solid ${theme.border}`};
  }
  
  & > a {
    ${flex('center', 'center', 'column')}
    margin-bottom: 8px;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.blue};
    }
    
    h2 {
      font-size: 20px;
    }
    
    span {
      margin-bottom: 5px;
      font-size: 12px;
      font-weight: 300;
    }

    p {
      display: none;
      font-weight: 400;
      font-size: 14px;
      overflow-y: hidden;
    }

    @media ${device.tablet} {
      ${flex('flex-start', '', 'column')}

      p {
        display: block;
      }
    }
  }

  & > ul {
    ${flex('center', 'center', 'row')}
    flex-wrap: wrap;
    margin: 4px 0;
    padding: 4px 0;
    
    @media ${device.tablet} {
      ${flex('center', 'flex-start', 'row')}
    }
  }
`;

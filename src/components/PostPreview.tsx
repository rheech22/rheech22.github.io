import { Link } from "gatsby";

import styled from "styled-components";
import { device } from "../styles/breakpoints";
import { white } from "../styles/themes";
import { flex } from "../styles/mixins";

import { useGlobalContext } from "../contexts/GlobalContext";
import useTags from "../hooks/useTags";
import Tag from "./Tag";

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
        <span>{date}</span>
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
  
  & > a {
    ${flex('center', 'center', 'column')}
    font-weight: 600;
    text-decoration: none;
    margin-bottom: 8px;

    &:hover {
      color: ${({ theme }) => theme.blue};
    }
    
    h2 {
      font-size: 28px;
    }
    
    span {
      font-size: 12px;
      font-weight: 300;
      margin-bottom: 5px;
    }

    p {
      display: none;
      font-weight: 400;
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

    li {
      font-size: 12px;
      font-weight: 500;
      line-height: 22px;
      white-space: nowrap;
      border-radius: 2em;
      border: 1px solid rgba(0,0,0,0);
      margin-right: 1.5px;
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
`;

import { Link } from "gatsby";

import styled from "styled-components";
import { device } from "../styles/breakpoints";
import { flex } from "../styles/mixins";

import { useContext } from "../store/context";
import useTags from "../hooks/useTags";

import { getDateString } from "../utils";

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
  const { tag: selectedTag } = useContext();

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
  width: 100%;

  & > a {
    @media ${device.widerThanTablet} {
      ${flex({ flexDirection: 'column' })}
    }

    ${flex({ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' })}
    margin-bottom: 8px;
    font-weight: 600;
    text-decoration: none;

    h2 {
      font-size: 20px;
      font-weight: 600;
      color: ${({ theme }) => theme.blue};
      margin-bottom: 4px;
    }
    
    span {
      margin-bottom: 5px;
      font-size: 12px;
      font-weight: 300;
    }

    p {
      @media ${device.widerThanTablet} {
        display: block;
      }

      display: none;
      font-weight: 400;
      font-size: 14px;
      overflow-y: hidden;
    }
  }

  & > ul {
    @media ${device.widerThanTablet} {
      ${flex({ alignItems: 'center' })}
    }

    ${flex({ alignItems: 'center', justifyContent: 'center' })}
    flex-wrap: wrap;
    margin: 4px 0;
    padding: 4px 0;
  }
`;

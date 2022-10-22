import { navigate } from 'gatsby';

import styled from 'styled-components';
import { bgHovered } from '../styles/themes';
import { device } from '../styles/breakpoints';
import { flex } from '../styles/mixins';

import { useContext } from '../store/context';
import useTags from '../hooks/useTags';

import { getDateString } from '../utils';

import Tag from './Tag';

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
    <Container onClick={()=> navigate(path ?? '')}>
      <div>
        <Heading>{title}</Heading>
        <Date>{date ? getDateString({ date, addPrefix: true }) : ''}</Date>
        <Excerpt>{excerpt}</Excerpt>
      </div>
      {tags?.length
        ? <Tags>{tags.map((tag, index) => (
            tag && (<Tag
              key={index}
              tag={tag.toLowerCase()}
              onClick={searchByTag}
              isSelected={tag?.toLowerCase() === selectedTag}
            />)
        ))}</Tags>
        : null}
    </Container>
  );
};

export default PostPreview;

const Container = styled.li`
  padding: 24px 8px;
  width: 100%;
  cursor: pointer;

  & > div {
    ${flex({ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' })}
    margin-bottom: 8px;
    font-weight: 600;
    text-decoration: none;

    @media ${device.widerThanTablet} {
      ${flex({ flexDirection: 'column' })}
    }
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${bgHovered};
    }
  }
`;

const Heading = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.default};
  margin-bottom: 4px;
`;

const Date = styled.span`
  margin-bottom: 5px;
  font-size: 12px;
  font-weight: 300;
`;

const Excerpt = styled.p`
  display: none;
  font-weight: 400;
  font-size: 14px;
  overflow-y: hidden;

  @media ${device.widerThanTablet} {
    display: block;
  }
`;

const Tags = styled.ul`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  flex-wrap: wrap;
  margin: 4px 0;
  padding: 4px 0;

  @media ${device.widerThanTablet} {
    ${flex({ alignItems: 'center' })}
  }
`;

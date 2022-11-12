import styled from 'styled-components';
import { device } from '../styles/breakpoints';
import { border, flex } from '../styles/mixins';

import { useContext } from '../store/context';
import useTags from '../hooks/useTags';

import Tag from './Tag';

const Tags = () => {
  const { tag: selectedTag } = useContext();

  const { tags, searchByTag } = useTags();

  if (!tags.length) return null;

  return (
    <Container>
      <h3>Tags</h3>
      <ul>
        {tags.map(([ tag ], index)=> (
          <Tag
            key={index}
            tag={tag}
            onClick={searchByTag}
            isSelected={tag.toLowerCase() === selectedTag}
          />
        ))}
      </ul>
      <div/>
    </Container>
  );
};

export default Tags;

const Container = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'center' })};
  margin: 0 10px;
  padding: 10px;

  & > h3 {
    ${border.top};
    display: none;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 12px;
  }
  
  & > ul {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
  }

  & > div {
    ${border.bottom};
  }

  @media ${device.widerThanLaptopS} {
    ${flex({ flexDirection: 'column' })};
    margin: 0;
    box-shadow: none;
    padding: 20px 20px;
    max-width: 316px;

    & > h3 {
      padding-top: 20px;
      display: block;
    }

    & > ul {
      @media ${device.widerThanLaptopS} {
        margin-top: 0;
        padding-bottom: 20px;
      }
    }

    & > div {
      display: block;
    }
  }
`;

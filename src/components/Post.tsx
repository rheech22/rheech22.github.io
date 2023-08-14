import { navigate } from 'gatsby';

import styled from 'styled-components';
import { bgHovered } from '../styles/themes';
import { device } from '../styles/breakpoints';
import { flex } from '../styles/mixins';

import { getDateString } from '../utils';

interface Props {
  path: string;
  title: string | null;
  updated: string | null;
}

const Post = ({
  path = '',
  title = '',
  updated = '',
}: Props) => {
  return (
    <Container onClick={()=> navigate(path ?? '')}>
      <div>
        <Heading>{title}</Heading>
        <Date>{updated ? getDateString({ date: updated, addPrefix: true }) : ''}</Date>
      </div>
    </Container>
  );
};

export default Post;

const Container = styled.li`
  padding: 20px 8px 12px 8px;
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
  transition: all .5s;
`;

const Date = styled.span`
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 300;
`;

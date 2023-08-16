import { navigate } from 'gatsby';
import styled from 'styled-components';

import { flex } from '../styles/mixins';
import { bgHovered } from '../styles/themes';
import { getDateSegments } from '../utils';

interface Props {
  path: string;
  title: string;
  updated: string;
}

const Post = ({ path, title, updated }: Props) => {
  const { date, month, year } = getDateSegments(updated);

  return (
    <Container onClick={() => navigate(path)}>
      <div>
        <Date>
          <span>{date.padStart(2, '0')}</span>
          <div>
            <span>{month}</span>
            <span>{year}</span>
          </div>
        </Date>
        <Heading>{title}</Heading>
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
    ${flex({ alignItems: 'center' })}
    margin-bottom: 8px;
    font-weight: 600;
    text-decoration: none;
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
  transition: all 0.5s;
`;

const Date = styled.div`
  ${flex({ alignItems: 'flex-start' })};
  min-width: 160px;
  font-family: 'Sora', 'Open Sans', 'Helvetica Neue', sans-serif;

  & > span {
    font-size: 50px;
    font-weight: 500;
  }

  & > div {
    ${flex({ flexDirection: 'column' })};
    margin: 12px 0 0 4px;
    font-size: 16px;
    font-weight: 200;
  }
`;

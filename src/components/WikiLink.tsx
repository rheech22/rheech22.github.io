import { navigate } from 'gatsby';
import styled from 'styled-components';

import { flex, font_sora } from '../styles/mixins';
import { getDateSegments } from '../utils';

interface Props {
  slug: string;
  title: string;
  updated: string;
}

const WikiLink = ({ slug, title, updated }: Props) => {
  const { date, month, year } = getDateSegments(updated);

  return (
    <Container onClick={() => navigate(slug)}>
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

export default WikiLink;

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
      background-color: ${({ theme }) => theme.postHovered};
    }
  }
`;

const Heading = styled.h2`
  margin-bottom: 4px;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.default};
  transition: all 0.5s;
`;

const Date = styled.div`
  ${flex({ alignItems: 'flex-start' })};
  ${font_sora()};
  min-width: 160px;

  & > span {
    font-size: 50px;
    font-weight: 500;
  }

  & > div {
    ${flex({ flexDirection: 'column' })};
    margin: 12px 0 0 4px;
    font-size: 16px;
    font-weight: 300;
  }
`;

import { Link } from 'gatsby';

import { useState } from 'react';

import Triangle from '../assets/icons/Triangle';
import styled from 'styled-components';
import { flex } from '../styles/mixins';

import Button from './Button';

interface Props {
  title: string;
  series: string;
  relatedPosts: ({
    title: string;
    date: string;
    path: string;
    series: string | null;
    tags: readonly string[] | null;
  })[];
}

const SeriesSuggestion = ({ title: postTitle, series, relatedPosts }: Props) => {
  const [ more, setMore ] = useState(false);

  if (!relatedPosts.length) return null;

  return (
    <Container more={more}>
      <Button onClick={()=> setMore(prev => !prev)} accessibleName="show related posts">
        <Triangle />
        <h3>More about</h3>
        <strong>{series}</strong>
      </Button>
      {
        more &&
        <List>
          {relatedPosts.map(({ title: t, path }, i) => {
            return (
              <li key={i}>
                {
                  t === postTitle
                    ? <span>{t}</span>
                    : <Link to={path}>{t}</Link>
                }
              </li>
            );
          })}
        </List>
      }
    </Container>
  );
};

export default SeriesSuggestion;

const Container = styled.div<{more: boolean}>`
  ${flex({ alignItems: 'flex-start', flexDirection: 'column' })}
  margin-top: 32px;
  border-radius: 8px;
  padding: 20px 10px;
  background-color: ${({ theme }) => theme.seriesBg};
  transition: all .5s;
  
  & > button {
    ${flex({ alignItems: 'center' })}
    padding: 10px;
    border-radius: 8px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
    
    & > h3 {
      word-break: keep-all;
      color: ${({ theme }) => theme.default};
      line-height: 18px;
      font-weight: 300;
      transition: all .5s;
    }

    & > svg { 
      margin-right: 6px;
      fill: ${({ theme }) => theme.default};
      transform: ${({ more }) => more ? 'rotate(90deg)' : ''};
      transition: all .5s;
    }

    & > strong {
      color: ${({ theme }) => theme.series};
      line-height: 18px;
      font-weight: 600;
      margin-left: 8px;
      transition: all .5s;
    }

    @media (hover: hover) {
      &:hover {
        background-color: ${({ theme }) => theme.seriesBgHovered};
      }
    }

  }
`;

const List = styled.ol`
  margin-top: 21px;
  padding-left: 46px;
  list-style: decimal;
  
  span {
    font-weight: 500;
  }
  
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.mute};
    transition: all .5s;

    @media (hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }
  }
  
  li + li {
    margin-top: 4px;
  }
`;

import { Link } from 'gatsby';

import { useState } from 'react';

import styled from 'styled-components';
import Triangle from '../assets/icons/Triangle';
import { flex } from '../styles/mixins';

import Button from './Button';

interface Props {
  title: string;
  series: string;
  relatedPosts: ({
    readonly tags: readonly (string | null)[] | null;
    readonly title: string | null;
    readonly date: string | null;
    readonly path: string | null;
    readonly series: string | null;
  } | null)[];
}

const RelatedPosts = ({ title, series, relatedPosts }: Props) => {
  const [ more, setMore ] = useState(false);

  if (!relatedPosts.length) return null;

  return (
    <Container more={more}>
      <Button onClick={()=> setMore(prev => !prev)} accessibleName="show related posts">
        <Triangle />
        <h3>ALL ARTICLES IN THIS SERIES </h3>
        <strong>{series}</strong>
      </Button>
      {
        more &&
        <List>
          {relatedPosts.map((post, i) => {
            const postTitle = post?.title ?? '';
            const postPath = post?.path ?? '';

            return (
              <li key={i}>
                {
                  postTitle === title
                    ? <span>{postTitle}</span>
                    : <Link to={postPath}>{postTitle}</Link>
                }
              </li>
            );
          })}
        </List>
      }
    </Container>
  );
};

export default RelatedPosts;

const Container = styled.div<{more: boolean}>`
  ${flex({ alignItems: 'flex-start', flexDirection: 'column' })}
  margin-top: 32px;
  border-radius: 8px;
  padding: 20px 10px;
  background-color: ${({ theme }) => theme.seriesBg};
  
  & > button {
    ${flex({ alignItems: 'center' })}
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    
    & > h3 {
      word-break: keep-all;
      color: ${({ theme }) => theme.default};
      line-height: 18px;
    }

    & > svg { 
      margin-right: 6px;
      fill: ${({ theme }) => theme.default};
      transform: ${({ more }) => more ? 'rotate(90deg)' : ''};
      transition: transform 0.5s;
    }

    & > strong {
      padding: 0 4px;
      color: ${({ theme }) => theme.series};
      line-height: 18px;
      font-weight: 600;
    }
  }
`;

const List = styled.ul`
  margin-top: 21px;
  padding-left: 46px;
  list-style: disc;

  span {
    font-weight: 500;
  }
  
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.mute};
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  li + li {
    margin-top: 4px;
  }
`;

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
        <h3>More about</h3>
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

import { Link } from 'gatsby';

import { useState } from 'react';

import styled from 'styled-components';
import { flex } from '../styles/mixins';
import { headerLogo } from '../styles/themes';

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
    <Container>
      <h3>ALL ARTICLES IN THIS <strong>SERIES - {series}</strong></h3>
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
      <Button onClick={()=> setMore(prev => !prev)} accessibleName="show related posts">{more ? 'Hide ' : 'Show '}links</Button>
    </Container>
  );
};

export default RelatedPosts;

const Container = styled.div`
  ${flex({ alignItems: 'flex-start', flexDirection: 'column' })}
  margin-top: 18px;
  border-radius: 8px;
  padding: 20px 10px;
  background-color: ${({ theme }) => theme.lightOrange};
  
  strong {
    color: ${({ theme }) => theme.orange};
    font-weight: 600;
  }

  & > button {
    border: none;
    border-radius: 0.5rem;
    padding: 8px 16px;
    margin-top: 8px;
    margin-left: auto;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    color: ${headerLogo};
    background-color: ${({ theme }) => theme.orange};
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  }
`;

const List = styled.ul`
  padding-left: 30px;
  list-style: disc;
  margin: 10px 0;

  span {
    color: ${({ theme }) => theme.mute};
  }
  
  a {
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  li + li {
    margin-top: 4px;
  }
`;

import styled from 'styled-components';
import PostPreview from './PostPreview';
import { Posts, usePostContext } from '../contexts/PostContext';
import { useEffect, useState } from 'react';

const Container = styled.ul`
  border: 1px solid black;
`;

const SearchResult = () => {
  const { posts, keyword } = usePostContext()!;

  const [filteredPosts, setFilteredPosts] = useState<Posts>(posts);

  useEffect(()=> {
    if (keyword) {
      const filteredPosts = posts
        .filter(({ node: { frontmatter } })=>
          frontmatter?.title?.toLowerCase()
            .includes(keyword.toLowerCase()));

      setFilteredPosts(filteredPosts);
    }
  }, [keyword]);

  if (!filteredPosts.length) {
    return <Container><p>검색결과 없음</p></Container>;
  }

  return (
    <Container>
      {filteredPosts && filteredPosts
        .map(({ node: post }) =>
          <PostPreview
            key={post.id}
            path={post.frontmatter?.path}
            date={post.frontmatter?.date}
            title={post.frontmatter?.title}
            excerpt={post.excerpt}
          />
        )}
    </Container>
  );
};

export default SearchResult;

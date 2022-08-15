import styled from 'styled-components';
import PostPreview from './PostPreview';
import { initialState, Posts, useGlobalContext } from '../contexts/GlobalContext';
import { useEffect, useState } from 'react';
import LoadMore from './LoadMore';

const Container = styled.ul`
  border: 1px solid black;
`;

const SearchResult = () => {
  const { posts, keyword } = useGlobalContext() ?? initialState;

  const [filteredPosts, setFilteredPosts] = useState<Posts>(posts);
  const [offset, setOffset] = useState(10);

  const loadMore = () => {
    if (offset > filteredPosts.length) return;
    setOffset(prev => prev + 10);
  };

  useEffect(()=> {
    const filteredPosts = posts
      .filter(({ node: { frontmatter } })=>
        frontmatter?.title?.toLowerCase()
          .includes(keyword.toLowerCase()));

    setFilteredPosts(filteredPosts);
  }, [keyword]);

  if (!filteredPosts.length) {
    return <Container><p>검색결과 없음</p></Container>;
  }

  return (
    <Container>
      {filteredPosts && filteredPosts
        .slice(0, offset)
        .map(({ node: post }) =>
          <PostPreview
            key={post.id}
            path={post.frontmatter?.path}
            date={post.frontmatter?.date}
            title={post.frontmatter?.title}
            excerpt={post.excerpt}
          />
        )}
      <LoadMore load={loadMore}/>
    </Container>
  );
};

export default SearchResult;

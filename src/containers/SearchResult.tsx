import styled from 'styled-components';
import PostPreview from '../components/PostPreview';
import { useGlobalContext } from '../contexts/GlobalContext';
import { useEffect, useState } from 'react';
import LoadMore from '../components/LoadMore';

const SearchResult = () => {
  const { posts, keyword, tag } = useGlobalContext();

  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [offset, setOffset] = useState(10);

  const loadMore = () => {
    if (offset > filteredPosts.length) return;
    setOffset(prev => prev + 10);
  };

  const getPosts = () => {
    if (keyword) {
      return posts
        .filter(({ node: { frontmatter, html } })=> {
          const hasTitle = frontmatter?.title?.toLowerCase()
            .includes(keyword.toLowerCase());
          const hasContent = html?.toLowerCase()
            .includes(keyword.toLowerCase());

          return (hasTitle || hasContent);
        });
    }

    if (tag) {
      return posts
        .filter(({ node: { frontmatter } })=>
          frontmatter?.tags?.includes(tag.toLowerCase()));
    }

    return posts;
  };

  useEffect(()=> {
    const filteredPosts = getPosts();

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

const Container = styled.ul`
  margin-top: 40px;
`;

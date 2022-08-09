import styled from 'styled-components';
import { graphql, useStaticQuery } from "gatsby";
import PostPreview from './PostPreview';
import { useSearch } from '../contexts/SearchContext';
import { useEffect, useState } from 'react';

const Container = styled.ul`
  border: 1px solid black;
`;

const GET_POST = graphql`
  query getPosts {
    allMarkdownRemark (
      sort: { order: DESC, fields: [frontmatter___date] }
    ){
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date
            path
          }
        }
      }
    }
  }
 `;

type Posts = Queries.getPostsQuery['allMarkdownRemark']['edges']

const PostPreviews = () => {
  const data: Queries.getPostsQuery = useStaticQuery(GET_POST);
  const { edges } = data.allMarkdownRemark;

  const keyword = useSearch();
  const [posts, setPosts] = useState<Posts>(edges);

  useEffect(()=> {
    if (keyword) {
      const filteredPosts = edges
        .filter(({ node: { frontmatter } })=>
          frontmatter?.title?.toLowerCase()
            .includes(keyword.toLowerCase()));

      setPosts(filteredPosts);
    }
  }, [keyword]);

  // 검색 결과가 히스토리 푸시없이 나오기 때문에 뒤로가기 안먹힘

  if (!edges.length) {
    return <Container><p>게시글 없음</p></Container>;
  }

  if (!posts.length) {
    return <Container><p>검색결과 없음</p></Container>;
  }

  return (
    <Container>
      {posts && posts
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

export default PostPreviews;

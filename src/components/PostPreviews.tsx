import styled from 'styled-components';
import { graphql, useStaticQuery } from "gatsby";
import PostPreview from './PostPreview';
import { usePostDispatch } from '../contexts/PostContext';
import { useEffect, useState } from 'react';
import FetchMore from './FetchMore';

const Container = styled.ul`
  margin-top: 24px;
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

const PostPreviews = () => {
  const data: Queries.getPostsQuery = useStaticQuery(GET_POST);

  const { edges } = data.allMarkdownRemark;

  const dispatch = usePostDispatch();

  const [offset, setOffset] = useState(10);

  const fetchMore = () => {
    if (offset > edges.length) return;
    setOffset(prev => prev + 10);
  };

  useEffect(()=>{
    if (edges.length) {
      dispatch?.({
        name: 'posts',
        payload: edges,
      });
    }
  }, [edges]);

  if (!edges.length) return <Container><p>게시글 없음</p></Container>;

  return (
    <Container>
      {edges && edges
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
      <FetchMore fetch={fetchMore}/>
    </Container>
  );
};

export default PostPreviews;

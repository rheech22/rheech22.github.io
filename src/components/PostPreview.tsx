import { Link } from "gatsby";
import styled from "styled-components";
import { flex } from "../styles/mixins";

const Container = styled.li`
  height: 134px;
  
  & > a {
    ${flex('', '', 'column')}
    font-weight: 600;
    text-decoration: none;
    margin-bottom: 5px;

    &:hover {
      color: red;
    }
    
    h2 {
      font-size: 28px;
    }
    
    span {
      font-size: 12px;
      font-weight: 300;
      margin-bottom: 5px;
    }
  
    p {
      font-weight: 400;
      overflow-y: hidden;
    }
  }
`;

interface PostPreviewProps {
  path?: string | null;
  title?: string | null;
  date?: string | null;
  excerpt?: string | null;
}

const PostPreview = ({
  path = '',
  title = '',
  date = '',
  excerpt = '',
}: PostPreviewProps) => {
  return (
    <Container>
      <Link to={path ?? ''}>
        <h2>{title}</h2>
        <span>{date}</span>
        <p>{excerpt}</p>
      </Link>
    </Container>
  );
};

export default PostPreview;

import { Link } from "gatsby";
import styled from "styled-components";

interface PostPreviewProps {
  path?: string | null;
  title?: string | null;
  excerpt?: string | null;
}

const Container = styled.li`
  
`;

const PostPreview = ({
  path = '',
  title = '',
  excerpt = '',
}: PostPreviewProps) => {
  return (
    <Container>
      <Link to={path ?? ''}>{title}</Link>
      <p>{excerpt}</p>
    </Container>
  );
};

export default PostPreview;
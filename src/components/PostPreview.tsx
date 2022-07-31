import { Link } from "gatsby";
import styled from "styled-components";

const Container = styled.li``;

interface PostPreviewProps {
  path?: string | null;
  title?: string | null;
  excerpt?: string | null;
}

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

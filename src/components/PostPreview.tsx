import { Link } from "gatsby";
import styled from "styled-components";

const Container = styled.li`
  & > a {
    color: lightcyan;
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
      <Link to={path ?? ''}>{title}</Link>
      <span>{date}</span>
      <p>{excerpt}</p>
    </Container>
  );
};

export default PostPreview;

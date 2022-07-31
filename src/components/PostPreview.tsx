import { Link } from "gatsby";

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
    <li>
      <Link to={path ?? ''}>{title}</Link>
      <p>{excerpt}</p>
    </li>
  );
};

export default PostPreview;
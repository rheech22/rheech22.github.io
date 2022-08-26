import { Link } from "gatsby";

import styled from "styled-components";
import { device } from "../styles/breakpoints";
import { flex } from "../styles/mixins";

interface Props {
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
}: Props) => {
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

const Container = styled.li`
  padding: 24px 0;
  
  & > a {
    ${flex('', '', 'column')}
    font-weight: 600;
    text-decoration: none;
    margin-bottom: 5px;

    &:hover {
      color: ${({ theme }) => theme.blue};
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
      display: none;
      font-weight: 400;
      overflow-y: hidden;
    }

    @media ${device.tablet} {
      p {
        display: block;
      }
    }
  }
`;
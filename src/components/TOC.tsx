import { Link } from "gatsby";

import styled from "styled-components";
import { device } from "../styles/breakpoints";

import { useGlobalContext } from "../contexts/GlobalContext";

interface Props {
  headings: readonly ({
    readonly id: string | null;
    readonly value: string | null;
    readonly depth: number | null;
  } | null)[] | null
}

const TOC = ({ headings }: Props) => {
  const { headingId } = useGlobalContext();

  return (
    <Container>
      <h2>ON THIS PAGE</h2>
      <ul>
        {headings?.map(heading => {
          if (!heading) return null;

          const { id, depth, value } = heading;

          return (
            <List key={id} depth={depth} isIntersecting={id === headingId}>
              <Link to={`#${id ?? ''}`}>{value}</Link>
            </List>
          );
        })}
      </ul>
    </Container>
  );
};

export default TOC;

const Container = styled.aside`
  @media ${device.laptopM} {
    display: block;
    margin-left: 80px;
  }

  display: none;
  position: sticky;
  top: 16px;
  min-width: 273px;
  max-height: 80vh;
  color: ${({ theme }) => theme.default};
  overflow-y: scroll;

  h2 {
    margin-bottom: 12px;
    padding: 8px 10px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: .025em;
  }

  li + li {
    margin-top: 8px;
  }
`;

const List = styled.li<{depth?: number | null, isIntersecting: boolean }>`
  display: flex;
  align-items: center;
  margin-left: auto;
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
  padding-left: ${({ depth }) => depth && depth > 1 ? `${depth * 8}px` : '8px' };
  padding-right: 8px;
  width: 253px;
  background-color: ${({ theme, isIntersecting }) => isIntersecting ? theme.lightBlue : 'none' };
  color: ${({ theme, isIntersecting }) => isIntersecting ? theme.blue : theme.default };
  transition: all 50ms ease-in-out;
  font-size: 14px;

  &:hover {
    color: ${({ theme }) => theme.blue};
  }

  a {
    padding: 8px 0;
    width: 100%;
    text-decoration: unset;
  }
`;

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
      {headings && headings.length > 0 ? <h2>ON THIS PAGE</h2> : null}
      <ul>
        {headings?.map(heading => {
          if (!heading) null;

          return (
            <List key={heading?.id} depth={heading?.depth} isIntersecting={heading?.id === headingId}>
              <Link to={`#${heading?.id ?? ''}`}>{heading?.value}</Link>
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
  color: ${({ theme }) => theme.default};
  position: sticky;
  top: 16px;
  max-height: 80vh;
  overflow-y: scroll;
  min-width: 287px;

  h2 {
    padding: 8px 10px;
    margin-bottom: 12px;
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
  font-size: 14px;
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
  width: 256px;
  margin-left: auto;
  transition: all 50ms ease-in-out;

  color: ${({ theme, isIntersecting }) => isIntersecting ? theme.blue : theme.default };
  background-color: ${({ theme, isIntersecting }) => isIntersecting ? theme.lightBlue : 'none' };

  &:hover {
    color: ${({ theme }) => theme.blue};
    background-color: ${({ theme }) => theme.lightBlue};
  }

  padding-left: ${({ depth }) => depth && depth > 1 ? `${depth * 8}px` : '8px' };
  padding-right: 8px;

  a {
    width: 100%;
    text-decoration: unset;
    padding: 8px 0;
  }
`;

import { Link } from "gatsby";
import styled from "styled-components";
import { device } from "../styles/breakpoints";

interface Props {
  headings: readonly ({
    readonly id: string | null;
    readonly value: string | null;
    readonly depth: number | null;
  } | null)[] | null
}

const TOC = ({ headings }: Props) => {
  return (
    <Container>
      <ul>
        {headings?.map(heading => {
          if (!heading) null;

          return (
            <List key={heading?.id} depth={heading?.depth}>
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
  display: none;
  position: fixed;
  top: 198px;
  right: 0;
  color: ${({ theme }) => theme.default};

  @media ${device.laptopM} {
    display: block;
  }

  li + li {
    margin-top: 8px;
  }
`;

const List = styled.li<{depth?: number | null}>`
  display: flex;
  align-items: center;
  font-size: 14px;
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
  min-width: 304px;

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

import { Link } from 'gatsby';
import styled from 'styled-components';

import { useContext } from '../store/context';
import { Headings } from '../store/types';
import { font_sora } from '../styles/mixins';

interface Props {
  headings: Headings;
}

const TOC = ({ headings }: Props) => {
  const { headingId } = useContext();

  return (
    <Container>
      <h2>ON THIS PAGE</h2>
      <ul>
        {headings?.map((heading) => {
          if (!heading) return null;

          const { id, depth, value } = heading;

          return (
            <List key={id} $depth={depth} $touch={id === headingId}>
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
  position: sticky;
  top: 163px;
  right: 0px;
  display: none;
  min-width: fit-content;
  height: fit-content;
  overflow-y: scroll;
  color: ${({ theme }) => theme.default};

  &::-webkit-scrollbar {
    display: none;
  }

  h2 {
    ${font_sora()};
    margin-bottom: 12px;
    padding: 8px 10px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.025em;
    transition: all 0.5s;
  }

  ul {
    padding-left: 20px;
  }

  li + li {
    margin-top: 8px;
  }
`;

const List = styled.li<{ $depth?: number | null; $touch: boolean }>`
  display: flex;
  align-items: center;
  margin-left: auto;
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
  padding-left: ${({ $depth }) => ($depth && $depth > 0 ? `${$depth * 8}px` : '8px')};
  padding-right: 10px;
  max-width: 215px;
  min-width: 130px;
  width: 100%;
  background-color: ${({ theme, $touch }) => ($touch ? theme.tocBg : 'none')};
  color: ${({ theme, $touch }) => ($touch ? theme.toc : theme.mute)};
  font-size: ${({ $depth }) => ($depth && $depth > 0 ? `${14 - $depth}px` : '14px')};
  transition: all 50ms ease-in-out;

  @media (hover: hover) {
    &:hover {
      &:hover {
        background-color: ${({ theme, $touch }) => ($touch ? theme.tocBg : theme.tocBgHovered)};
      }
    }
  }

  a {
    padding: ${({ $depth }) => ($depth && $depth > 0 ? `${8 - $depth}px 0` : '8px 0')};
    width: 100%;
    text-decoration: unset;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
  }
`;

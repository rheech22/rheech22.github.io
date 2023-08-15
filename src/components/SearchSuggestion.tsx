import styled from 'styled-components';

import Search from '../assets/icons/Search';
import { flex } from '../styles/mixins';
import Button from './Button';

interface Props {
  title: string;
  filterText: 'all' | 'title' | 'content';
  input: string;
  searchBy: (filter: 'all' | 'title' | 'content') => void;
}

const SearchSuggestion = ({ title, filterText, input, searchBy }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.button === 2) return;

    e.preventDefault();

    searchBy(filterText);
  };

  return (
    <Container onMouseDown={handleClick}>
      <Search />
      {input}
      <Button accessibleName="search suggestion">
        {title}
        <span>↵</span>
      </Button>
    </Container>
  );
};

export default SearchSuggestion;

const Container = styled.li`
  ${flex({ alignItems: 'center' })};
  padding: 0 12px;
  height: 44px;
  font-size: 14px;
  cursor: pointer;

  &:last-of-type {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${({ theme }) => theme.searchSuggestionBgHovered};
      color: ${({ theme }) => theme.searchSuggestionHovered};

      svg {
        fill: ${({ theme }) => theme.searchSuggestionHovered};
      }

      button {
        color: ${({ theme }) => theme.searchSuggestionHovered};
      }
    }
  }

  & > svg {
    fill: ${({ theme }) => theme.searchSuggestion};
    margin-right: 12px;
  }

  & > button {
    ${flex({ alignItems: 'center', justifyContent: 'center' })};
    margin-left: auto;
    border: none;
    background: none;
    border-radius: 6px;
    padding: 4px 6px;
    color: ${({ theme }) => theme.searchSuggestion};
    min-width: fit-content;
    height: 20px;
    font-size: 12px;
    letter-spacing: 0.8px;
    outline: none;
    cursor: pointer;

    & > span {
      margin-left: 4px;
    }
  }
`;

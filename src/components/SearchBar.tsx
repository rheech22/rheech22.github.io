import { navigate } from 'gatsby';
import styled from 'styled-components';

import { device } from '../styles/breakpoints';
import Button from './Button';
import SearchSuggestion from './SearchSuggestion';
import Textbox from './Textbox';

interface Props {
  searchKeyword: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ searchKeyword, onChange }: Props) => {
  const searchBy = (searchFilter: 'all' | 'title' | 'content') => {
    onChange('');

    navigate(`/search/?keyword=${encodeURI(searchKeyword)}&filter=${encodeURI(searchFilter)}`, {
      state: { searchKeyword, searchFilter }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    searchBy('all');
  };

  return (
    <Container onSubmit={handleSubmit} hasInput={Boolean(searchKeyword)}>
      <Textbox onChange={onChange} value={searchKeyword} placeholder="Search" maxLength={40} />
      {searchKeyword && (
        <Suggestions>
          <SearchSuggestion
            searchBy={searchBy}
            input={searchKeyword}
            title="Only Title"
            filterText="title"
          />
          <SearchSuggestion
            searchBy={searchBy}
            input={searchKeyword}
            title="Only Content"
            filterText="content"
          />
        </Suggestions>
      )}
      <Button type="submit" hidden accessibleName="Submit Search" />
    </Container>
  );
};

export default SearchBar;

const Container = styled.form<{ hasInput: boolean }>`
  border-radius: 8px;
  width: 272px;
  height: 48px;
  font-weight: 400;
  position: relative;
  transition: all 0.5s;

  @media ${device.widerThanTablet} {
    &:focus-within {
      width: 544px;

      & > ul {
        display: block;
      }
    }
  }

  & > input {
    border: none;
    border-radius: 8px;
    padding: 0 12px;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.searchBg};
    color: ${({ theme }) => theme.search};
    font-size: 14px;
    transition: background-color 0.5s;

    &::placeholder {
      color: #a7a7a7;
    }

    &:focus {
      @media ${device.widerThanTablet} {
        border-bottom-left-radius: ${({ hasInput }) => (hasInput ? '0px' : '6px')};
        border-bottom-right-radius: ${({ hasInput }) => (hasInput ? '0px' : '6px')};
      }

      color: ${({ theme }) => theme.searchFocused};
      background-color: ${({ theme }) => theme.searchBgFocused};

      &::placeholder {
        color: ${({ theme }) => theme.searchPlaceholderFocused};
      }
    }
  }
`;

const Suggestions = styled.ul`
  display: none;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background-color: ${({ theme }) => theme.searchSuggestionBg};
  color: ${({ theme }) => theme.searchSuggestion};
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 35;
  box-shadow: 0 4px 10px rgb(0 0 0 / 10%);
`;

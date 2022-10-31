import { navigate } from 'gatsby';

import styled from 'styled-components';
import { border } from '../styles/mixins';
import { snow, gray600 } from '../styles/themes';
import { device } from '../styles/breakpoints';

import Textbox from './Textbox';
import Button from './Button';
import SearchSuggestion from './SearchSuggestion';

interface Props {
  searchKeyword: string;
  onChange: (value: string) => void
}

const SearchBar = ({
  searchKeyword,
  onChange,
}: Props) => {
  const searchBy = (searchFilter: 'all' | 'title' | 'content') => {
    onChange('');

    navigate(`/search/?keyword=${encodeURI(searchKeyword)}&filter=${encodeURI(searchFilter)}`, { state: { searchKeyword, searchFilter } });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    searchBy('all');
  };

  return (
    <Container onSubmit={handleSubmit} hasInput={Boolean(searchKeyword)}>
      <Textbox onChange={onChange} value={searchKeyword} placeholder="Search" maxLength={40} />
      {
        searchKeyword &&
        <Suggestions>
          <SearchSuggestion searchBy={searchBy} input={searchKeyword} title="only title" filterText="title" />
          <SearchSuggestion searchBy={searchBy} input={searchKeyword} title="only content" filterText="content" />
        </Suggestions>
      }
      <Button type="submit" hidden accessibleName="Submit Search"/>
    </Container>
  );
};

export default SearchBar;

const Container = styled.form<{hasInput: boolean}>`
  border: 1px solid ${({ theme }) => theme.searchBorder};
  border-radius: 6px;
  width: 272px;
  height: 30px;
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
    border-radius: 6px;
    padding: 0 12px;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.searchBg};
    color: ${snow};
    font-size: 14px;
    transition: all .5s;

    &:focus {
      @media ${device.widerThanTablet} {
        border-bottom-left-radius: ${({ hasInput }) => hasInput ? '0px' : '6px'};
        border-bottom-right-radius: ${({ hasInput }) => hasInput ? '0px' : '6px'};
      }

      color: ${({ theme }) => theme.default};
      background-color: ${({ theme }) => theme.searchBgFocused};
      
      &::placeholder {
        color: ${({ theme })=>theme.searchPlaceholderFocused};
      }  
    }

    &::placeholder {
      color: ${gray600};
    }
  }
`;

const Suggestions = styled.ul`
  display: none;
  border: ${({ theme })=> `1px solid ${theme.border}`};
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background-color: ${({ theme }) => theme.searchSuggestionBg};
  color: ${({ theme }) => theme.default};
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 35;
  box-shadow: 0 4px 10px rgb(0 0 0 / 10%);

  li + li {
    ${border.top};
  }
`;

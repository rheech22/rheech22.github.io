import { navigate } from "gatsby";

import { useDispatch } from "../contexts/GlobalContext";

import styled, { css } from "styled-components";
import { headerLogo, searchPlaceholder } from "../styles/themes";
import { device } from "../styles/breakpoints";

import Textbox from "./Textbox";
import Button from "./Button";
import SearchSuggestion from "./SearchSuggestion";

interface Props {
  input: string;
  onChange: (value: string) => void
}

const SearchBar = ({
  input,
  onChange,
}: Props) => {
  const dispatch = useDispatch();

  const searchBy = (filter: 'all' | 'title' | 'content') => {
    dispatch({ type: 'searchByKeyword', payload: { keyword: input, filter } });

    onChange('');

    navigate(`/search?keyword=${encodeURI(input)}&filter=${encodeURI(filter)}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    searchBy('all');
  };

  return (
    <Container onSubmit={handleSubmit} hasInput={Boolean(input)}>
      <Textbox onChange={onChange} value={input} placeholder='Search' />
      {
        input &&
        <ul>
          <SearchSuggestion searchBy={searchBy} input={input} title='only title' filterText="title" />
          <SearchSuggestion searchBy={searchBy} input={input} title='only content' filterText="content" />
        </ul>
      }
      <Button type="submit" hidden />
    </Container>
  );
};

export default SearchBar;

const Container = styled.form<{hasInput: boolean}>`
  @media ${device.tablet} {
    &:focus-within {
      width: 544px;

      & > ul {
        display: block;
      }
    }
  }

  border: 1px solid ${({ theme }) => theme.searchBorder};
  border-radius: 6px;
  width: 272px;
  height: 30px;
  font-weight: 400;
  position: relative;
  transition: width 0.5s;
  
  & > input {
    border: none;
    border-radius: 6px;
    padding: 0 12px;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.searchBg};
    color: ${headerLogo};
    font-size: 14px;
    
    &:focus {
      @media ${device.tablet} {
        border-bottom-left-radius: ${({ hasInput }) => hasInput ? '0px' : '6px'};
        border-bottom-right-radius: ${({ hasInput }) => hasInput ? '0px' : '6px'};
      }

      background-color: ${({ theme }) => theme.searchBgFocused};
      color: ${({ theme }) => theme.default};
      
      &::placeholder {
        color: ${({ theme })=>theme.searchPlaceholderFocused};
      }  
    }

    &::placeholder {
      color: ${searchPlaceholder};
    }
  }

  & > ul {
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
      border-top: ${({ theme })=> `1px solid ${theme.border}`};
    }
  }
`;

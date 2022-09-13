import { navigate } from "gatsby";

import { useDispatch } from "../contexts/GlobalContext";

import styled from "styled-components";
import { headerLogo, searchPlaceholder, white } from "../styles/themes";

import Textbox from "./Textbox";
import Button from "./Button";
import { device } from "../styles/breakpoints";
import Search from "../assets/icons/Search";
import { flex } from "../styles/mixins";

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
    <Container onSubmit={handleSubmit} >
      <Textbox onChange={onChange} value={input} placeholder='Search' />
      <ul>
        <li>
          <Search/>
          {input}
          <Button onClick={() => searchBy('title')} disabled={!input}>
            Only Title
            <span>↵</span>
          </Button>
        </li>
        <li>
          <Search/>
          {input}
          <Button onClick={() => searchBy('content')} disabled={!input}>
            Only Content
            <span>↵</span>
          </Button>
        </li>
      </ul>
      <Button type="submit" hidden />
    </Container>
  );
};

export default SearchBar;

const Container = styled.form`
  border: 1px solid ${({ theme }) => theme.searchBorder};
  border-radius: 6px;
  width: 272px;
  height: 30px;
  font-weight: 400;
  position: relative;
  
  @media ${device.tablet} {
    &:focus-within {
      width: 544px;
      transition: width 0.5s;

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
    color: ${headerLogo};
    font-size: 14px;
    
    &:focus {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
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

    li {
      ${flex('center')};
      padding: 0 12px;
      height: 44px;
      font-size: 14px;

      &:last-of-type {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
      }

      &:hover {
        background-color: ${({ theme }) => theme.blue};
        color: ${white};

        svg {
          fill: ${white}
        }
      }

      svg {
        fill: ${({ theme }) => theme.mute};
        margin-right: 12px;
      }

      button {
        ${flex('center', 'center')};
        margin-left: auto;
        border: ${({ theme })=> `1px solid ${theme.border}`};
        border-radius: 6px;
        padding: 4px 6px;
        background-color: ${({ theme }) => theme.searchBgFocused};
        color: ${({ theme }) => theme.mute};
        min-width: fit-content;
        height: 20px;
        font-size: 12px;
        letter-spacing: 0.8px;

        & > span {
          margin-left: 4px;
        }
      }
    }
  }
`;

import { navigate } from "gatsby";

import { forwardRef } from "react";
import { useDispatch } from "../contexts/GlobalContext";

import styled from "styled-components";

import Textbox from "./Textbox";
import Button from "./Button";
import { searchPlaceholder } from "../styles/themes";

interface Props {
  isSearchButtonClicked: boolean
  input: string;
  onChange: (value: string) => void
}

const SearchBar = forwardRef<HTMLFormElement, Props>(({
  isSearchButtonClicked,
  input,
  onChange,
}, ref) => {
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch?.({
      type: 'searchByKeyword',
      payload: {
        keyword: input,
      },
    });

    onChange('');

    navigate('/search');
  };

  return (
    <Container ref={ref} onSubmit={handleSubmit} isSearchButtonClicked={isSearchButtonClicked} >
      <Textbox onChange={onChange} value={input} placeholder='Search' />
      <Button type="submit" hidden />
    </Container>
  );
});

export default SearchBar;

interface ContainerProps {
  isSearchButtonClicked: boolean;
}

const Container = styled.form<ContainerProps>`
  width: 272px;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.searchBorder};
  border-radius: 6px;
  font-weight: 400;
  transition: width 0.5s;

  &:focus-within {
    // TODO: 반응형 고려해서 수치 조절하기
    width: 544px;
  }  
  
  & > input {
    border-radius: 6px;
    border: none;
    padding: 0 12px;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.default};
    background-color: ${({ theme }) => theme.searchBg};
    font-size: 14px;

    &:focus {
      background-color: ${({ theme }) => theme.searchBgFocused};

      &::placeholder {
        color: ${({ theme })=>theme.searchPlaceholderFocused};
      }  
    }

    &::placeholder {
      color: ${searchPlaceholder};
    }
  }
`;

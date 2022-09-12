import { navigate } from "gatsby";

import { useDispatch } from "../contexts/GlobalContext";

import styled from "styled-components";
import { headerLogo, searchPlaceholder } from "../styles/themes";

import Textbox from "./Textbox";
import Button from "./Button";
import { device } from "../styles/breakpoints";

interface Props {
  input: string;
  onChange: (value: string) => void
}

const SearchBar = ({
  input,
  onChange,
}: Props) => {
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch({ type: 'searchByKeyword', payload: { keyword: input } });

    onChange('');

    navigate(`/search?keyword=${encodeURI(input)}`);
  };

  return (
    <Container onSubmit={handleSubmit} >
      <Textbox onChange={onChange} value={input} placeholder='Search' />
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
  
  @media ${device.tablet} {
    &:focus-within {
      width: 544px;
      transition: width 0.5s;
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
`;

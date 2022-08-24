import { navigate } from "gatsby";

import { forwardRef } from "react";
import { useDispatch } from "../contexts/GlobalContext";

import styled from "styled-components";
import { fadeIn } from "../styles/keyframes";
import { headerHeight } from "../styles/measures";
// import { XIcon } from '@heroicons/react/outline';

import Textbox from "./Textbox";
import Button from "./Button";
import { searchPlaceholder } from "../styles/themes";

interface Props {
  isSearchButtonClicked: boolean
  input: string;
  // onClose: () => void
  onChange: (value: string) => void
}

const SearchBar = forwardRef<HTMLFormElement, Props>(({
  isSearchButtonClicked,
  // onClose,
  input,
  onChange,
}, ref) => {
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch?.({
      name: 'keyword',
      payload: input,
    });
    onChange('');
    navigate('/search');
  };

  return (
    <Container ref={ref} onSubmit={handleSubmit} isSearchButtonClicked={isSearchButtonClicked} >
      <Textbox onChange={onChange} value={input} placeholder='Search' />
      <Button type="submit" hidden />
      {/* <Button onClick={onClose}>
        <XIcon />
      </Button> */}
    </Container>
  );
});

export default SearchBar;

interface ContainerProps {
  isSearchButtonClicked: boolean;
}

const Container = styled.form<ContainerProps>`
  /* display: ${(props) => props.isSearchButtonClicked ? 'block' : 'none' }; */
  /* position: fixed; */
  /* left: 0; */
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; */
  /* z-index: 2; */
  /* transform: translateY(${headerHeight}); */
  /* animation: ${fadeIn} 0.5s forwards; */
  width: 272px;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.searchBorder};
  border-radius: 6px;
  font-weight: 400;
  transition: width 0.5s;

  &:focus-within {
    width: 544px;
  }  
  
  & > input {
    border-radius: 6px;
    border: none;
    padding: 0 12px;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.color};
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

  /* & > button:last-of-type {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.5;
    
    &:hover {
      opacity: 1;
    }
  } */
`;

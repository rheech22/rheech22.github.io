import { navigate } from "gatsby";

import { forwardRef } from "react";
import { useDispatch } from "../contexts/GlobalContext";

import styled from "styled-components";
import { fadeIn } from "../styles/keyframes";
import { headerHeight } from "../styles/measures";
import { XIcon } from '@heroicons/react/outline';

import Textbox from "./Textbox";
import Button from "./Button";

interface Props {
  isSearchButtonClicked: boolean
  input: string;
  onClose: () => void
  onChange: (value: string) => void
}

const SearchBar = forwardRef<HTMLFormElement, Props>(({
  isSearchButtonClicked,
  onClose,
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
      <Button onClick={onClose}>
        <XIcon />
      </Button>
    </Container>
  );
});

export default SearchBar;

interface ContainerProps {
  isSearchButtonClicked: boolean
}

const Container = styled.form<ContainerProps>`
  display: ${(props) => props.isSearchButtonClicked ? 'block' : 'none' };
  position: fixed;
  left: 0;
  width: 100%;
  height: ${headerHeight};
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  transform: translateY(${headerHeight});
  animation: ${fadeIn} 0.5s forwards;

  & > input {
    font-size: 18px;
    width: 100%;
    height: 100%;
    padding: 0 50px 0 10px;
    border: none;
  }

  & > button:last-of-type {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.5;
    
    &:hover {
      opacity: 1;
    }
  }
`;

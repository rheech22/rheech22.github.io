import { Link } from "gatsby";
import { useState } from "react";

import styled from "styled-components";
import { flex } from "../styles/mixins";
import { headerBold } from "../styles/fonts";
import { headerBg, headerLogo } from "../styles/themes";
import { headerHeight } from "../styles/measures";
import { SearchIcon } from '@heroicons/react/outline';

import useOutsideClick from "../hooks/useOutsideClick";

import Button from "./Button";
import SearchBar from "./SearchBar";

interface Props {
  changeDisplayMode: ()=> void;
}

const Header = ({ changeDisplayMode }: Props) => {
  const [input, setInput] = useState('');
  const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);

  const handleChange = (value: string) => setInput(value);

  const handleClick = () => {
    handleChange('');
    setIsSearchButtonClicked(prev => !prev);
  };

  const shutSearchButton = () => {
    if (isSearchButtonClicked === false) return;
    handleClick();
  };

  const searchRef = useOutsideClick(shutSearchButton);

  return (
    <Container>
      <Link to="/">
        <h1>CHLOG</h1>
      </Link>
      <SearchBar
        ref={searchRef}
        input={input}
        // onClose={handleClick}
        onChange={handleChange}
        isSearchButtonClicked={isSearchButtonClicked}
      />
      <Button onClick={changeDisplayMode}/>
      {/* <Button onClick={handleClick}>
        <SearchIcon />
      </Button> */}
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: fixed;
  z-index: 99;
  ${flex('center', 'flex-start')}
  padding: 0 10px;
  width: 100%;
  min-width: 375px;
  height: ${headerHeight};
  background-color: ${headerBg};

  & > a {
    color: ${headerLogo};
    text-decoration: none;
    margin-right: 16px;

    & > h1 {
      ${headerBold}
    }
  }

  button {
    border: none;
    padding: 0;
    width: 36px;
    height: 36px;
    background: none;
    cursor: pointer;
  }

  & > button {
    &:nth-of-type(1) {
      border-radius: 50%;
      box-shadow: 0px 0px 15px #eee;
      background-image: linear-gradient(to right, #fceabb 0%, black 100%);
      background-position: ${({ theme }) => theme.bgPosition};
      background-size: 200% auto;
      transition: 1.5s;
  
      &:hover { 
        box-shadow: 0px 0px 27px #fff;
      }
    }

    &:last-of-type {
      margin-left: auto;
      color: #eee;
      opacity: 0.7;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

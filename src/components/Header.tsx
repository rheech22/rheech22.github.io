import { Link } from "gatsby";
import { useState } from "react";

import styled from "styled-components";
import { flex } from "../styles/mixins";
import { headerBold } from "../styles/fonts";
import { headerBg, headerLogo } from "../styles/colors";
import { headerHeight } from "../styles/measures";
import { SearchIcon } from '@heroicons/react/outline';

import Button from "./Button";
import SearchBar from "./SearchBar";
import useOutsideClick from "../hooks/useOutsideClick";

const Container = styled.header`
  position: fixed;
  ${flex('center', 'flex-end')}
  padding: 0 10px;
  width: 100%;
  height: ${headerHeight};
  background-color: ${headerBg};

  & > a {
    color: ${headerLogo};
    text-decoration: none;
    margin-right: auto;

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
      background-image: linear-gradient(to right, #fceabb 0%, #f8b500 51%, #fceabb 100%);
      background-size: 200% auto;
      box-shadow: 0px 0px 27px #eee;
      transition: 1s;
  
      &:hover {
        background-position: right center;
        text-decoration: none;
      }
    }

    &:last-of-type {
      margin-left: 10px;
      color: #eee;
      opacity: 0.7;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

interface HeaderProps {
  changeDisplayMode: ()=> void;
}

const Header = ({ changeDisplayMode }: HeaderProps) => {
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
      <SearchBar
        ref={searchRef}
        input={input}
        onClose={handleClick}
        onChange={handleChange}
        isSearchButtonClicked={isSearchButtonClicked}
      />
      <Link to="/">
        <h1>CHLOG</h1>
      </Link>
      <Button onClick={changeDisplayMode}/>
      <Button onClick={handleClick}>
        <SearchIcon />
      </Button>
    </Container>
  );
};

export default Header;
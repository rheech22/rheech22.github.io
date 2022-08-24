import { Link } from "gatsby";
import { useState } from "react";

import styled from "styled-components";
import { flex } from "../styles/mixins";
import { headerBold } from "../styles/fonts";
import { headerBg, headerLogo } from "../styles/colors";
import { headerHeight } from "../styles/measures";
import { SearchIcon } from '@heroicons/react/outline';

import { initialState, useGlobalContext } from "../contexts/GlobalContext";
import useOutsideClick from "../hooks/useOutsideClick";

import Button from "./Button";
import SearchBar from "./SearchBar";

interface Props {
  changeDisplayMode: ()=> void;
}

const Header = ({ changeDisplayMode }: Props) => {
  const [input, setInput] = useState('');
  const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);

  const { isDark } = useGlobalContext() ?? initialState;

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
    <Container isDark={isDark}>
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

const Container = styled.header<{isDark: boolean}>`
  position: fixed;
  z-index: 99;
  ${flex('center', 'flex-end')}
  padding: 0 10px;
  width: 100%;
  min-width: 375px;
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
      box-shadow: 0px 0px 15px #eee;
      background-image: linear-gradient(to right, #fceabb 0%, black 100%);
      background-position: ${({ isDark })=> isDark ? 'right center' : 0};
      background-size: 200% auto;
      transition: 1.5s;
  
      &:hover {
        box-shadow: 0px 0px 27px #fff;
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

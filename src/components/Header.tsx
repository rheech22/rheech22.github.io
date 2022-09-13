import { Link } from "gatsby";

import { useState } from "react";
import { useDispatch } from "../contexts/GlobalContext";

import styled from "styled-components";
import { flex } from "../styles/mixins";
import { device } from "../styles/breakpoints";
import { headerBg, headerLogo } from "../styles/themes";

import SearchBar from "./SearchBar";
import Button from "./Button";

const Header = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState('');

  const handleClick = () => dispatch({ type: 'setDisplayMode' });
  const handleChange = (value: string) => setInput(value);
  const handleReset = () => {
    setInput('');
    dispatch({ type: 'clearSearch' });
  };

  return (
    <Container>
      <Link to="/" onClick={()=> handleReset()}>
        <h1>git log</h1>
      </Link>
      <SearchBar
        input={input}
        onChange={handleChange}
      />
      <Button onClick={handleClick}/>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  @media ${device.mobileL} {
    padding: 16px 32px;
  }

  ${flex('center', 'flex-start')}
  padding: 8px 16px;
  min-width: 375px;
  width: 100%;
  height: 62px;
  background-color: ${headerBg};

  & > a {
    margin-right: 16px;
    color: ${headerLogo};
    text-decoration: none;

    & > h1 {
      font-size: 24px;
      font-weight: 600;
      white-space: nowrap;
    }
  }

  & > button {
    border: none;
    padding: 0;
    min-width: 36px;
    width: 36px;
    height: 36px;
    background: none;
    cursor: pointer;
    outline: none;
    
    &:nth-of-type(1) {
      background-image: linear-gradient(to right, #fceabb 0%, black 100%);
      background-position: ${({ theme }) => theme.themeIconPosition};
      background-size: 200% auto;
      box-shadow: 0px 0px 15px #eee;
      border-radius: 50%;
      transition: 1.5s;
  
      &:hover { 
        box-shadow: 0px 0px 27px #fff;
      }
    }

    &:last-of-type {
      @media ${device.mobileL} {
        margin-left: auto;
      }

      margin-left: 5vw;
      color: #eee;
      opacity: 0.7;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

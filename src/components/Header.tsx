import { Link } from "gatsby";

import { useState } from "react";
import { useDispatch } from "../contexts/GlobalContext";

import styled from "styled-components";
import { flex } from "../styles/mixins";
import { headerBold } from "../styles/fonts";
import { headerBg, headerLogo } from "../styles/themes";

import SearchBar from "./SearchBar";
import Button from "./Button";
import { device } from "../styles/breakpoints";

const Header = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState('');

  const handleClick = () => dispatch({ type: 'setDisplayMode' });
  const handleChange = (value: string) => setInput(value);

  return (
    <Container>
      <Link to="/" onClick={()=> dispatch({ type: 'clearSearch' })}>
        <h1>CHLOG</h1>
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
  ${flex('center', 'flex-start')}
  padding: 8px 16px;
  min-width: 375px;
  width: 100%;
  height: 62px;
  background-color: ${headerBg};
  
  @media ${device.mobileM} {
    padding: 16px 32px;
  }

  & > a {
    margin-right: 16px;
    color: ${headerLogo};
    text-decoration: none;

    & > h1 {
      ${headerBold}
    }
  }

  button {
    border: none;
    padding: 0;
    min-width: 36px;
    width: 36px;
    height: 36px;
    background: none;
    cursor: pointer;
  }

  & > button {
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
      margin-left: 5vw;
      color: #eee;
      opacity: 0.7;

      @media ${device.mobileL} {
        margin-left: auto;
      }

      &:hover {
        opacity: 1;
      }
    }
  }
`;

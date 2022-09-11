import { Link } from "gatsby";

import { useState } from "react";
import { useDispatch } from "../contexts/GlobalContext";

import styled from "styled-components";
import { flex } from "../styles/mixins";
import { headerBold } from "../styles/fonts";
import { headerBg, headerLogo } from "../styles/themes";

import SearchBar from "./SearchBar";
import Button from "./Button";

const Header = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState('');

  const flipDisplayMode = () => dispatch({ type: 'setDisplayMode' });

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
      <Button onClick={flipDisplayMode}/>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  ${flex('center', 'flex-start')}
  padding: 16px 32px;
  width: 100%;
  min-width: 375px;
  height: 62px;
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
      background-position: ${({ theme }) => theme.themeIconPosition};
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

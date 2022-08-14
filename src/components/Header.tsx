import { useState } from "react";
import styled from "styled-components";
import { flex } from "../styles/mixins";
import Button from "./Button";
import SearchBar from "./SearchBar";

const Container = styled.header`
  ${flex('center')}
  width: 100%;
  height: 50px;
  background-color: blue;

  & > button {
    margin-left: auto;
  }
`;

const Header = () => {
  const [input, setInput] = useState('');
  const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);

  const handleChange = (value: string) => setInput(value);

  const handleClick = () => {
    handleChange('');
    setIsSearchButtonClicked(prev => !prev);
  };

  return (
    <Container>
      <SearchBar isSearchButtonClicked={isSearchButtonClicked} onClose={handleClick} input={input} onChange={handleChange} />
      <h1>Devlog</h1>
      <Button innerText="Search" onClick={handleClick}/>
    </Container>
  );
};

export default Header;
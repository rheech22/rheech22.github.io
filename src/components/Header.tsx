import { Link } from "gatsby";
import { useState } from "react";
import styled from "styled-components";
import { flex } from "../styles/mixins";
import Button from "./Button";
import SearchBar from "./SearchBar";

const Container = styled.header`
  position: fixed;
  ${flex('center', 'space-between')}
  padding: 0 10px;
  width: 100%;
  height: 50px;
  background-color: blue;

  & > a {
    color: inherit;
    text-decoration: none;

    & > h1 {
      color: white;
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

  return (
    <Container>
      <SearchBar isSearchButtonClicked={isSearchButtonClicked} onClose={handleClick} input={input} onChange={handleChange} />
      <Link to="/">
        <h1>Devlog</h1>
      </Link>
      <Button innerText="toggle" onClick={changeDisplayMode}/>
      <Button innerText="Search" onClick={handleClick}/>
    </Container>
  );
};

export default Header;
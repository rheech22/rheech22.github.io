import { navigate } from "gatsby";
import styled from "styled-components";
import { usePostDispatch } from "../contexts/PostContext";
import Button from "./Button";
import Textbox from "./Textbox";

interface ContainerProps {
  isSearchButtonClicked: boolean
}

const Container = styled.form<ContainerProps>`
  display: ${(props) => props.isSearchButtonClicked ? 'block' : 'none' };
  position: fixed;
  left: 0;
  width: 100%;
  height: 50px;

  & > input {
    font-size: 20px;
    width: 100%;
    height: 100%;
    padding: 0 10px;
    border: none;
  }

  & > button:last-of-type {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

interface SearchBarProps {
  isSearchButtonClicked: boolean
  input: string;
  onClose: () => void
  onChange: (value: string) => void
}

const SearchBar = ({ isSearchButtonClicked, onClose, input, onChange }: SearchBarProps) => {
  const dispatch = usePostDispatch();

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
    <Container onSubmit={handleSubmit} isSearchButtonClicked={isSearchButtonClicked} >
      <Textbox onChange={onChange} value={input} placeholder='Search'/>
      <Button type="submit" hidden />
      <Button innerText="close" onClick={onClose}/>
    </Container>
  );
};

export default SearchBar;
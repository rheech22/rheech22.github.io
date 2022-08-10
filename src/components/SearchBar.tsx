import { navigate } from "gatsby";
import { useState } from "react";
import { usePostDispatch } from "../contexts/PostContext";
import Button from "./Button";
import Textbox from "./Textbox";

const SearchBar = () => {
  const dispatch = usePostDispatch();
  const [input, setInput] = useState('');

  const handleChange = (value: string) => setInput(value);

  const handleSubmit = () => {
    dispatch?.({
      name: 'keyword',
      payload: input,
    });
    setInput('');
    navigate('/search');
  };

  return (
    <div>
      <Textbox onChange={handleChange} value={input} placeholder='search posts...'/>
      <Button innerText="submit" onClick={handleSubmit}/>
    </div>
  );
};

export default SearchBar;
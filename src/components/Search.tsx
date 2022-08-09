import { useState } from "react";
import { useSearchDispatch } from "../contexts/SearchContext";
import Button from "./Button";
import Textbox from "./Textbox";

const Search = () => {
  const dispatch = useSearchDispatch();
  const [input, setInput] = useState('');

  const handleChange = (value: string) => setInput(value);

  const handleSubmit = () => {
    dispatch?.(input);
    setInput('');
  };


  return (
    <div>
      <Textbox onChange={handleChange} value={input} placeholder='search posts...'/>
      <Button innerText="submit" onClick={handleSubmit}/>
    </div>
  );
};

export default Search;
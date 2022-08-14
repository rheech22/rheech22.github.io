import { navigate } from "gatsby";
import React, { useState } from "react";
import { usePostDispatch } from "../contexts/PostContext";
import Textbox from "./Textbox";

const SearchBar = () => {
  const dispatch = usePostDispatch();
  const [input, setInput] = useState('');

  const handleChange = (value: string) => setInput(value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch?.({
      name: 'keyword',
      payload: input,
    });
    setInput('');
    navigate('/search');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Textbox onChange={handleChange} value={input} placeholder='search posts...'/>
      <input type="submit" hidden />
    </form>
  );
};

export default SearchBar;
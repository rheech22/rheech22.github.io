import { useContext } from "react";
import { globalContext } from "../context";
import Button from "./Button";
import Textbox from "./Textbox";

const Search = () => {
  const { queryText } = useContext(globalContext);

  const handleSubmit = () => console.log('submit!');
  const handleChange = (value: string) => console.log(value);

  console.log(queryText);

  return (
    <div>
      <Textbox onChange={handleChange} placeholder='search posts...'/>
      <Button innerText="submit" onClick={handleSubmit}/>
    </div>
  );
};

export default Search;
import { useState, FormEvent } from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (text: string) => {
    setSearchValue(text);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e: FormEvent) => {
    e.preventDefault();

    // call search function with searchValue
    console.log(searchValue);

    resetInputField();
  };

  return (
    <form className="search" onSubmit={callSearchFunction}>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => handleSearchInputChanges(e.target.value)}
      />
      <input type="submit" value="Search" />
    </form>
  );
};

export default Search;

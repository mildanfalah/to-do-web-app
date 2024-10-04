import React from "react";

function SearchBar({ keyword, keywordchange }) {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search todo list ..."
      value={keyword}
      onChange={(event) => keywordchange(event.target.value)}
    />
  );
}

export default SearchBar;

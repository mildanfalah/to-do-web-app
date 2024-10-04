import React from "react";
import PropTypes from "prop-types";

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

SearchBar.propTypes = {
  keywordchange: PropTypes.func.isRequired,
};

export default SearchBar;

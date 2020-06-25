import React from "react";

const SearchBar = ({ value, change }) => {
  return (
    <input
      className="searchbar"
      type="search"
      value={value}
      placeholder="Search Person"
      onChange={change}
    />
  );
};

export default SearchBar;

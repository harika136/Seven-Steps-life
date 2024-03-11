import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(searchText);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        value={searchText}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;

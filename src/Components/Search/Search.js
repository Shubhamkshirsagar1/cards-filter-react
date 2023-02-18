import React from "react";
import "./Search.css";

function Search(props) {
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={props.searchValue}
        onChange={props.handleSearch}
      />
    </>
  );
}

export default Search;

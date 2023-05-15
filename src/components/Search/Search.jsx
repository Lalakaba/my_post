import "./search.css";
import React from "react";

const Search = ({ setSearch }) => {
  return (
    <input
      placeholder="Поиск..."
      onChange={(e) => setSearch(e.target.value)}
      className="search__input"
    />
  );
};

export default Search;

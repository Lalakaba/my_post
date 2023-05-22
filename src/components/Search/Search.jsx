import "./search.css";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ setSearch }) => {
  return (
    <div className="container__search">
      <SearchIcon className="search__icon" />

      <input type="text"
        placeholder="Поиск..."
        onChange={(e) => setSearch(e.target.value)}
        className="search__input"
      />
    </div>
  );
};

export default Search;

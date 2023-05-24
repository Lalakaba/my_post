import "./search.css";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ setSearch }) => {
  return (
<div className="searchBox">
  <input className="searchInput" type="text" 
   placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
  <button className="searchButton" >
  <SearchIcon className="search__icon" />
  </button>
</div>



  )
  
};

export default Search;

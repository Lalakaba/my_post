import './search.css';
import React, { useContext, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ContextData } from '../someContext/Context';

const Search = () => {
 
  const {goods, setVisibleGoods, posts} = useContext(ContextData);
  const [text, updateText] = useState("");
  const [searchData, setSearchData] = useState(goods);
  const clearSearch = () => {
      updateText("");
      setSearchData(posts);
      setVisibleGoods(posts);
  }
  const setSearch = (e) => {
      
      updateText(e.target.value);
      let arr = posts.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase()))
      setSearchData(arr);
      setVisibleGoods(arr);
  }



  return (
    <div className="searchBox">
      <input
        className="searchInput"
        type="text"
        placeholder="Поиск..."
        value={text}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="searchButton">
        <SearchIcon className="search__icon" />
      </button>
    </div>
  );
};

export default Search;

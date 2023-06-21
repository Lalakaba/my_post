import './search.css';
import React, { useContext, useEffect} from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ContextData } from '../../someContext/Context';
import { useDebounce } from '../hooks/hook';
import { api } from '../api/api';



const Search = ({setSearch}) => {
  const {setPosts, search}= useContext(ContextData)
  const debounceValue = useDebounce(search);
 
 

//поиск по query
useEffect(() => {
  if (debounceValue === undefined) return;
  api.searchPosts(debounceValue)
  .then((data) => setPosts(data));

}, [debounceValue, setPosts]);


return (

<div className="searchBox">
<input className="searchInput" type="text" 
   placeholder="Search"  onChange={(e) => setSearch(e.target.value)} /> 
  <button className="searchButton" >
  <SearchIcon className="search__icon" />
  </button>
 
</div>


)}

 

export default Search;



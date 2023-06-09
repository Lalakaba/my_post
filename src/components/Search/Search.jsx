import './search.css';
import React, { useContext, useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ContextData } from '../../someContext/Context';





const Search = () => {
  const [search, setSearch] = useState(undefined);
  const {setPosts,  posts}= useContext(ContextData)
 
  const searchData = (e) => {
    e.preventDefault();

    const arrFiltr = posts.filter((e) => e.author.name.includes(search));
    setPosts(arrFiltr);
  };
 




return (

<div className="searchBox">
<input className="searchInput" type="text" 
   placeholder="Search"  onChange={(e) => setSearch(e.currentTarget.value)} /> 
  <button  className="searchButton" onClick={searchData} >  
  <SearchIcon/> 
  </button>
 
</div>


)}

 

export default Search;



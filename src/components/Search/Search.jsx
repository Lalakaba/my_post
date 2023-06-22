import './search.css';
import React, { useContext, useEffect} from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ContextData } from '../../someContext/Context';
import { useDebounce } from '../hooks/hook';
import { api } from '../api/api';



const Search = () => {
  const {setPosts, search,setSearch, posts}= useContext(ContextData)
  const debounceValue = useDebounce(search);
  const searchData = (e) =>{

    e.preventDefault()
   
    const arrFiltr = posts.filter(e => e.author.name.includes(search));
    setPosts(arrFiltr)

  }
 

//поиск по query
useEffect(() => {
  if (debounceValue === undefined) return
  console.log(debounceValue)
  // api.searchPosts(debounceValue)
  // .then((data) => setPosts(data));

}, [debounceValue, setPosts]);


return (

<div className="searchBox">
<input className="searchInput" type="text" 
   placeholder="Search"  onChange={(e) => setSearch(e.currentTarget.value)} /> 
  <button onClick={searchData} className="searchButton" >
  <SearchIcon className="search__icon" />
  </button>
 
</div>


)}

 

export default Search;



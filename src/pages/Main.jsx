
import React, { useContext, useEffect } from 'react';
import "../components/Main/main.css"
import Post from '../components/Post/Post';
import { ContextData } from '../components/someContext/Context';
import Header from '../components/Header/Header';
import { api } from '../api';
import { useDebounce } from "../components/MyHooks/hook"
import {filteredPosts} from '../others/something'
import AddBtn from '../components/Profile/AddPost/AddBtn';



export  const Main = ({posts}) => {
  const {search, setSearch, setPosts } = useContext(ContextData)
  const debounceValue = useDebounce(search);

//поиск по query
useEffect(() => {
  if (debounceValue === undefined) return;
  api
    .searchPosts(debounceValue)
    .then((data) => setPosts(filteredPosts(data)))
    .catch((error) => console.error(error));
}, [debounceValue]);

  return (

          <div className="main">


            <Header setSearch={setSearch} />
            <AddBtn/>
          
         {posts.map((item) => {
        return <Post  key={item.updated_at}
        {...item}  post={item}/>;
      
      })}
            
        
    </div>
  );
};

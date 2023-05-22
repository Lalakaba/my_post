import {Routes, Route} from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import {Main} from './components/Main/Main';
import { api } from './api';
import { useDebounce } from "./MyHooks/hook"
import {filteredPosts} from './others/something'
import { PostContext } from './someContext/PostContext';
import { UserContext } from './someContext/UserCtx';


//Подключение страниц
import { Enter } from './pages/Enter';
import { PersonalPage } from "./pages/PersonalPage";
import { NotFound } from './pages/NotFound';



function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState(undefined);
  const [user, setUser] = useState({});



  const debounceValue = useDebounce(search)


  const handlePostsLike = async (post, wasLiked) => {
    const updatedPost = await api.ChangeLikePostStatus(post._id, wasLiked);
    

    const index = posts.findIndex((e) => e._id === updatedPost?._id);
    if (index !== -1) {
      setPosts((state) => [
        ...state.slice(0, index),
        updatedPost,
        ...state.slice(index + 1),
      ]);
    }
  }


//поиск по query
useEffect(() => {
  if (debounceValue === undefined)  return; 
  api.SearchPosts(debounceValue)
    .then((data) => setPosts(filteredPosts(data)))
}, [debounceValue]);

//получаем инфу о пользователе и все посты
  useEffect(() => {                                              
    api.getUserInfo().then((user) => {
        setUser(user);
    })
  }, []);
    useEffect(() => { 
    api.getAllPosts().then((data) => {
      // const filtered = filteredPosts(data)
      setPosts(data);
      });
  }, []);

  const postsValue = {
    handleLike: handlePostsLike,
    posts : posts,
    search,
    user,
    
 
  }
//функция снятия и удаление лайка без перезагрузки страницы

  
  
  return (

    <div className='App' >
<h1>Главная</h1>
    <PostContext.Provider value={postsValue}>
    <UserContext.Provider value={user}>

    <Header setSearch={setSearch} />
      <Routes>
      <Route path="personalpage" element={<PersonalPage/>} /> 
      <Route path='/enter' element={<Enter/>}/> 
      <Route path='*' element={<NotFound/>}/> 
      </Routes>

       <Main posts={posts}/>
       </UserContext.Provider>
    </PostContext.Provider>
    </div>
  );
}


export default App;



/** если у данного эдемента(его айди=== айди updatedpost._id), 
 * тогда верни updatedpost иначе верни элемент и сделай сеткард. 
 * реакт понял, что у него изменилось и изменил только что нужно, не обновляя полностью страницу
 */
//несколько способов найти элемент в массиве:
/** через map */


	//хук,в который мы оборачиваем то, что нам не нужно сразу же в момент рендеринга
 //или когда нпи нужны отложенные события
import {Routes, Route} from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import { api } from './api';
import { useDebounce } from "./components/MyHooks/hook"
import {filteredPosts} from './others/something'
import { PostContext } from './components/someContext/PostContext';
import { UserContext } from './components/someContext/UserCtx';


//Подключение страниц
import {Main} from './pages/Main';
import { Enter } from './pages/Enter';
import { PersonalPage } from "./pages/PersonalPage";
import { NotFound } from './pages/NotFound';
import { ResetPass } from './components/Profile/ResetPass';






function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState(undefined);
  const [authors, setAuthors] = useState([]);
  const [user, setUser] = useState({});
  const debounceValue = useDebounce(search)
  
  const [response, setResponse] = useState({});

//функция снятия и удаление лайка без перезагрузки страницы
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
    api.getUserInfo().then((data) => {
        setUser(data);
      
    })
  }, []);

  function updatePostState(likedPost) {
    let updatedPostData = posts.map((el) => {
      return el._id !== likedPost._id ? el : likedPost;
    });
    setPosts([...updatedPostData]);
  }

    useEffect(() => { 
    api.getAllPosts().then((data) => {
      // const filtered = filteredPosts(data)
      setPosts(data);
      });
  }, []);

  useEffect(() => {                                              
    api.getUsers().then((data) => {
      setAuthors(data);
      
    })
  }, []);

  const postsValue = {
    handleLike: handlePostsLike,
    updatePostState,
    posts : posts,
    search,
    user,
    authors
    
 
  }


  
  
  return (

    <div className='App' >

    <PostContext.Provider value={postsValue}>
    <UserContext.Provider value={user}>

    <Header setSearch={setSearch} />
      <Routes>
      <Route path='/resetPass' element={<ResetPass/>}/> 


      <Route path='*' element={<NotFound/>}/> 
      <Route path='/' element={<Enter setResponse={setResponse}/>}/>
      <Route path='/main' element={<Main posts={posts}/>}/> 
      <Route path="/personalpage" element={<PersonalPage/>} /> 

      
     
      
    
       

     
      </Routes>
     
       
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
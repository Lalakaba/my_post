import {Routes, Route} from 'react-router-dom'
import React, { useCallback, useEffect, useState } from 'react';
import Header from './components/Header/Header';
import { api } from './api';
import { useDebounce } from "./components/MyHooks/hook"
import {filteredPosts} from './others/something'
import { ContextData } from './components/someContext/Context';

//Подключение страниц
import {Main} from './pages/Main';
import { Enter } from './pages/Enter';
import { ProfilePage } from "./pages/ProfilePage";
import { NotFound } from './pages/NotFound';
import {  RessetPass } from './components/Profile/ResetPass';
import { ChangePass } from './components/Profile/ChangePass';
import { Registration } from './pages/Registration';
import { AboutUser } from './others/InfoUser';








function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState(undefined);
  const [user, setUser] = useState({});
  const [visible, setVisible] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const debounceValue = useDebounce(search);
  const [postComment, setPostComment] = useState([]);
  const [authorized, setAuthorized] = useState(false);
  const [userInfo, setUserInfo] = useState(AboutUser);

//функция снятия и удаление лайка без перезагрузки страницы

const handlePostLike = useCallback(async (post, isLiked) => {
  const updatedPost = await api.changeLikePostStatus(post._id, isLiked);
  setPosts(s => [...s.map(e => e._id === updatedPost?._id ? updatedPost : e)]);// функция работает, видно в сети, но не меняется цвет сердце никак и счетчик не изменяется

}, [])


//поиск по query
useEffect(() => {
  if (debounceValue === undefined)  
  return
  api.searchPosts(debounceValue)
    .then((data) => setPosts(filteredPosts(data)
    ))
    .catch((error) => console.error( error)
            );
}, [debounceValue]);

//получаем инфу о пользователе и все посты
useEffect(() => {
  Promise.all([api.getAllPosts(), api.getUserInfo()])
      .then(([data, user]) => {
          setPosts(data);
          setUser(user);
      })
      .catch((error) =>
          console. error( error)
      );
}, [ postComment, userInfo]);




  // useEffect(() => {                                              
  //   api.getUserInfo().then((user) => {
  //       setUser(user);
  //     })
  //     .catch((error) =>
  //               console.error(error)
  //           );
  // }, []);

 
  //   useEffect(() => { 
  //   api.getAllPosts().then((data) => {
  //     // const filtered = filteredPosts(data)
  //     setPosts(data);
  //     })
  //     .catch((error) =>
  //               console.error(error)
  //           );
  // }, []);

  


  function updatePostState(likePost) {
    let updatedPost = posts.map((el) => {
      return el._id !== likePost._id ? el : likePost;
    });
    setPosts([...updatedPost]);
  }

  const postsValue = {
    handleLike: handlePostLike,
    updatePostState,
    setPosts,
    posts : posts,
    search,
    user,
    setUser,
    visible, 
    setVisible,
    userInfo,
    setUserInfo,
    favorites,
    postComment, 
    setPostComment,
    authorized, 
    setAuthorized
 
  }

  
  
  
  return (

    <div className='App' >

    <ContextData.Provider value={postsValue}>
  

    <Header setSearch={setSearch} />
      <Routes>
      
      <Route path='/registration' element={<Registration/>}/> 
      <Route path='/ressetpass' element={<RessetPass/>}/> 
      <Route path='/changepass' element={<ChangePass/>}/> 


      <Route path='*' element={<NotFound/>}/> 
      <Route path='/' element={<Enter />}/>
      

      <Route path='/blogpage' element={<Main posts={posts}/>}/> 
      <Route path='/profile/:userId' element={<ProfilePage/>} /> 

      
     
      
    
       

     
      </Routes>
     
       
       </ContextData.Provider>
   
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
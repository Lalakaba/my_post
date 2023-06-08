import {Routes, Route} from 'react-router-dom'
import React, { useCallback, useEffect, useState } from 'react';

import { api } from './api';

import { ContextData } from './components/someContext/Context';

//Подключение страниц
import {Main} from './pages/Main';
import { Enter } from './pages/Enter';
import { ProfilePage } from "./pages/ProfilePage";
import { NotFound } from './pages/NotFound';
import {  RessetPass } from './components/Profile/ResetPass';
import { ChangePass } from './components/Profile/ChangePass';
import { Registration } from './pages/Registration';
import { AboutPost, AboutUser } from './others/InfoUserPost';










function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState(undefined);
  const [user, setUser] = useState({});
  const [visible, setVisible] = useState(false);
  const [openModal, setOpenModal] = useState('');
  const [postComment, setPostComment] = useState([]);
  const [authorized, setAuthorized] = useState(false);
  const [postInform, setPostInform] = useState(AboutPost)
  const [userInfo, setUserInfo] = useState(AboutUser);
  const [currentUser, setCurrentUser] = useState({});
  const [preliminaryAvatar, setPreliminaryAvatar] = useState("")
//функция снятия и удаление лайка без перезагрузки страницы

const handlePostLike = useCallback(async (post, isLiked) => {
  const updatedPost = await api.changeLikePostStatus(post._id, isLiked);
  setPosts(s => [...s.map(e => e._id === updatedPost?._id ? updatedPost : e)])

}, [])




//получаем инфу о пользователе и все посты
useEffect(() => {
  Promise.all([api.getAllPosts(), api.getUserInfo()])
    .then(([data, userData]) => {
      setPosts(data);
      setUser(userData);
    })
    .catch((error) => console.error(error));
}, [postInform, postComment, userInfo]);




  


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
    setSearch,
    user,
    setUser,
    visible, 
    setVisible,
    userInfo,
    setUserInfo,
    postComment, 
    setPostComment,
    authorized, 
    setAuthorized,
    currentUser, 
    setCurrentUser,
    openModal, setOpenModal,
    preliminaryAvatar, setPreliminaryAvatar,
    postInform, setPostInform,
 
  }

  
  
  
  return (

    <div className='App' >

    <ContextData.Provider value={postsValue}>
  

   
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
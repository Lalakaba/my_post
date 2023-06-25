import { Routes, Route} from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";

import { api } from "./components/api/api";

import { ContextData } from "./someContext/Context";

//Подключение страниц

import { Enter } from "./pages/Enter";
import { ProfilePage } from "./pages/ProfilePage";
import { NotFound } from "./pages/NotFound";
import { RessetPass } from "./components/Profile/ResetPass";
import { ChangePass } from "./components/Profile/ChangePass";
import { Registration } from "./pages/Registration";
import { AboutPost, AboutUser } from "./others/InfoUserPost";
import { MainPostPage } from "./pages/MainPostPage";
import { parseJwt } from "./components/api/utils/utils";

function App() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const [visible, setVisible] = useState(false);
  const [openModal, setOpenModal] = useState("");
  const [postComment, setPostComment] = useState([]);
  const [authorized, setAuthorized] = useState(false);
  const [postInform, setPostInform] = useState(AboutPost);
  const [userInfo, setUserInfo] = useState(AboutUser);
  const [preliminaryAvatar, setPreliminaryAvatar] = useState("");
  const [postImageView, setPostImageView] = useState(
    "https://velo1000.ru/local/templates/velo1000/images/no-img.png"
  );
  const [post, setPost] = useState([]);


  //функция снятия и удаление лайка без перезагрузки страницы

  const handlePostLike = useCallback(async (post, isLiked) => {
    const updatedPost = await api.changeLikePostStatus(post._id, isLiked);
    setPosts((s) => [
      ...s.map((e) => (e._id === updatedPost?._id ? updatedPost : e)),
    ]);
  }, []);


  useEffect(() => {
    if (!authorized) return
    Promise.all([api.getAllPosts(), api.getUserInfo()])
    .then(([data, userData]) => {
     setPosts(data);
     setUser(userData);
      })
      .catch((error) => console.error(error));
  }, [postInform, postComment, userInfo, authorized]);

  // Проверка на авторизацию
  useEffect(() => {
    const token = parseJwt(
    JSON.parse(localStorage.getItem("tokenPostik"))?.token);
      if (token && new Date() < new Date(token?.exp * 1e3)) {
        setAuthorized(true);
      } else {
        setAuthorized(false);
      
      }
    }, [ setAuthorized]);
  

  const postsValue = {
    handleLike: handlePostLike, updatePostState,
    setPosts, posts: posts,
    user,setUser,
    visible,setVisible,
    userInfo,setUserInfo,
    postComment,setPostComment,
    authorized,setAuthorized,
    openModal,setOpenModal,
    preliminaryAvatar,setPreliminaryAvatar,
    postInform,setPostInform,
    postImageView,setPostImageView,
    post,setPost,
  };

  

  function updatePostState(likePost) {
    let updatedPost = posts.map((el) => {
      return el._id !== likePost._id ? el : likePost;
    });
    setPosts([...updatedPost]);
  }
  
  return (
    <div className="App">
      <ContextData.Provider value={postsValue}>
        
        <Routes>
        {authorized ?(
          <>
          
          <Route path="/blogpage" element={<MainPostPage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
          </>
):(
<>
          <Route path="/" element={<Enter />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/ressetpass" element={<RessetPass />} />
          <Route path="/changepass" element={<ChangePass />} />
          <Route path="*" element={<NotFound />} />
          </>
)}
        </Routes>

      </ContextData.Provider>
    </div>
  );
}

export default App;





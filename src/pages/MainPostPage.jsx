import { useContext, useEffect } from "react";
import Modal from "../components/Modal/Modal";
import AddPost from "../components/Profile/AddPost/AddPost";
import Header from "../components/Header/Header";
import { ContextData } from "../components/someContext/Context";
import { api } from "../components/api/api";
import { filteredPosts } from "../others/something";
import AddBtn from "../components/Profile/AddPost/AddBtn"
import {useDebounce} from "../components/MyHooks/hook"
import MainList from "../components/MainList/MainList";
import { Navbar } from "../components/NavBar/NavBar";




export  const MainPostPage = () => {
    const {search, setSearch, setPosts, posts, openModal, setOpenModal, postImageView, setPostImageView} = useContext(ContextData)
    const debounceValue = useDebounce (search);
   
  //поиск по query
  useEffect(() => {
    if (debounceValue === undefined) return;
    api.searchPosts(debounceValue)
      .then((data) => setPosts(filteredPosts(data)))
      .catch((error) => console.error(error));
  }, [debounceValue,setPosts]);
  




    return (
  
            <div className="MainContainer">
  
   <Header setSearch={setSearch} />
  
             
              <AddBtn onClick={() => {setOpenModal('addPost');}}/>
  
              {openModal === 'addPost' && (
                          <Modal state= {openModal === 'addPost'} setState={setOpenModal}>
                           <AddPost setOpenModal={setOpenModal}
                           postImageView={postImageView} 
                           setPostImageView={setPostImageView}/>
                          </Modal>)}
                         
            <div className="mainPostContainer">
            <div className="NavBarBox">
                          <Navbar/>
                          </div>
           
           <MainList posts={posts} />
           </div>
          
      </div>
    );
  };
  
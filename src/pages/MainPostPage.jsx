import { useContext} from "react";
import Modal from "../components/Modal/Modal";
import AddPost from "../components/Profile/AddPost/AddPost";
import Header from "../components/Header/Header";
import { ContextData } from "../someContext/Context";


import AddBtn from "../components/Profile/AddPost/AddBtn"

import MainList from "../components/MainList/MainList";





export  const MainPostPage = () => {
    const {setSearch, posts, openModal, setOpenModal, postImageView, setPostImageView} = useContext(ContextData)
    
  




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
            
           
           <MainList posts={posts} />
           </div>
          
      </div>
    );
  };
  
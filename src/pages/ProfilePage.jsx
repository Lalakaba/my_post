

import "./index.css"
import { useContext, useEffect, useState } from "react";
import { ContextData } from "../someContext/Context";
import {Link, useParams} from "react-router-dom";

import Modal from "../components/Modal/Modal";
import ChangeAvatar from "../components/Profile/ChangeAvatar";
import { api } from "../components/api/api"
import { Icon } from "@blueprintjs/core";
import EditProfile from "../components/Profile/EditProfile"

import { Avatar } from "@nextui-org/react";
import CardsList from "../components/Post/Card/CardsList";
import Logo from "../components/Logo/Logo";
import { clickNotification } from "../others/Notification";




export const ProfilePage  = () => {
    const { user,userInfo, setUserInfo, openModal, setOpenModal, preliminaryAvatar, setPreliminaryAvatar, posts, setAuthorized } = useContext(ContextData);
  const [userPosts, setUserPosts] = useState([]);
  const { name, about, email, avatar } = userInfo;
  const { userId } = useParams();
    const userProfile = user._id === userId;
    useEffect (() => {
        api.getUserInfoById(userId)
            .then((userData) => {
                setUserInfo(userData);
                setPreliminaryAvatar(userData.avatar);
            })
            .catch((error) => console.error(error)
            );
    }, [ userId, setUserInfo, setPreliminaryAvatar]);
      
    function logOut() {
        localStorage.removeItem("tokenPostikt" );
        setAuthorized(false);
        clickNotification('error', '🥺', `Уже покидаете нас?,${userId}`);
       
      }

    useEffect(() => {
        const filter = posts.filter((post) => post.author._id === userId);
        setUserPosts(filter);
        
    }, [userId, posts]);

    return (
        <div className='profilePage_container'>
            <Logo className="profileLogo"/>

        <div className="backBtnProfile">
            <Link className="linkBtn" to="/blogpage">
            <button className="glow-on-hover" type="button"> Назад
            </button>
            </Link>
            <Link className="linkBtn"to="/">
            <button type="submit" className="glow-on-hover"
                onClick={() => logOut()}
              > Выйти
              </button>
              </Link>
            </div>
            <div className="profile">
    
        <Avatar src={avatar} alt='avatar' css={{ size: '$48' }}  className="profileAvatar"/>
        

            <div className="editProfile">
            {userProfile && (
          <Icon icon ="edit" className="editProfileIcon" onClick={() => setOpenModal('avatar')}/> )}

             {openModal === 'avatar' && (
                        <Modal state={openModal === 'avatar'} setState={setOpenModal}>
                            <ChangeAvatar
                                preliminaryAvatar={preliminaryAvatar}
                                setUserInfo={setUserInfo}
                                setPreliminaryAvatar={setPreliminaryAvatar}/>
                        </Modal>)}

          </div>

                <div className="editProfileUser">
                <div className="profileInfo">
                        <span className="profileName">{name}</span>
                        <span className="profileAbout">{about} </span>
                        <span className="profileEmail">{email}</span>
                        
                       </div>
              
                {userProfile && (
          <Icon icon ="edit" className="editProfileIconInfo"  onClick={() => setOpenModal('editProfileInfo')}/> )}
           
                {openModal === 'editProfileInfo' && (
              <Modal state={openModal === 'editProfileInfo'} setState={setOpenModal}>
                    <EditProfile
                    setUserInfo= {setUserInfo} 
                    setOpenModal= {setOpenModal} /> 
             </Modal>
                  ) }
                 </div>
                 </div>

           



            {userProfile && (
               <CardsList
            cards={userPosts}/>)}
             
              
           
           
            </div>

    )

    }
  

export default ProfilePage;
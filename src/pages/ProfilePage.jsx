

import "./index.css"
import Profile from "../components/Profile/Profile";
import { useContext, useEffect } from "react";
import { ContextData } from "../components/someContext/Context";
import {Link} from "react-router-dom";
import Header from "../components/Header/Header";
import Modal from "../components/Modal/Modal";
import ChangeAvatar from "../components/Profile/ChangeAvatar";
import { api } from "../api";
import { Icon } from "@blueprintjs/core";
import EditProfile from "../components/Profile/EditProfile"

export const ProfilePage  = () => {
    const { user, setUserInfo, openModal, setOpenModal, preliminaryAvatar, setPreliminaryAvatar } = useContext(ContextData);
  
    const userProfile = user._id 
   
    useEffect (() => {
        api.getUserInfoById(user._id)
            .then((userData) => {
                setUserInfo(userData);
                setPreliminaryAvatar(userData.avatar);
            })
            .catch((error) =>
            console.error(error)
            );
    }, [ user._id, setUserInfo]);
      


    return (
        <div className='profilePage_container'>
             <Header/>

        <div>
            <Link to="/blogpage">
            <button className="comeBack" type="button">Назад
            </button>
            </Link>
            <div>
            <Profile/>
            </div>

            <div className="editProfile">
            {userProfile && (
          <Icon icon ="edit" className="editProfileIcon"  onClick={() => setOpenModal('avatar')}/> )}

             {openModal === 'avatar' && (
                        <Modal state={openModal === 'avatar'} setState={setOpenModal}>
                            <ChangeAvatar
                                preliminaryAvatar={preliminaryAvatar}
                                setUserInfo={setUserInfo}
                                setPreliminaryAvatar={setPreliminaryAvatar}/>
                        </Modal>)}

</div>

                <div className="editProfileUser">

                {userProfile && (
          <Icon icon ="edit" className="editProfileIconInfo"  onClick={() => setOpenModal('editProfileInfo')}/> )}
           
                {openModal === 'editProfileInfo' && (
               <Modal state={openModal === 'editProfileInfo'} setState={setOpenModal}>
                    <EditProfile
                    setUserInfo= {setUserInfo} 
                    setOpenModal= {setOpenModal} /> 
               </Modal>
                )
            }
                </div>

            <div className='profilePost'>
             




            </div>
            </div>
        </div>

    )

    }
  

export default ProfilePage;
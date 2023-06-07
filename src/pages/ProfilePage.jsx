

import "./index.css"
// import { ContextData } from "../components/someContext/Context";
import Profile from "../components/Profile/Profile";
import { useContext } from "react";
import { ContextData } from "../components/someContext/Context";
import { Link } from "react-router-dom";

export const ProfilePage  = () => {
    const { user, setUserInfo, posts, visible, setVisible, userInfo } = useContext(ContextData);
    const { name, about, email, avatar } = userInfo;
    
    // const userProfile = user._id === userId;
    const handler = () => setVisible(true);
     const closeHandler = () => {
       setVisible(false);
       console.log("closed");}


    return (
        <div className='profilePage_container'>

        <div>
            <Link to="/blogpage">
            <button className="comeBack" type="button">Назад
            </button>
            </Link>
            <div>
            <Profile/>
            </div>
            <div className='profilePost'>
             




            </div>
            </div>
        </div>

    )

    }
  



import "./profile.css"
import { useContext, useEffect } from "react";
import { ContextData } from "../someContext/Context";
import { api } from "../../api";
import { useParams } from "react-router";
import { Avatar } from "@nextui-org/react";


const Profile = () => {
    const {user, userInfo, setUserInfo } = useContext(ContextData);
    const { name, about, email, avatar, group } = userInfo;
    const { userId } = useParams();

    useEffect(() => {
        api.getUserInfoById(user._id)
        .then((userData) => {
            setUserInfo(userData);})
            .catch((error) => console.error(error));
    }, [user._id, setUserInfo])



    

    return (
      
       
<div className="profile">
    
<Avatar src={avatar} alt='avatar' css={{ size: '$48' }}  className="profileAvatar"/>


<div className="profileInfo">
    <span className="profileName">{name}</span>
    <span className="profileAbout">{about} </span>
    <span className="profileEmail">{email}</span>
    <span className="profileGroup">{group}</span>
</div>
</div>     
)

}





export default Profile;
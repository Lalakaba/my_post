
import "./profile.css"
import { useContext} from "react";
import { ContextData } from "../someContext/Context";
import { Avatar } from "@nextui-org/react";


const Profile = () => {
    const {userInfo } = useContext(ContextData);
    const { name, about, email, avatar, group } = userInfo;
    
    
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
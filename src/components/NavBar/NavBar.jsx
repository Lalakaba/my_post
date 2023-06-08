import React, { useContext } from "react"
import { Link } from "react-router-dom";
import "../NavBar/index.css"
import { Avatar } from "@nextui-org/react";
import { ContextData } from "../someContext/Context";




// const onClick = () => setIsActive(!isActive);

export const Navbar = () => {
  const { userInfo, user  } = useContext(ContextData);
  const { avatar } = userInfo;
  const userProfile = user._id 


return(
  <nav className="navbar">


      <button className="glow-on-hover" >
      <Link to="/blogpage" className="navbar__link">Blog</Link>
       </button>        
    
      
     
      <button className="glow-on-hover" >
    <Link to="/"className="navbar__link">Login</Link>
  </button>
    
   <Link to="/profile/:userId'"className="navbar__link">
   {userProfile && (
   <Avatar src={avatar} alt='name' css={{ size: '$16' }} />
   )
}
   </Link>
   </nav>
);

}


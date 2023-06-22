import React, { useContext } from "react"
import { Link } from "react-router-dom";
import "../NavBar/index.css"
import { Avatar, Tooltip } from "@nextui-org/react";
import { ContextData } from "../../someContext/Context";







export const Navbar = () => {
  
  const { user} = useContext(ContextData)



return(

  <nav className="navbar">       
        
        <Link to={`/profile/${user?._id}`}>
    
        <div className="userPanel">
       
          <Tooltip content="Перейти в профиль" color="secondary">
            <Avatar src={user?.avatar} alt="name" css={{ size: "$16" }} />
            </Tooltip>
           <div className="userName"> {user?.name}</div> 
           </div>
          </Link>
     
      {/* <button className="glow-on-hover" >
    <Link to="/"className="navbar__link">Назад</Link>
  </button> */}
    
  
   </nav>
);

}


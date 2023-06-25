import React, { useContext } from "react"
import { Link } from "react-router-dom";
import "../NavBar/index.css"
import { Avatar, Tooltip } from "@nextui-org/react";
import { ContextData } from "../../someContext/Context";
import { clickNotification } from "../../others/Notification";







export const Navbar = () => {
  
  const { user,setAuthorized} = useContext(ContextData)

  function logOut() {
    localStorage.removeItem("tokenPostik" );
    clickNotification('info', '', "Приходите еще 😉 ");
    setAuthorized(false);
    
   
  }

return(

  <nav className="navbar">  
  <div className="exit">  
         <Link className="linkBtn"to="/">
            <Tooltip content="Уже уходите? 🥺" color="error">
            <button type="submit" className="glow-on-hover"
                onClick={() => logOut()}
              > Выйти
              </button>
              </Tooltip>
              </Link>
              </div>   
        <Link className="linkUser" to={`/profile/${user?._id}`}>
    
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


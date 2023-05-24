import React from "react"
import { Link } from "react-router-dom";
import "../NavBar/index.css"




// const onClick = () => setIsActive(!isActive);

export const Navbar = () => (


  <nav className="navbar">


      <button className="glow-on-hover" >
      <Link to="/" className="navbar__link">Main</Link>
       </button>        
    
      
     
      <button className="glow-on-hover" >
    <Link to="/enter"className="navbar__link">Login</Link>
  </button>
    <button className="glow-on-hover">
   <Link to="/personalpage"className="navbar__link">Profile</Link>
 </button> 
   </nav>
);




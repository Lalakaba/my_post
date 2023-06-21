import React from "react"
import { Link } from "react-router-dom";
import "../NavBar/index.css"







export const Navbar = () => {



return(

  <nav className="navbar">       
        
      
     
      <button className="glow-on-hover" >
    <Link to="/"className="navbar__link">Назад</Link>
  </button>
    
  
   </nav>
);

}


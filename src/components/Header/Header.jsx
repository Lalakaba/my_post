import "./header.css";
import React, { useContext } from 'react';
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import { Navbar } from "../NavBar/NavBar";
import { ContextData } from "../../someContext/Context";


const Header = ({props, author,avatar}) => {
 

  const setSearchQuery = (title) => {
    props.setSearch(title);
  };

  return (
    <header className="header">
     
        <div className="headerWrapper">
      <Logo />
      <Search setSearch={setSearchQuery} />
      <Navbar author={author} avatar={avatar}
     />
      </div>
      
    </header>
  );
};


export default Header;

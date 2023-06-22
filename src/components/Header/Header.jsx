import "./header.css";
import React from 'react';
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import { Navbar } from "../NavBar/NavBar";



const Header = ({props, author,avatar}) => {
 

  const setSearchQuery = (title) => {
    props.setSearch(title);
  };

  return (
    <header className="header">
     
        <div className="headerWrapper">
      <Logo />
      <Search />
      <Navbar author={author} avatar={avatar}
     />
      </div>
      
    </header>
  );
};


export default Header;

import "./header.css";
import React from 'react';
import Logo from "../Logo/Logo";
import Search from "../Search/Search";


const Header = (props) => {
  const setSearchQuery = (title) => {
    props.setSearch(title);
  };

  return (
    <header className="header">
     
        <div className="headerWrapper">
      <Logo />
      <Search setSearch={setSearchQuery} />
      </div>
      
    </header>
  );
};


export default Header;

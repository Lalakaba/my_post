import "./header.css";
import React from 'react';
import Logo from "../Logo/Logo";
import Search from "../Search/Search";

const Header = (props) => {
  const setSearchQuery = (path) => {
    props.setSearch(path);
}


  return (
    <div className="header">
      <Logo />
      <Search setSearch={setSearchQuery}/>
      
    </div>
    
  );
};

export default Header;

import "./header.css";
import React from 'react';
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import { Navbar } from "../NavBar/NavBar";
// import { AppstoreAddOutlined,ProfileOutlined } from "@ant-design/icons";


const Header = (props) => {
  const setSearchQuery = (title) => {
    
    props.setSearch(title);
}


  return (
    <div className="header">
      <Logo />
      <Search setSearch={setSearchQuery}/>
      <Navbar/>
    </div>
    
  );
};

export default Header;

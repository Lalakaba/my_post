import "./header.css";
import React from 'react';
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import { AppstoreAddOutlined,ProfileOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Search />
      <div className="header__wrapper">
      <div className="header__icon">
       <span> <AppstoreAddOutlined className="ant-icon"/></span>
       </div>
      <div className="header__icon">
      <span> <ProfileOutlined  className="ant-icon"/></span>
        </div>
        </div>
    </div>
    
  );
};

export default Header;

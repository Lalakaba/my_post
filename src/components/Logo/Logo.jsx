import './logo.css'
import React from "react";
import logotype from "./img/logo.svg";

const Logo = () => {
  return (
    <a href="/">
      <img src={logotype} alt="logo" className="logo-pic" />
    </a>
  );
};

export default Logo;

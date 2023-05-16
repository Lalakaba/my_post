import { PlusCircleOutlined, ProfileOutlined} from "@ant-design/icons";
import Logo from "../Logo/Logo";
import "./header.css";
import Search from "../Search/Search";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Search />
      <div className="header__wrapper">
      <div className="header__icon">
       <span> <PlusCircleOutlined  className="ant-icon"/></span>
       </div>
      <div className="header__icon">
      <span> <ProfileOutlined className="ant-icon"/></span>
        </div>
        </div>
    </div>
    
  );
};

export default Header;

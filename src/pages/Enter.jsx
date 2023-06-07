import "../components/Profile/index.css";
import { useForm } from "react-hook-form";
import {emailValidate,  passValidate} from "../components/Profile/Validate";
import { useNavigate } from "react-router";
import { api } from "../api";
import { useContext } from "react";
import { ContextData } from "../components/someContext/Context";
import { EyeInvisibleOutlined } from "@ant-design/icons";
import { EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const Enter = () => {
  const { visible, setVisible, setAuthorized } = useContext(ContextData);
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });

  const sendInfo = (data) => {
    api.authorizedUser(data).then((res) => {
      if (!!res.err) {
        alert(`${res.message}`);
        reset();
      } else {
        alert(`Очень рады видеть Вас снова, ${res.data.name}`);
        setAuthorized(true);
        localStorage.setItem("token", data.token)
        navigate("/profilepage");
        
      }
    });
  };




  function logOut() {
    localStorage.removeItem("token" );
    setAuthorized(false);
    alert("Уже покидаете нас?")
    navigate("/");
  }

  
    return (
      <div className="enter__container">
        <div className="wrapper">
          <form className="auth-form" onSubmit={handleSubmit(sendInfo)}>
            <h3>Вход</h3>
            <div className="text-center">
              Нет регистрации?

              <Link to ="/registration"> <button className="link-primary" type= "button">
                Регистрация
              </button>
              </Link>
            </div>

            <input
              className={errors.email ? "postInput__input error" : "postInput__input" }
              type="email"
              {...register("email", emailValidate)}
              placeholder="Email"
            />
            {errors.email && 
              <p className="input__error">{errors.email.message}</p>
            }
    <div className="postInput__wrapper__input">
            <input className={errors.password ? "postInput__input error" : "postInput__input"}
              type={visible ? "text" : "password"}
              {...register("password", passValidate)}
              placeholder="Пароль"
            />
            <span className="inputEye" onClick={() => setVisible((v) => !v)}>
              {visible ?  <EyeOutlined /> : <EyeInvisibleOutlined />}
            </span>
           </div>
           {errors.password && 
              <p className="input__error">{errors.password.message}</p>
            }
            <Link className="recover__pass" to="/ressetpass">
              Восстановить пароль
            </Link>

            <div className="modal-btn">
              <button type="submit" className="btn-log">
                Войти
              </button>
              <button type="submit" className="btn-log"
                onClick={() => logOut()}
              >Выйти
              </button>
            </div>
          </form>
        </div>
        <h1 className="title"> Ты принес печеньки?</h1>
      </div>
    );
  }

  // регистрация
 
      
          

                

      
          
      




 
            
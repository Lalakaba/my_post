import "../components/Profile/index.css";
import { useForm } from "react-hook-form";
import {emailValidate, nameValidate, passValidate} from "../components/Profile/Validate";
import { useNavigate } from "react-router";
import { api } from "../components/api/api";
import { useContext } from "react";
import { ContextData } from "../components/someContext/Context";
import { EyeInvisibleOutlined } from "@ant-design/icons";
import { EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";







export const Registration = () => {
    const { visible, setVisible } = useContext(ContextData);
    const navigate = useNavigate();
    
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm({ mode: "onSubmit" });

    const sendData = (data) => {
      api.registratedUser(data)
      .then((res) => {
        if (!!res.err) {
          alert(`${res.message}`);
        } else {
          alert(`Знали, что Вы будете с нами, ${res.data.name}`);
          navigate("/");
          reset();
        }
      })
      .catch((error) => alert(`Упс, что-то пошло не так${error}`));
  };
    return (
      <div className="enter__container">
        <div class="text-container">
            <h1>Lalakaba<br/>Project </h1>
               </div>
        <div className="wrapper">
          <form className="auth-form" onSubmit={handleSubmit(sendData)}>
            <h3>Регистрация</h3>

            <div className="text-center">
              Зарегистрирован?
              <Link to="/"><button className="link-primary" type= "button">
                Вход
              </button>
              </Link>
            </div>
            <input
              className={errors.name ? "postInput__input error" : "postInput__input"}
              type="text"
              {...register("name", nameValidate)}
              placeholder="Имя"
            />
            {errors.name && 
            <p className="input__error">{errors.name.message}</p>}
  
            <input
              className={errors.email ? "postInput__input error" : "postInput__input"}
              type="email"
              {...register("email", emailValidate)}
             
              placeholder="Email"
            />
            {errors.email && 
              <p className="input__error">{errors.email.message}</p>
            }
  <div className="postInput__wrapper__input">
            <input
              className={errors.password ? "postInput__input error" : "postInput__input"}
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
            <Link className="recover__pass" to = '/ressetpass'>
                Восстановить пароль
                </Link>
          
  
            <div className="modal-btn">
              <button type="submit" className="btn-log">
                Зарегистрироваться
              </button>
            </div>
          </form>
        </div>
  
        <Footer/>
        
      </div>
    );
  };
  

  
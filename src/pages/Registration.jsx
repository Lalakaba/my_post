import "../components/Profile/index.css";
import { useForm } from "react-hook-form";
import {emailValidate, nameValidate, passValidate} from "../components/Profile/Validate";
import { useNavigate } from "react-router";
import { api } from "../components/api/api";
import { useContext } from "react";
import { ContextData } from "../someContext/Context";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { clickNotification } from "../others/Notification";









export const Registration = () => {
    const { visible, setVisible } = useContext(ContextData);
    const navigate = useNavigate();
    
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm({ mode: "onSubmit" });

    const sendData = async (data) => {
      try {
        await api.registratedUser(data);
        clickNotification(
          "success", "Ураааа!",`Знали, что Вы будете с нами, ${data.name}`);
        navigate("/");
      } catch (error) {
        clickNotification( "error","Упссс","Такой пользователь уже существует");
        reset();
      }
    };
  
  
    return (
      <div className="enter__container">
        <div className="text-container">
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
           {visible ?  <VisibilityIcon /> : <VisibilityOffIcon/>}
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
  

  
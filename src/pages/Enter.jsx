import "../components/Profile/index.css";
import { useForm } from "react-hook-form";
import {emailValidate,  passValidate} from "../components/Profile/Validate";
import { useNavigate } from "react-router";
import { api } from "../components/api/api";
import { useContext} from "react";
import { ContextData } from "../someContext/Context";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from "react-router-dom";
import {Footer} from "../components/Footer/Footer";
import { clickNotification } from "../others/Notification";



export const Enter = () => {
  const { visible, setVisible, setAuthorized} = useContext(ContextData);
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onSubmit" ,
  defaultValues: {
    email: "shenonmetew23@gmail.com",
    password: "Obscure23"
  },
});

  
  const sendInfo = async (data) => {
    try {
      const res = await api.authorizedUser(data);
      localStorage.setItem(
        "tokenPostik",
        JSON.stringify({ token: res.token, group: res.data.group })
      );
      setAuthorized(true);
      navigate("/blogpage");
      clickNotification(
        "success",
        "Ураааа!",
        `Очень рады видеть Вас снова, ${res.data.name} 🤩`
      );
    } catch (error) {
      clickNotification("error", "Ужассс", "не тот логин или пароль 😨");
      reset();
    }
  };

 


  

  
    return (

      <div className="enter__container">



         <div className="text-container">
            <h1>Lalakaba<br/>Project </h1>
               </div>
        
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
              {visible ?  <VisibilityIcon fontSize="small" color="primary" /> : <VisibilityOffIcon fontSize="small" color="primary" />}
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
             
             
            </div>
          </form>
        </div>
       <div>
       <Footer/>
       </div>
      </div>

    );
  }


 
      
          

                

      
          
      




 
            
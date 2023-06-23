import { useContext} from "react";
import { passValidate,tokenValidate } from "./Validate";
import "./index.css"
import { useForm } from "react-hook-form";
import { api } from "../api/api";
import { Link, useNavigate } from "react-router-dom";
import { ContextData } from "../../someContext/Context";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Footer } from "../Footer/Footer";
import { clickNotification } from "../../others/Notification";


export const ChangePass = () => {
  const { visible, setVisible} = useContext(ContextData)
    const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      formState: { errors },
  } = useForm({ mode: 'onSubmit' });

      
  

 

 
  const changePass = async (data) => {
    if (data.token) {
      try {
        const res = await api.changePassword(data)
        clickNotification ('success', 'Ураааа!'`У Вас получилось, ${data.name}`);
        navigate("/personalpage");
      } catch (error) {
        clickNotification('error', 'Ошибка', `${error.message}`);
}}
      };
    


return (
  <div className="enter__container">
    <div className="text-container">
            <h1>Lalakaba<br/>Project </h1>
               </div>
    <div className="wrapper">
      <form className="auth-form" onSubmit={handleSubmit(changePass)}>
        <h3>Восстановление пароля</h3>

        <input
          className={errors.token ? "postInput__input error" : "postInput__input"}
          type="text"
          {...register("token", tokenValidate)}
          placeholder="token"
        />
        {errors.token && (
          <span className="input__error">{errors.token.message}</span>
        )}
<div className="postInput__wrapper__input">
        <input
          className={errors.password ? "postInput__input error" : "postInput__input"}
          type={visible ? "text" : "password"}
          {...register("password", passValidate)}
          placeholder="password"
        />
        <span className="inputEye" onClick={() => setVisible((v) => !v)}>
        {visible ?  <VisibilityIcon /> : <VisibilityOffIcon/>}
        </span>
</div>
      {errors?.password && (
          <p className="input__error">{errors.password.message}</p>
        )}
        <div className="modal-btn">
          <button className="btn-log" type="submit" >
            Восстановить
          </button>
          </div>
          <div className="modal-btn">
            <Link to="/">
              <button className="btn-log" type="button">
                Назад
              </button>
            </Link>
          
        </div>
      </form>
    </div>
   <Footer/>
  </div>
);

}
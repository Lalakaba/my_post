import { useContext} from "react";
import { passValidate,tokenValidate } from "./Validate";
import "./index.css"
import { useForm } from "react-hook-form";
import { api } from "../../api";
import { Link, useNavigate } from "react-router-dom";
import { ContextData } from "../someContext/Context";
import { EyeInvisibleOutlined } from "@ant-design/icons";
import { EyeOutlined  } from "@ant-design/icons";
import { Footer } from "../Footer/Footer";


export const ChangePass = () => {
  const { visible, setVisible} = useContext(ContextData)
    const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      formState: { errors },
  } = useForm({ mode: 'onSubmit' });

      
  

 

 
      const changePass = (data) => {
        api.changePassword(data).then((res) => {
          if (!!res.err) {
            alert(`${res.message}`);
          } else {
            alert(`У Вас получилось, ${res.data.name}`);
            navigate("/personalpage");
          }
        });
      };




return (
  <div className="enter__container">
    <div class="text-container">
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
        {visible ?  <EyeOutlined /> : <EyeInvisibleOutlined />}
        </span>
</div>
      {errors?.password && (
          <p className="input__error">{errors.password.message}</p>
        )}
        <div className="modal-btn">
          <button className="btn-log" type="submit" >
            Восстановить
          </button>

          <div className="btn-log">
            <Link to="/">
              <button className="btn-log" type="button">
                Назад
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
   <Footer/>
  </div>
);

}
import { useForm } from "react-hook-form";
import "./index.css"
import { Link } from "react-router-dom";
import { emailValidate } from "./Validate";
import { api } from "../api/api";
import { Footer } from "../Footer/Footer";
import { clickNotification } from "../../others/Notification";
import { Tooltip } from "@nextui-org/react";



export const RessetPass = () => {
 
    
      const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onSubmit' });




    const sendPass = (data) => {
        api.resetPassword(data)
        .then((res) => {
            if (!!res.err) {
                alert('Email не существует');
            } else {
              clickNotification('success', 'Ураа', 'Письмо отправлено');
                reset();
              }
          })
          reset();
      };
      


return(
<div className="enter__container">
<div className="text-container">
            <h1>Lalakaba<br/>Project </h1>
               </div>
            <div className="wrapper">
            <form className="auth-form" onSubmit={handleSubmit(sendPass)}>
               <h3 >Восстановление пароля</h3>
               <span className='inputText'>
                Для получения пароля необходимо ввести email,
                 указанный при регистрации
                </span>

                <input className={errors.email ? 'postInput__input error' : 'postInput__input'} 
                {...register('email', emailValidate)}
                  type="email"  
                  placeholder="Email"
                  /> 
                {errors.email && (
                <p className='input__error'>{errors?.email?.message}</p> 
              )}
                      
                      <div className="modal-btn">
                      <Tooltip content="Отправить письмо" color="secondary">
                        <button className="btn-log" type="submit" >
                          Отправить
                        </button>
                        </Tooltip>
                        </div>
                        <div className="modal-btn">
                     
                          <Link  className="btn-log"to="/changePass">
                            <button className="btn-log" type="button">
                              Вперед
                            </button>
                          </Link>
                    
                         </div>
                      </form>
                </div>
               <Footer/>
                </div>



)
}

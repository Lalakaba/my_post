

import "../components/Profile/index.css"
import { useForm } from "react-hook-form";
import { Validate, email_reg, password_reg } from "../components/Profile/Validate";
import { useNavigate } from "react-router";
// import { toast } from "react-hot-toast";
import { api } from "../api";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { ResetPass } from "../components/Profile/ResetPass";






export const Enter = ({isRequired = true, setResponse }) => {
  const navigate = useNavigate();
  const [authMode, setAuthMode] = useState("Вход")
  const {register,
    handleSubmit,
    formState: { errors},
  } = useForm({ mode: 'onChange' });
 
  const sendInfo = async (data) => {
    try {
      const res = await api.AuthorizedUser(data);
      setResponse(res);
      navigate('/')
      localStorage.setItem('token', res.token);

    } catch (error) {
      toast.error('Не правильный логин или пароль')
    }
  };


  const sendData = async (data) => {
    try {
      const result = await api.RegistratedUser({ ...data });
      console.log(result);
    } catch (error) {
      toast.error('Что то пошло не так')
    }

  };

  const changeAuthMode = () => {
    setAuthMode(authMode === "Вход" ? "Регистрация" : "Вход")
  }
   
  const logOut = () => {
		
		localStorage.removeItem('token');;
		navigate("/");
	}


  if (authMode === "Вход") {

 return (



  <div className="enter__container">
            
         <div className="wrapper">
        <form className="modal-form" onSubmit={handleSubmit(sendInfo)}>
                     <h3>Вход</h3>
          <div className="text-center">
              Нет регистрации?
              <span className="link-primary" onClick={changeAuthMode}>
                Регистрация
              </span>
              </div>
              <input  {...register('email', {
               required: {
               value: isRequired,
     
                        },
              pattern: {
              value: email_reg,
              message: Validate.email,
                       },
           })}
                type="email"
                placeholder="Email"/>
                {errors.email && (
               <p className='input__error'>{errors?.email?.message}</p>
                 )}

             <input {...register('password', {
             required: {
             value: true,
     
                      },
             pattern: {
             value: password_reg,
             message: Validate.password,
                      }
             })}
             type="password"
              placeholder="Пароль"/>
             {errors.password && (
            <p className='input__error'>{errors?.password?.message}</p>
          )}

             <p className='recover__pass' onClick={() => navigate('/resetPass')}>Восстановить пароль</p>

       

            <div className="modal-btn">
              <button type="submit"  className="btn-log" >Войти 
              </button>
              <button type="button"  className="btn-log" onClick={logOut}>Выйти 
              </button>
              
              
          </div>
          </form>
          </div> 
          <h1 className="title"> Ты принес печеньки?</h1>
          </div>
         
  
       
    );
    }



            
    return (
              <div className="enter__container">
               
               
               
<div className="wrapper">
              <form  className="modal-form" onSubmit={handleSubmit(sendData)}>
                           <h3>Регистрация</h3>
              <div className="text-center">
            Зарегистрирован?
            <span className="link-primary" onClick={changeAuthMode}>
              Вход
            </span>
          </div>
                           
              <input  {...register('email', {
            required: {
              value: true,
             
            },
            pattern: {
              value: email_reg,
              message: Validate.email,
            },
          })} type="email"  
                  placeholder="Электронный адрес"/> 
    
                   {errors.email && (
                <p className='input__error'>{errors?.email?.message}</p>
              )}
    
            <input {...register('password', {
            required: {
              value: true,
             
            },
            pattern: {
              value: password_reg,
              message: Validate.password,
            },
          })} 
                 type="password"
                  placeholder="Пароль"/>
    
                <p className='input__error'>{errors?.password?.message}</p>
                 <div>
                 <p className='recover__pass' onClick={() => navigate('/resetPass')}>
              Восстановить пароль
            </p>
    
            </div> 
    
                <div className="modal-btn">
                <button type='submit'className="btn-log" >Зарегистрироваться
                  </button>
                </div>
              </form>
          </div>
            
          <h1 className="title">А хочешь?</h1>
          <ResetPass/>   
          </div>
        );
} 
        
      

      
          

                

      
          
      




 
            
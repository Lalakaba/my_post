import { useState } from "react";
import { Validate, email_reg, password_reg } from "./Validate";
import "./index.css"
import { useForm } from "react-hook-form";
import { api } from "../../api";
import { Link, useNavigate } from "react-router-dom";
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';
import VisibilityOffSharpIcon from '@mui/icons-material/VisibilityOffSharp';


export const ResetPass = ({ setAuthentificated }) => {
  const [haveToken, setHaveToken] = useState(false);
    const [type, setType] = useState(true);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({ mode: 'onBlur' })

      
   

    

 const sendInfo = async (formData) => {
        if (haveToken) {
          
            const {data,token} = await api.ChangePassword( 
              {password:formData.password,},
              formData.token,
              );
              if(token) {
            localStorage.setItem('token', token);
            localStorage.setItem('userData', JSON.stringify(data))
            setAuthentificated(true)
            navigate('/')
          }
        } else {
          await api.ResetPassword(formData);
          setHaveToken(true);
          
        }
      };




return(


    <div className="enter__container">
            
    <div className="wrapper">
    <form className="modal-form" onSubmit={handleSubmit(sendInfo)}>

        <h3 >Восстановление пароля</h3>
           <input {...register('email', {
                  required: {
                    value: true,
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
               
             
     

{haveToken ? (
<>
                <input type="text"
                {...register('token', {
                  required: {
                    value: !!haveToken,
                  }, 
                })}
                placeholder="token"/>

              <input type={!type ? 'password' : 'text'}
                {...register('password', {
                  required: {
                    value: true,
                    message: Validate,
                  },
                 pattern: {
                    value: password_reg,
                    message: Validate.password,
                 }
                  })}
                placeholder="password"/>
                
              <span onClick={() => setType(!type)}className="input__icon">
            {type ? <VisibilitySharpIcon /> : <VisibilityOffSharpIcon />}
              </span>

              {errors?.password && (
                 <p className='input__error'>{errors?.password?.message}</p>
                )}
            
           </>
           ) : (
             <></>
           )}
              <div className="modal-btn">
                <button className="btn-log" type="submit">
                  Восстановить пароль
                </button>
                <div className="back__transition">
                  <Link to="/">
                    <button className="btn-log" type="submit">
                      Вход
                    </button>
                  </Link>
                 </div>
                 </div>
              </form>
        </div>
        <h1 className="title">Упс...Проблемы?</h1>
        </div>



       
)

}
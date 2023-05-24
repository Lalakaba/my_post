import { useState } from "react"
import "../Profile/index.css"



export const ModalLog =()=>{

    const [isReg, setIsReg] = useState(false);
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [psw, setPsw] = useState("")
   const [psw2, setPsw2] = useState("")


    const changeForm = (e) => {
      e.preventDefault();
      setIsReg(!isReg);
      clearForm()
    };
    const clearForm= () => {
        setName('')
        setEmail('')
        setPsw('')
        setPsw2('')
    }
const handleForm = (e) =>{
    e.preventDefault()
    const body ={
        email: email,
        password:psw
    }
    if (isReg) {
        body.name= name
        body.group = 'group-12'
    }
    console.log(body)
}

    return (
      <div className="modal-wrapper">
        <div className="modal__log">
          <button className="modal__close">Close</button>

          <h3>{isReg ? "Регистрация" : "Вход"}</h3>
          <form onSubmit={handleForm}>
            {isReg &&  <input type="text" placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}/>
                }

            {isReg &&  <input type="email" placeholder="Электронный адрес"
                value={email}
                onChange={(e) =>setEmail(e.target.value)}/>
            }

            {isReg && 
              <input type="password"
                placeholder="пароль"
                value={psw}
                onChange={(e) =>setPsw(e.target.value)}/>
            }

            {isReg && 
              <input
                type="password"
                placeholder="Еще раз"
                value={psw2}
                onChange={(e) =>setPsw2(e.target.value)}/>
            }

            <div className="modal-btn">
              <button className="btn-log" type="submit" disabled={isReg && (!psw || psw !==psw2)}>
               {isReg ? "Зарегистрироваться" : "Войти"}
              </button>

              <a className="modal-link" onClick={changeForm}>
                {isReg ? "Войти" : "Зарегистрироваться"}
              </a>
            </div>
          </form>
        </div>
      </div>
    );
}
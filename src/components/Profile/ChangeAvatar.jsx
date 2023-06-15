
import { api } from "../api/api";
import { avatarValidate } from "./Validate";
import "./index.css"
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ContextData } from "../someContext/Context";
import { Avatar } from "@nextui-org/react";



const ChangeAvatar = ({preliminaryAvatar, setUserInfo,  setPreliminaryAvatar }) => {
    const {setOpenModal} = useContext(ContextData)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm ({ mode: 'onChange' });

    const sendAvatar = (userAvatar) => {
        return api.editAvatar(userAvatar)
            .then((userInfo) => {
                setOpenModal('');
                reset();
                setUserInfo({ ...userInfo });
            })
            .catch((error) => console.log('Провал',error));
    };



return (
<div>
<form className='form' onSubmit={handleSubmit(sendAvatar)}>
<input type='text'
{...register('avatar', avatarValidate)}
className={errors.avatar ? "formInput error" : "formInput__input"}
                placeholder='Аватар'
                onChange={(e) => setPreliminaryAvatar(e.target.value)}/>
 {errors.avatar && 
              <p className="input__error">{errors.avatar.message}</p>}
<div className='preliminaryAvatar'>
    
<Avatar src={preliminaryAvatar} alt='avatar' css={{ size: '$48' }}  className="profileAvatar"/>
</div>
 <div className="saveBtn">
 <button className="save" type="submit"> Cохранить </button>

 </div>
            
</form>
</div>

)


}

export default ChangeAvatar;
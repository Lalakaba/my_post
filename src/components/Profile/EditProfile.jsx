import { useForm } from "react-hook-form";
import { aboutValidate, nameValidate } from "./Validate";
import "./index.css"
import { api } from "../api/api";





const EditProfile = ({ setUserInfo, setOpenModal }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        
    });

    const sendProfile = (data) => {
        return api.editProfileInfo(data)
            .then((userData) => {
                setUserInfo(userData);
                setOpenModal('');
            })
            .catch((error) => console.log(error));
    };

return(
<div>
<form className='form' onSubmit={handleSubmit(sendProfile)}>
    <div className="inform">
        <input className={errors.name ? "formInput error" : "formInput__input"}
              type="text"
              {...register("name", nameValidate)}
              placeholder="Имя"
            />
            {errors.name && 
            <p className="input__error">{errors.name.message}</p>}
</div>
<div className="inform">
         <input
              className={errors.about ? "formInput error" : "formInput__input"}
              type="text"
              {...register("about", aboutValidate)}
              placeholder="Обо мне"
            />
            {errors.about && 
            <p className="input__error">{errors.about.message}</p>}
            </div>

<div className="saveBtn">
 <button className="save" type="submit"> Cохранить </button>
</div>
</form>

</div>

)





}


export default EditProfile;
import { useContext } from "react";
import "../index.css"
import { ContextData } from "../../../someContext/Context";
import { imageValidate, textValidate, titleValidate } from "../Validate";
import { api } from "../../api/api";
import { useForm } from "react-hook-form";
import { hashtag } from "../../../others/something";



const AddPost =({ setOpenModal }) => {
    const { setPosts,postImageView, setPostImageView } = useContext(ContextData);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm ({ mode: 'onChange' });

    

    const sendPost = async (post) => {
        return await api.getAddPost({ ...post, tags: hashtag(post.tags) })
            .then((post) => {
                setPosts((state) => [post, ...state]);
                setOpenModal('');
                reset();
            })
            .catch((error) => console.log(error));
    };





return (
  <div>
    <form className="addPostForm" onSubmit={handleSubmit(sendPost)}>
    <input
                type='text'
                {...register('title', titleValidate)}
                className={errors.title ? "formInput error" : "formInput__input"}
                placeholder='Заголовок...'
            />
            {errors.title && 
               <p className="input__error">{errors.title.message}</p>}
      <input
        type="text"
       {...register("image", imageValidate)}
        className={errors.image ? "formInput error" : "formInput__input"}
        placeholder="Ссылка на изображение..."
        onChange={(e) => setPostImageView(e.target.value)}
      />
      {errors.image && 
        <p className="input__error">{errors.image.message}</p>
      }
      <div className="formImgBox">
        <img  src={postImageView}  alt="view" className="formInputImg"
        onError={(e) =>
            (e.currentTarget.src =
                'https://velo1000.ru/local/templates/velo1000/images/no-img.png')
        } />
          </div>

        <input type="text"
          {...register("tags")}
          className="formInput__input"
          placeholder="# , # , # ..."
        />
<div className="inputBox">
        <textarea
          type="text"
          {...register("text", textValidate)}
          className= {errors.text ? "someText error" : "someText"}
          placeholder="Напишите текст... "
          rows={3}
        />
</div>
        <div className="saveBtn">
          <button className="save" type="submit">
            Cохранить
          </button>
        </div>
      
    </form>
  </div>
);

}

export default AddPost;
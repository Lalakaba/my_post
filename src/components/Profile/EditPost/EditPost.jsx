import { useForm } from "react-hook-form";
import { api } from "../../api/api";
import "../index.css"
import { hashtag } from "../../../others/something";
import { useContext } from "react";
import { ContextData } from "../../../someContext/Context";
import { imageValidate, textValidate, titleValidate } from "../Validate";




const EditPost = ({ setOpenModal, post }) => {
  const { postImageView, setPostImageView, updatePostState } =
    useContext(ContextData);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: post.title, 
      text: post.text,
      image: post.image,
      tags: post.tags.join(","),
    },
  });

  const sendEditPost = (newPostInfo) => {
    api.editPost(post._id, { ...newPostInfo, tags: hashtag(newPostInfo.tags) })
      .then((res) => {
        updatePostState(res);
        setOpenModal("");
      })
     .catch((error) => alert(`Поле "image" должно быть валидным url-адресом`));
    }

  return (
    <div>
      <form className="editPostForm" onSubmit={handleSubmit(sendEditPost)}>
        <input
          type="text"
          {...register("title", titleValidate)}
          className={errors.title ? "formInput error" : "formInput__input"}
          placeholder="Заголовок..."
        />
        {errors.image && <p className="input__error">{errors.title.message}</p>}
        <input
          type="text"
          {...register("image", imageValidate)}
          className={errors.image ? "formInput error" : "formInput__input"}
          placeholder="Ссылка на изображение..."
          onChange={(e) => setPostImageView(e.target.value)}
        />
        {errors.image && <p className="input__error">{errors.image.message}</p>}
        <div className="formImgBox">
          <img
            src={postImageView}
            alt="view"
            className="formInputImg"
            onError={(e) =>
              (e.currentTarget.src =
                "https://velo1000.ru/local/templates/velo1000/images/no-img.png")
            }
          />
        </div>

        <input
          type="text"
          {...register("tags")}
          className="formInput__input"
          placeholder="# , # , # ..."
        />
        <div className="inputBox">
          <textarea
            type="text"
            {...register("text", textValidate)}
            className={errors.text ? "someText error" : "someText"}
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
};

export default EditPost;
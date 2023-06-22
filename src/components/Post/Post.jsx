import "./post.css";
import React, {  useContext } from "react";
import { ReactComponent as Like } from "./img/like.svg"
import { ContextData } from "../../someContext/Context";
import { ReactComponent as Chat } from "./img/chat.svg"
import Comment from "../Comments/Comment";
import PostText from "../PostText/PostText";
import { api } from "../api/api";
import { Avatar, Tooltip } from "@nextui-org/react";
import { DeleteDocumentIcon } from "./DeleteDocumentIcon"
import { EditDocumentIcon } from "./EditDocumentIcon"
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Modal from "../Modal/Modal";
import EditPost from "../Profile/EditPost/EditPost";
import Card from "./Card/Card";



 const Post = ({image, text, tags, likes, created_at, author, name, _id, comments,post ,postId,
...rest
}) => {
 
  const { user, handleLike, updatePostState, setPostComment, openModal,setOpenModal, 
    setPosts,setPostImageView, isCommentsShown, setisCommentsShown } = useContext(ContextData);
  const { reset, register, handleSubmit } = useForm({});
  
 
 
   
  const isLiked = likes?.includes(user._id);
  const handleClick = () => {
    handleLike(post, isLiked);
  };

 //рендер комментов, который проверит если у нас комм >2 
  const renderComments = () => {
    if (comments.length > 2 && !isCommentsShown) {
      const commentsCopy = [...comments];
      const commentForRender = commentsCopy.splice(comments.length - 2, 2);


      return (
        <>
          <span className='postCommentTitle'
            onClick={() => setisCommentsShown(true)}
          >{`Показать еще комментарии ${comments.length - commentForRender.length}`}</span>
          {commentForRender.map((comment) => (
            <Comment {...comment} key={comment._id} postId={_id}  />
          ))}
        </>
      );
    }
       return comments.map((comment) => (
        <Comment {...comment} key={comment._id} postId={_id}/>
    ));
  };

 

//добавление комментов
  const addComment = async (data) => {
   return  (await 
      api.getAddCommentsPosts(_id, data)
      .then((data) => setPostComment(data.comments.reverse()))
      .then(reset())
      .then((data) => updatePostState(data))
      .catch((error) => console.log(error))
   )
   }

  //удаление поста
  const deletePost = async (_id) => {
    if (window.confirm('Вы действительно хотите удалить пост ?'))
      try {
        const result = await api.deletePostById(_id);
        setPosts(s => s.filter(e => e._id !== result._id));
      } catch (error) {
      }
  }
  




  return (
    <div className="post__card">
      {openModal === _id && (
        <Modal state={openModal === _id} setState={setOpenModal}>
          <Card
            image={image}
            created_at={created_at}
            likes={likes}
            comments={comments}
            _id={_id}
          />
        </Modal>
      )}
      <div className="post__header">
        <div className="post__userLogo">
          <Link to={`/profile/${author._id}`}>
          <Tooltip content="Перейти в профиль" color="secondary">
            <Avatar src={author.avatar} alt="name" css={{ size: "$16" }} />
            </Tooltip>
          </Link>
        </div>
        <div className="post__userDate">
          <div className="post__userName"> {author.name}</div>
        </div>

        {user._id === author._id && (
          <Tooltip content="Редактировать" color="secondary">
          <button className="editPostBtn" type="submit">
            <EditDocumentIcon
              size={20}
              fill="currentColor"
              onClick={() => {
                setOpenModal(`editPost${_id}`);
                setPostImageView(image);
              }}
            />
          </button>
          </Tooltip>
        )}
        {openModal === `editPost${_id}` && (
          <Modal state={openModal === `editPost${_id}`} setState={setOpenModal}>
            <EditPost setOpenModal={setOpenModal} post={post} />
          </Modal>
        )}

        {user._id === author._id && (
          <Tooltip content="Удалить" color="error">
          <button className="deletPostBtn"
            type="submit"
            onClick={() => deletePost(_id)}
          >
            <DeleteDocumentIcon size={20} fill="currentColor" />
          </button>
          </Tooltip>
        )}
      </div>

      <div className="post__image">
     <>
        <img src={image}
          alt="img"
          className="card__image"
          onClick={() => {
            setOpenModal(_id);
          }}
        />
      </>
      </div>

      <div className="post__icon">
        <button
          onClick={handleClick}
          className={`post__like ${isLiked ? "post__like_active" : ""}`}
        >
          <Like />
        </button>
        <button className="post__chat">
          <Chat />
          <span className="chat_count">
            {!!comments.length && comments.length}
          </span>
        </button>
      </div>
      <div className="like_count">{`Оценили ${likes.length} человек`}</div>
      <div>
        {tags.map((e) => (
          <span className={`tag tag_type_ ${e}`} key={e}>
            {e}
          </span>
        ))}
      </div>
      <div className="post__text">
        <PostText>{text}</PostText>
      </div>

      {renderComments()}

      <div className="footer__form">
        <form className="post__comments" onSubmit={handleSubmit(addComment)}>
          <textarea
            type="text"
            {...register("text")}
            placeholder="Напишите комментарий..."
            className="textComments"
          />

          <button className="commentsSend">Отправить</button>
        </form>
      </div>

      <div className="postTime">
        {new Date(created_at).toLocaleDateString("ru-RU", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })}
      </div>
    </div>
  );
};
export default Post;


import "./post.css";
import React, { useContext, useState } from "react";
import { ReactComponent as Like } from "./img/like.svg"
import { ContextData } from "../someContext/Context";
import { ReactComponent as Chat } from "./img/chat.svg"
import Comment from "../Comments/Comment";
import PostText from "../PostText/PostText";

import { api } from "../../api";
import { Avatar, Dropdown, Modal } from "@nextui-org/react";
import { DeleteDocumentIcon } from "./DeleteDocumentIcon"
import { EditDocumentIcon } from "./EditDocumentIcon"
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


 const Post = ({
  image,
  comments,
  author,
  updated_at,
  post,
  text,
  likes,
  userId,
  tags,
  _id,
  postId,
  created_at,
  ...args
}) => {
 
  
  const { user, handleLike, updatePostState, setPostComment, visible, setVisible } = useContext(ContextData);
  const { reset, register, handleSubmit } = useForm({});
  const [isCommentsShown, setisCommentsShown] = useState(false);

  const isLiked = likes.some((e) => e === user._id);
  const handleClick = () => {
    handleLike(post, isLiked);
  };

 
  const renderComments = (post) => {
    if (comments?.length > 2 && !isCommentsShown) {
      const commentsCopy = [...comments];
      const commentForRender = commentsCopy.splice(comments.length - 2, 2);
      return (
        <>
          <span
            className='postCommentTitle'
            onClick={() => setisCommentsShown(true)}
          >{`Показать еще комментарии ${
            comments.length - commentForRender.length
          }`}</span>
          {commentForRender.map((comment,post) => (
            <Comment {...comment} key={comment._id} postId={post._id} />
          ))}
        </>
      );
    }
       return comments.map((comment) => (
      <Comment {...comment} key={comment._id} postId={_id} />
    ));
  };

 


  const addComment = async (data) => {
   return  (await 
      api.getAddCommentsPosts(_id, data)
      .then((data) => setPostComment(data.comments.reverse()))
      .then(reset())
      .then((data) => updatePostState(data))
      .catch((error) => console.log(error))
   )
  }

  

  // const addComment = (data) => {
  //   api
  //     .getAddCommentsPosts(data, _id)
  //     .then((data) => setPostComment(data.comments.reverse()))
  //     .then(reset())
         
  //     .catch((error) => console.log(error));
  // };
     
  

  const deletePost = async (id) => {
    // return await api.deletePostById(id)
    //   .then(() => setPosts((state) => state.filter((post) => post._id !== id)))
    //   .catch((error) => console.log(error));
  };

//модалка
  // const handler = () => setVisible(true);
  // const closeHandler = () => {
  //   setVisible(false);
  //   console.log("closed");
  // };



  return (
    
    <div className='post__card'>
      <div className='post__header'>
      
        <div className='post__userLogo'>
          <Link to={`/profilepage/${author._id}`}>
            <Avatar src={author.avatar} alt='name' css={{ size: '$16' }} />
          </Link>
        </div>
        <div className='post__userDate'>
          <div className='post__userName'> {author.name}</div>
        </div>

        <Dropdown>
          <Dropdown.Button color='default' light>
            . . .
          </Dropdown.Button>
          <Dropdown.Menu color='default' variant='light' aria-label='Actions'>
            <Dropdown.Item
              key='edit'
              icon={<EditDocumentIcon size={20} fill='currentColor' />}
            >
              Редактировать
            </Dropdown.Item>
            {user._id === author._id && (
              <Dropdown.Item
                key='delete'
                icon={<DeleteDocumentIcon size={20} fill='currentColor' />}
                onClick={() => deletePost(post._id)}
              >
                Удалить
              </Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
      
        <img src={image} alt='avatar' className='card__image' />
      </div>

      <div className='post__icon'>
        <button
          onClick={handleClick}
          className={`post__like ${isLiked ? 'post__like_active' : ''}`} 
        >
          <Like />
        </button>
        <button className='post__chat'>
          {' '}
          <Chat />
          <span className='chat_count'>
            {!!comments.length && comments.length}
          </span>
        </button>
      </div>
      <div className='like_count'>{`Оценили ${likes.length} человек`}</div>
      <div>
        {tags.map((e) => (
          <span className={`tag tag_type_ ${e}`} key={e}>
            {e}
          </span>
        ))}
      </div>
      <div className='post__text'>
        <PostText>{text}</PostText>
      </div>

      <div className='comment'>{renderComments()}</div>

      <div className="footer__form">
       <form className='post__comments'onSubmit={handleSubmit(addComment)}>
        
         <textarea
          type="text"
            {...register('text')}
            placeholder="Напишите комментарий..."
              className='textarea__comments'
                />
                         
        <button className="commentsSend">
          Отправить
        </button>
        </form> 
      </div>


      <div className='postTime'>
        {new Date(created_at).toLocaleDateString('ru-RU', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        })}
      </div>
      
    </div>
    
  );
};
export default Post;




{/* <form className='form__comments'>
  <textarea
  type="text"
                        {...register('text')}
                        labelPlaceholder=""
                        className='textarea__comments'
                        minRows={2}/>
                         </form> */}
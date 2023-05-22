import "./post.css";
import React, { useContext } from "react";
import  {Avatar, Badge}  from "@mui/material";
import { PostContext } from "../../someContext/PostContext";
import { UserContext } from "../../someContext/UserCtx";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

export const Post = ({
  avatar,
  post,
  image,
  comments,
  author,
  name,
  _id,
  text,
  likes,
  ...args
}) => {
 
  const user = useContext(UserContext);
  const { handleLike } = useContext(PostContext);

  const isLiked = likes.some((e) => e === user._id);

  const handleClicker = () => {
    handleLike(post, isLiked);
  };

  return (
    <div className="post__card">
      <div className="post__header">
        <div>
          <Avatar src={avatar} alt="name" className="post__userLogo" />
        </div>
        <div className="post__userDate">
          <div className="post__userName"> {name}</div>
        </div>
       
        <div className="dropdown">
  <a className="btn btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    . . .
  </a>
  <ul className="dropdown-menu">
    <a className="dropdown-item" href="/#">
      Редактировать
    </a>
    <a className="dropdown-item" href="/#">
      Удалить
    </a>
  </ul>
</div>
</div>
      <div className="post__img">
        <img src={image} alt="" className="card__image" />
      </div>

      <div className="post__comm">
        <button
          onClick={handleClicker}
          className={`post__like ${isLiked ? "post__like_active" : ""}`}
        >
          <Badge badgeContent={likes.length} color="primary">
            <FavoriteIcon />
          </Badge>
        </button>

        <div className="post__comm__comment">
          <Badge badgeContent={comments.length} color="primary">
            <ChatBubbleIcon />
          </Badge>
        </div>
      </div>

      {args.tags.map((e) => (
        <span className={`tag tag_type_ ${e}`} key={e}>
          {e}
        </span>
      ))}

      <div className="post__footer">
        {/* <h4>{name ?? title}</h4> */}
        <p> {text} </p>
      </div>

      <div className="footer__footer">
        <input
          type="text"
          placeholder="Добавьте комментарий..."
          className="comment"
        />
        <button className="post__btn">Опубликовать</button>
        <div className="post__info"></div>
      </div>
    </div>
  );
};
export default Post;
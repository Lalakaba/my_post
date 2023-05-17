import "./post.css";
import React from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Post = (props) => {
  return (
    <div className="post__card">
      <div className="post__header">
        <div className="post__userLogo">User</div>
        <div className="post__userDate">
          <div className="post__userName">Will Tompson</div>
        </div>
                              {/* /Вместо иконки */}
        <div className="post__burger">. . .</div>
      </div>
      <div className="post__img">
        <img src={props.img} alt={props.name} />
        
        
        
      </div>


      <div className="post__comm">
      {/* <h4>{props.name}</h4> */}
        <span>
          <FavoriteBorderIcon className="likes" />
        </span>

        <span>
          <ChatBubbleOutlineIcon className="post__chatBubble" />
        </span>
      </div>

      <div className="post__footer">
      <p> {props.text} </p>
      
        <input type="text"  placeholder ="Добавьте комментарий..." className="comment"/>


        

        <button className="post__btn">Добавить</button>
        </div>
    </div>
  );
};

export default Post;

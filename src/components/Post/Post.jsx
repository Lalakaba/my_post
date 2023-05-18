import "./post.css";
import React, { useState } from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";


// const [countDown, setCountDown] = useState(0)

const Post = (props) => {

  const [countUp, setCountUp] = useState(0)
  return (
    <div className="post__card">
      <div className="post__header">
        <div className="post__userLogo">User</div>
        <div className="post__userDate">
          <div className="post__userName">Will Tompson</div>
        </div>
                         
      </div>
      <div className="post__img">
        <img src={props.img} alt={props.name} />
        
        
        
      </div>


      <div className="post__comm">
      {/* <h4>{props.name}</h4> */}
        <span>
        <button className="post__like" onClick={() => setCountUp(countUp + 1)}><FavoriteBorderIcon/>{`${countUp === 0 ? '' : countUp}`}</button>  
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

import "./post.scss";
import React from "react";

const Post = (props) => {
  return (
    <div className="post__card">
        <img className="post__img" src={props.img} alt="{props.name}" />

        <h4>{props.name}</h4>
        <p>{props.text}</p>
        <button>Закрыть</button>
    </div>
  );
};

export default Post;

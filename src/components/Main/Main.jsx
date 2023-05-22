
import React from 'react';
import "../Main/main.css"
import Post from '../Post/Post';

export  const Main = ({posts}) => {

  return (
          <div className="main">
         {posts.map((item) => {
        return <Post  key={item.updated_at}
        {...item}  post={item}/>;
       
      })}
    </div>
  );
};

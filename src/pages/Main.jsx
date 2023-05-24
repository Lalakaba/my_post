
import React from 'react';
import "../components/Main/main.css"
import Post from '../components/Post/Post';
import { CreatePost } from '../components/Modal/CreatePost';


export  const Main = ({posts}) => {
console.log(posts)
  return (

          <div className="main">
            {/* <CreatePost/> */}
         {posts.map((item) => {
        return <Post  key={item.updated_at}
        {...item}  post={item}/>;
      
      })}
        
    </div>
  );
};

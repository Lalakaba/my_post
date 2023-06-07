
import React from 'react';
import "../components/Main/main.css"
import Post from '../components/Post/Post';


 

export  const BlogPage = ({posts}) => {
  




  return (

          <div className="main">
            
 

       {posts.map((item) => {
        return <Post  key={item.updated_at}
        {...item}  post={item} />;
      
      })}
   

    </div>
  );
};

import "./mainList.css"
import React from 'react';

import Post from '../Post/Post';




  const MainList = ({posts}) => {




  return (

          <div>


        

          
          
         {posts.map((item) => {
        return <Post  key={item.updated_at}
        {...item}  post={item}/>;
      
      })}
            
        
    </div>
  );
};


export default MainList;
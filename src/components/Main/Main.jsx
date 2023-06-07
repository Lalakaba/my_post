
import "../Main/main.css"
import Post from "../Post/Post";





export  const Main = ({ posts }) => {

 
    return (
          <div className="main">
         {posts.map((post) => {
        return <Post key={post.updated_at} {...post} post={post} />;
       
      })}
    </div>
  );
};

export default Main;
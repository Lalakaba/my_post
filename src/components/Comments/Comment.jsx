
import "./index.css"
import { ContextData } from "../someContext/Context";
import { useCallback, useContext } from "react";
import { Trash } from "react-bootstrap-icons";
import { api } from "../api/api";





const Comment =({ author,name, text, _id, created_at, postId, ...rest }) => {
 
const { setPostComment, user} = useContext(ContextData)
    
   

   
    const removeComment = useCallback(
      async (commentId) => {
        api.deleteComment(postId, commentId)
          .then((data) => setPostComment({ ...data }))
          .catch(() => console.log('err'));
      },
      [postId, setPostComment]
    );

    
  
    return (


    <div className="commentRoot">
        
       <div className="namePlace">
       <span className="commentName">
             {author.name}</span>
             </div>
             <div className="textPlace">
     <span className="commentText">{text}</span>
     </div>
     
    
     {user._id === author._id ? (                
     <button className="commentButt">
        <Trash className='trash'
    onClick={() => removeComment(_id)} />
                  </button>
                   ) : (
                    ''
                )}
                  </div>
                  
)

}
export default Comment;
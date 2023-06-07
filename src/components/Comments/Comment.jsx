
import "./index.css"
import { ContextData } from "../someContext/Context";
import { useContext } from "react";
import { Trash } from "react-bootstrap-icons";
import { api } from "../../api";

import { useForm } from "react-hook-form";





const Comment =({ author, text, _id, created_at, postId, ...rest }) => {
 
const { setPostComment, user } = useContext(ContextData)
const { reset } = useForm({})
    
   

      
    const removeComment = async (comment) => {
      return (await api
        .deleteComment( _id, comment)
        .then(() => setPostComment((state) =>
            state.filter((CommentPost) => CommentPost._id !== comment)
              .then(reset())
          )
        )
        .catch((error) => console.log(error))
      )
    };



  
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
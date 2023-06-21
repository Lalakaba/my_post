
import { api } from "../../api/api";
import { ContextData } from "../../../someContext/Context";
import "./card.css"
import React, { useContext} from "react"
import { ReactComponent as Like } from "../../Post/img/like.svg"
import { ReactComponent as Chat } from "../../Post/img/chat.svg"

const Card = ({image,created_at, likes,comments, _id}) => {
  const {user, setPosts, setPost } = useContext(ContextData)
  const isLiked = likes?.includes(user._id);;
  
  const handleLikeOnCard = async (_id, isLiked) => {
    const updatedPost = await api.changeLikePostStatus(_id, isLiked);
    setPost(updatedPost)
    setPosts((posts)=>
    posts.map((e) => (e._id === updatedPost?._id ? updatedPost : e))
  )
  }
  
  





  return(
<div className="cardContainer">
<div className="modalPost">
<div className="modalPostImg">
    <img src={image} alt='postImg' className='modalImg'/>
    </div>
   
        <div className='post__icon'>
        <button
          onClick={() => handleLikeOnCard(_id, isLiked)}
          className={`post__like ${isLiked ? 'post__like_active' : ''}`} 
        >
          <Like />
        </button>
        <button className='post__chat'>
          
          <Chat />
          <span className='chat_count'>
            {!!comments.length && comments.length}
          </span>
        </button>
      </div>
      <div className='like_count'>{`Оценили ${likes.length} человек`}</div>
     
       
      
      <div className='modalTime'>
        {new Date(created_at).toLocaleDateString('ru-RU', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        })}
      </div>
      
   </div>
   
   </div>




)



}

export default Card;
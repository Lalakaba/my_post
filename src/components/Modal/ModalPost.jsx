
import "../Modal/modal.css"
import Modal from "react-modal";
import { Avatar } from "@mui/material";

export const ModalPost = ({modalIsOpen, closeModal, author, avatar}) => {
       


return (

<Modal isOpen={modalIsOpen}
onRequestClose={closeModal}>

<div className="post__card">
<div className="post__header">
        <div>
        avatar={ author && 
          <Avatar src={author.avatar} alt="name" className="post__userLogo" />
        }
        </div>      
        
           
         </div>
</div>
       


</Modal>






  
)
}
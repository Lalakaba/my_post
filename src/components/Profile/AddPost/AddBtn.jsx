import React from 'react';
import "./addPost.css"
import { Tooltip } from '@nextui-org/react';



const AddBtn =({onClick}) => {


return(
    <>
    
<div className="boxButt">
<Tooltip content="Добавить пост" color="secondary">
<button className="AddPostButt" type="submit" onClick={() => onClick()}>+
    </button>
    </Tooltip>
   </div>

</>

)

}

export default AddBtn;
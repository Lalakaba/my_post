import React from 'react';
import "./addPost.css"



const AddBtn =({onClick}) => {


return(
<div className="boxButt">

    <button className="AddPostButt" type="submit" onClick={() => onClick()}>+
    
    </button>

    
</div>


)

}

export default AddBtn;
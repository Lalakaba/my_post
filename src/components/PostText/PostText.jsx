import { useState } from "react";
import "./index.css"


const PostText =({children}) => {

const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
  const clickReadMore = () => {
    setIsReadMore(!isReadMore);
  };


return(


    <p className="text">
    {isReadMore ? text.slice(0, 150) : text}
    <span onClick={clickReadMore} className="readHide">
      {isReadMore ? "еще" : "скрыть"}
    </span>
  </p>


)


}

export default PostText



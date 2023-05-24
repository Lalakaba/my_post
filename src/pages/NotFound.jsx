import '../pages/index.css'
import { Link } from "react-router-dom";
import React from "react";
import { Button } from '@nextui-org/react';




export const NotFound  = () => {
   return (
    
   <div className="notFound__container"> 
   <p>Uh oh! Looks like you got lost. <br/>
   Go back to the homepage if you dare!</p>

   
      <div className="back__btn">
      <Link to="/" className="Back">
      <Button shadow color="gradient" auto>
         I dare
        </Button>
      </Link>
      </div>
      </div>
  );
};
    
    
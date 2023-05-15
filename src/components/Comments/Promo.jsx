import './promo.css'
import React from 'react';



const Promo = (props) => {
    return (
      <div className="promo__block">
        <div className="promo__img">
          <p className="promo__text">{props.text || "-"}</p>
        </div>
      </div>
    );
  };


  export default Promo;
import Card from "./Card";
import "./card.css"






const CardsList = ({cards}) => {




    return (
  
            <div className="cardList">
  
  
          
  
            
            
           {cards.map((item) => {
          return <Card  key={item.created_at}
          {...item}  card={item}/>;
        
        })}
              
          
      </div>
    );
  };
  
  
  export default CardsList;
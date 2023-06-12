import "../Footer/footer.css"



export const Footer = () => {
    
  
  
    return (

      <div className="footer">
        <div className="footerTime">
        {new Date().toLocaleDateString('ru-RU', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        })}
        </div>
      </div>
      
    );
  };
  

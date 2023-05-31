import { useCallback, useEffect } from "react";
import "../Modal/modal.css"

export const Modal = ({active, setActive, children}) => {
        const closeOn = useCallback((e) => {
                if (e.code === 'Escape') {
                  setActive(false);
                }
              },
              [setActive]
            );
          
            useEffect(() => {
              document.addEventListener('keydown', closeOn);
              return () => document.removeEventListener('keydown', closeOn);
            }, [closeOn]);


return (

<div className={active ? "modal active" : "modal"}>
        <div className={active ? "modal__сontent active" : "modal__content"}>       
        <span className="modal__close" onClick={() => setActive(false)}>X</span>
           {children}
         </div>

        </div>

)
        } //onClick={e => e.stopPropagation()}>{children}
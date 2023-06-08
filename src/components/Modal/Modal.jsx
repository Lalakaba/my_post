
import "../Modal/modal.css"

const Modal = ({ children, setState }) => {
  return (
      <div className='modal'>
        
          <div className='modal__content'>
          <button className='close__modal' onClick={() => setState('')}>
                X </button>
              <div className='modalfFormContent'>
                {children}
                </div>
          </div>
      </div>
  );
};

export default Modal;
      
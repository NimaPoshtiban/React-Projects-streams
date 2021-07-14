import ReactDOM from 'react-dom';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="visible ui dimmer modals active">
      <div className="visible ui standard modal active">
        
      </div>
    </div>,
    document.querySelector('#modal')
  )
};

export default Modal;

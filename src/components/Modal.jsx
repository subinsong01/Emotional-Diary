import './Modal.css';

const Modal = ({ isOpen, onConfirm, onCancel, message, confirmText, cancelText }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{message}</h2>
        <div className="modal-actions">
          <button className="btn-confirm" onClick={onConfirm}>{confirmText}</button>
          <button className="btn-cancel" onClick={onCancel}>{cancelText}</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

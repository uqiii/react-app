import React from 'react';
import ReactModal from 'react-modal';

import './Modal.css';

const Modal = (props) => {
  const { open, onClose, children } = props;

  return (
    <ReactModal
      isOpen={open}
      onRequestClose={onClose}
      className="Modal"
      overlayClassName="Overlay"
    >
      {children}
    </ReactModal>
  );
};

export default Modal;

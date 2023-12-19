import React from 'react';
import { IoWarning } from 'react-icons/io5';

import { Button } from '../Button';
import { ActionButton } from '../ActionButton';
import { Modal } from '../Modal';
import './ConfirmationModal.css';

const ConfirmationModal = (props) => {
  const {
    open, onClose, onConfirm, text
  } = props;

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <div className="content">
        <IoWarning className="react-icons" size={80} />
        <div>
          {text}
        </div>
      </div>
      <div className="buttonsContainer">
        <ActionButton
          className="primaryButton"
          text="Confirm"
          onSubmit={onConfirm}
        />
        <Button
          className="secondaryButton"
          text="Cancel"
          onClick={onClose}
        />
      </div>
    </Modal>
  );
};

export default ConfirmationModal;

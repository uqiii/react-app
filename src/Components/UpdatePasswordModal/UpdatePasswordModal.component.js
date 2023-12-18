import React, { useState } from 'react';
import toast from 'react-hot-toast';

import { InputBox } from '../InputBox';
import { Button } from '../Button';
import { Modal } from '../Modal';
import './UpdatePasswordModal.css';
import axios from '../../Api/axios';

const UpdatePasswordModal = (props) => {
  const { open, onClose } = props;
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    setSubmitting(true);
    e.preventDefault();
    const formValues = { oldPassword, newPassword };
    try {
      const url = '/users/current/update-password';
      await axios.post(url, formValues);
      toast.success('Successfully update password');
      onClose();
    } catch (err) {
      const errorMessage = err?.response?.data?.message;
      toast.error(errorMessage || 'Error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setOldPassword();
    setNewPassword();
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <form onSubmit={handleSubmit}>
        <h1>Update Password</h1>
        <InputBox
          disabled={submitting}
          type="password"
          placeholder="Old Password"
          autoComplete="off"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <InputBox
          disabled={submitting}
          type="password"
          placeholder="New Password"
          autoComplete="off"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button
          text="Update"
          disabled={submitting || !oldPassword || !newPassword}
        />
      </form>
    </Modal>
  );
};

export default UpdatePasswordModal;

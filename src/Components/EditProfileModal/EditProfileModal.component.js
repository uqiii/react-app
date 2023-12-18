import React, { useState } from 'react';
import toast from 'react-hot-toast';

import { InputBox } from '../InputBox';
import { Button } from '../Button';
import { Modal } from '../Modal';
import './EditProfileModal.css';
import axios from '../../Api/axios';

const EditProfileModal = (props) => {
  const {
    profile = {}, open, onClose, onSuccess
  } = props;
  const [name, setName] = useState(profile.name);
  const [phone, setPhone] = useState(profile.phone);
  const [email, setEmail] = useState(profile.email);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    setSubmitting(true);
    e.preventDefault();
    const formValues = {
      name, email, phone
    };
    try {
      const url = '/users/current';
      await axios.patch(url, formValues);
      toast.success('Successfully update profile');
      onSuccess();
      onClose();
    } catch (err) {
      const errorMessage = err?.response?.data?.message;
      toast.error(errorMessage || 'Error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setName(profile.name);
    setEmail(profile.email);
    setPhone(profile.phone);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <form onSubmit={handleSubmit}>
        <h1>Edit Profile</h1>
        <InputBox
          disabled={submitting}
          type="text"
          placeholder="name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputBox
          disabled={submitting}
          type="text"
          placeholder="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputBox
          disabled={submitting}
          type="text"
          placeholder="phone"
          autoComplete="off"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Button
          text="Update"
          disabled={submitting || !email || !name || !phone}
        />
      </form>
    </Modal>
  );
};

export default EditProfileModal;

import React, { useState } from 'react';
import toast from 'react-hot-toast';

import { InputBox } from '../InputBox';
import { Button } from '../Button';
import { Modal } from '../Modal';
import './EditUserModal.css';
import axios from '../../Api/axios';

const EditProfileModal = (props) => {
  const {
    user = {}, open, onClose, onSuccess, isAdmin = false
  } = props;
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [position, setPosition] = useState(user.position);
  const [submitting, setSubmitting] = useState(false);

  const getPayload = () => {
    if (isAdmin) {
      return {
        name, email, phone, position
      };
    }

    return { name, email, phone };
  };

  const handleSubmit = async (e) => {
    setSubmitting(true);
    e.preventDefault();
    try {
      const url = isAdmin ? `/users/${user.id}` : '/users/current';
      const response = await axios.patch(url, getPayload());
      toast.success('Successfully update profile');
      onSuccess(response.data);
      onClose();
    } catch (err) {
      const errorMessage = err?.response?.data?.message;
      toast.error(errorMessage || 'Error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
    if (isAdmin) {
      setPosition(user.position);
    }
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
        {isAdmin
        && (
        <InputBox
          disabled={submitting}
          type="text"
          placeholder="position"
          autoComplete="off"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        )}
        <Button
          text="Update"
          disabled={submitting || !email || !name || !phone || (isAdmin && !position)}
        />
      </form>
    </Modal>
  );
};

export default EditProfileModal;

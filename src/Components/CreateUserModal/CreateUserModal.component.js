import React, { useState } from 'react';
import toast from 'react-hot-toast';

import { InputBox } from '../InputBox';
import { Button } from '../Button';
import { Modal } from '../Modal';
import axios from '../../Api/axios';
import './CreateUserModal.css';

const CreateUserModal = (props) => {
  const {
    open, onClose, onSuccess
  } = props;
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [position, setPosition] = useState();
  const [password, setPassword] = useState();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    setSubmitting(true);
    e.preventDefault();
    try {
      const url = '/users';
      const response = await axios.post(url, {
        name, email, phone, position, password
      });
      toast.success('Successfully create user');
      onSuccess(response.data);
      handleClose();
    } catch (err) {
      const errorMessage = err?.response?.data?.message;
      toast.error(errorMessage || 'Error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setName();
    setEmail();
    setPhone();
    setPosition();
    setPassword();
    onClose();
  };

  const fields = [
    {
      placeholder: 'name',
      value: name,
      valueController: setName
    },
    {
      placeholder: 'email',
      value: email,
      valueController: setEmail
    },
    {
      placeholder: 'phone',
      value: phone,
      valueController: setPhone
    },
    {
      placeholder: 'position',
      value: position,
      valueController: setPosition
    },
    {
      placeholder: 'password',
      value: password,
      valueController: setPassword
    }
  ];

  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <form onSubmit={handleSubmit} className="createUserModal">
        <h1>Create User</h1>
        {fields.map(({ placeholder, value, valueController }) => (
          <InputBox
            disabled={submitting}
            type="text"
            placeholder={placeholder}
            autoComplete="off"
            value={value}
            onChange={(e) => valueController(e.target.value)}
          />
        ))}
        <Button
          className="primaryButton"
          text="Create"
          disabled={submitting || !email || !name || !phone || !position || !password}
        />
      </form>
    </Modal>
  );
};

export default CreateUserModal;

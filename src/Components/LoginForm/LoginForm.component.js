import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

import './LoginForm.css';
import { InputBox } from '../InputBox';
import { Button } from '../Button';

const Login = (props) => {
  const { onSubmit } = props;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    setSubmitting(true);
    e.preventDefault();
    const formValues = {
      email,
      password
    };
    try {
      await onSubmit(formValues);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="wrapper border">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <InputBox
          disabled={submitting}
          type="text"
          placeholder="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          icon={FaUser}
        />
        <InputBox
          disabled={submitting}
          type="password"
          placeholder="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          icon={FaLock}
        />
        <Button
          text="Login"
          disabled={submitting || !email || !password}
        />
      </form>
    </div>
  );
};

export default Login;

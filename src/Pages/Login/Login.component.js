import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

import './Login.css';
import { InputBox } from '../../Components/InputBox';
import { Button } from '../../Components/Button';
import { Switch } from '../../Components/Switch';

const Login = (props) => {
  const { auth } = props;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isAdmin, setIsAdmin] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    setSubmitting(true);
    e.preventDefault();
    try {
      await await auth.loginUser({
        email: email.toLowerCase(), password
      }, isAdmin);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="page loginComponent">
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
        <Switch
          label="Login as admin"
          className="switch"
          onChange={(checked) => setIsAdmin(!!checked)}
          checked={isAdmin}
        />
        <Button
          text="Login"
          className="primaryButton"
          disabled={submitting || !email || !password}
        />
      </form>
    </div>
  );
};

export default Login;

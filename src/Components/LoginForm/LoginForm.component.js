import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

import './LoginForm.css';
import { InputBox } from '../InputBox';
import { Button } from '../Button';

const Login = () => (
  <div className="wrapper border">
    <form>
      <h1>Login</h1>
      <InputBox
        type="text"
        placeholder="email"
        required
        icon={FaUser}
      />
      <InputBox
        type="password"
        placeholder="password"
        required
        icon={FaLock}
      />
      <Button
        text="Login"
      />
    </form>
  </div>
);

export default Login;

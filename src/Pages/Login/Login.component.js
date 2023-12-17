import React from 'react';

import { LoginForm } from '../../Components/LoginForm';

const Login = (props) => {
  const { doLogin } = props;

  return (
    <div>
      <LoginForm onSubmit={doLogin} />
    </div>
  );
};

export default Login;

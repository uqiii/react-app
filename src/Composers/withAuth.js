import React, { useContext } from 'react';

import AuthContext from '../Context/AuthContext';

const withAuth = (ComposedComponent) => {
  const HOCNavigate = (props) => {
    const auth = useContext(AuthContext);

    return (
      <ComposedComponent {...props} auth={auth} />
    );
  };

  return HOCNavigate;
};

export default withAuth;

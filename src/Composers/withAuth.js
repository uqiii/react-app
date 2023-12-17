import React, { useContext } from 'react';
import {
  Navigate,
  useLocation
} from 'react-router-dom';

import AuthContext from '../Context/AuthContext';
import { Loading } from '../Components/Loading';

const withAuth = (ComposedComponent) => {
  const HOCNavigate = (props) => {
    const auth = useContext(AuthContext);
    const location = useLocation();
    const redirectPath = '/login';

    if (auth.loading) {
      return <Loading />;
    }

    if (!auth.user && redirectPath !== location.pathname) {
      return <Navigate to={redirectPath} replace state={{ from: location }} />;
    }

    return (
      <ComposedComponent {...props} auth={auth} />
    );
  };

  return HOCNavigate;
};

export default withAuth;

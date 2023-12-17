import React from 'react';
import { compose, withHandlers } from 'react-recompose';

import Login from './Login.component';
import handlers from './Login.handlers';
import withAuth from '../../Composers/withAuth';

export const LoginContainer = (props) => <Login {...props} />;

LoginContainer.displayName = 'LoginContainer';

export default compose(
  withAuth,
  withHandlers(handlers)
)(LoginContainer);

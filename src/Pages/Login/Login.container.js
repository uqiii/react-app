import React from 'react';
import { compose, withHandlers } from 'react-recompose';

import Login from './Login.component';
import handlers from './Login.handlers';
import withNavigate from '../../Composers/withNavigate';

export const LoginContainer = (props) => <Login {...props} />;

LoginContainer.displayName = 'LoginContainer';

export default compose(
  withNavigate,
  withHandlers(handlers)
)(LoginContainer);

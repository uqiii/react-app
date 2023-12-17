import React from 'react';
import { compose } from 'react-recompose';

import Home from './Home.component';
import withAuth from '../../Composers/withAuth';

export const HomeContainer = (props) => <Home {...props} />;

HomeContainer.displayName = 'HomeContainer';

export default
compose(
  withAuth
)(HomeContainer);

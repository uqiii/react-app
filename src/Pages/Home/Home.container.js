import React from 'react';
import { compose, withHandlers } from 'react-recompose';

import Home from './Home.component';
import handlers from './Home.handlers';

export const HomeContainer = (props) => <Home {...props} />;

HomeContainer.displayName = 'HomeContainer';

export default
compose(
  withHandlers(handlers)
)(HomeContainer);

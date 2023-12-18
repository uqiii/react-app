import React from 'react';
import { compose } from 'react-recompose';

import UserHome from './UserHome/UserHome.component';
import withAuth from '../../Composers/withAuth';
import { AdminHome } from './AdminHome';

export const HomeContainer = (props) => {
  const role = props?.auth?.claims?.user?.role;
  return role === 'ADMIN' ? <AdminHome /> : <UserHome {...props} />;
};

HomeContainer.displayName = 'HomeContainer';

export default compose(withAuth)(HomeContainer);

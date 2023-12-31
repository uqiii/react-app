import React from 'react';
import {
  Link, useMatch, useResolvedPath, useLocation
} from 'react-router-dom';

import withAuth from './Composers/withAuth';

const Navbar = ({ auth }) => {
  const role = auth?.claims?.user?.role;
  const location = useLocation();

  const withoutNavbarPages = ['/login'];

  if (withoutNavbarPages.includes(location.pathname)) {
    return null;
  }

  switch (role) {
    case 'ADMIN':
      return (
        <nav className="nav">
          <CustomLink to="/">Daily</CustomLink>
          <div className="rightPages">
            <CustomLink to="/user-management">Users</CustomLink>
            <button className="site-title" type="button" onClick={auth.logoutUser}>Logout</button>
          </div>
        </nav>
      );
    case 'USER':
      return (
        <nav className="nav">
          <CustomLink to="/">Daily</CustomLink>
          <div className="rightPages">
            <CustomLink to="/profile">Profile</CustomLink>
            <button className="site-title" type="button" onClick={auth.logoutUser}>Logout</button>
          </div>
        </nav>
      );
    default:
      return (
        <nav className="nav">
          <CustomLink to="/">Daily</CustomLink>
        </nav>
      );
  }
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link to={to} {...props} className={`site-title ${isActive ? 'active' : ''}`}>
      {children}
    </Link>
  );
}

export default withAuth(Navbar);

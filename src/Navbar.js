import React, { useContext } from 'react';
import {
  Link, useMatch, useResolvedPath, useLocation
} from 'react-router-dom';

import AuthContext from './Context/AuthContext';

export default function Navbar() {
  const auth = useContext(AuthContext);
  const location = useLocation();

  const withoutNavbarPages = ['/login'];

  if (withoutNavbarPages.includes(location.pathname)) {
    return null;
  }

  return (
    <nav className="nav">
      <CustomLink to="/">Daily</CustomLink>
      <div className="rightPages">
        <CustomLink to="/profile">Profile</CustomLink>
        <button className="site-title" type="button" onClick={auth.logoutUser}>Logout</button>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link to={to} {...props} className={`site-title ${isActive ? 'active' : ''}`}>
      {children}
    </Link>
  );
}

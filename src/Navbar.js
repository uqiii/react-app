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
      <Link to="/" className="site-title">
        Daily
      </Link>
      <ul>
        <CustomLink to="/profile">Profile</CustomLink>
        <button className="bprder" type="button" onClick={auth.logoutUser}>Log Out</button>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

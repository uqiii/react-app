import { useLocation, Navigate, Outlet } from 'react-router-dom';
import withAuth from './Composers/withAuth';
import { Loading } from './Components/Loading';

const RequireAuth = ({ auth, allowedRoles }) => {
  const location = useLocation();

  if (auth.loading) {
    return <Loading />;
  }

  const user = auth?.claims?.user;

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (!allowedRoles.includes(user?.role)) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return (<Outlet auth={auth} />);
};

export default withAuth(RequireAuth);

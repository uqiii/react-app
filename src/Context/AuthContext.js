import { createContext, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import axios from '../Api/axios';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => (localStorage.getItem('tokens') ? jwtDecode(localStorage.getItem('tokens')) : null));
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const loginUser = async (payload) => {
    const url = '/users/login';
    setLoading(true);
    try {
      const response = await axios.post(url, payload);
      toast.success('Successfully Logged in');
      localStorage.setItem('tokens', JSON.stringify(response.data));
      setUser(jwtDecode(response?.data?.accessToken));
      navigate('/', { replace: true });
    } catch (err) {
      const errorMessage = err?.response?.data?.message;
      toast.error(errorMessage || 'Error');
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('tokens');
    toast.success('Successfully logged out');
    navigate('/login');
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextData = {
    user,
    loading,
    loginUser,
    logoutUser
  };

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
};

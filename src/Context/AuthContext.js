import { createContext, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

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
      localStorage.setItem('tokens', JSON.stringify(response.data));
      setUser(jwtDecode(response?.data?.accessToken));
      navigate('/', { replace: true });
    } catch (err) {
      console.log(`Error when when requesting ${url}:`, err);
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('tokens');
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

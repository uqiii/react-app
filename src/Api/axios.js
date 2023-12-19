import axios from 'axios';

let authTokens = localStorage.getItem('tokens') ? JSON.parse(localStorage.getItem('tokens')) : null;

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: authTokens?.accessToken && { Authorization: `Bearer ${authTokens?.accessToken}` }
});

axiosInstance.interceptors.request.use(async (req) => {
  authTokens = localStorage.getItem('tokens') ? JSON.parse(localStorage.getItem('tokens')) : null;
  req.headers.Authorization = `Bearer ${authTokens?.accessToken}`;

  return req;
});

export default axiosInstance;

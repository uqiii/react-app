import axios from 'axios';

// const BASE_URL = 'http://https://green-pike-hose.cyclic.app:3001';
const BASE_URL = 'http://localhost:3001';

let authTokens = localStorage.getItem('tokens') ? JSON.parse(localStorage.getItem('tokens')) : null;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: authTokens?.accessToken && { Authorization: `Bearer ${authTokens?.accessToken}` }
});

axiosInstance.interceptors.request.use(async (req) => {
  if (!req.headers.Authorization) {
    authTokens = localStorage.getItem('tokens') ? JSON.parse(localStorage.getItem('tokens')) : null;
    req.headers.Authorization = `Bearer ${authTokens?.accessToken}`;
  }

  return req;
});

export default axiosInstance;

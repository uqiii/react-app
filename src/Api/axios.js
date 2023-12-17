import axios from 'axios';

// const BASE_URL = 'http://https://green-pike-hose.cyclic.app:3001';
const BASE_URL = 'http://localhost:3001';

export default axios.create({ baseURL: BASE_URL });

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' }
});

import axios from 'axios';

axios.defaults.baseURL = 'api/';
axios.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error.response),
);

export default axios;

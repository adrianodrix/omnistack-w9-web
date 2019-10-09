import axios from 'axios';

const api = axios.create({
  baseURL: 'https://omnistack-w9-backend.herokuapp.com'
});

export default api;
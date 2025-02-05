import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' 
  ? 'https://elevatree.onrender.com/api'
  : 'http://localhost:10000/api';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

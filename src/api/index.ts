import axios from 'axios';

export const API_URL = import.meta.env.VITE_API_URL || 'https://elevatree.onrender.com/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-App-Name': 'ElevaTree',
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

export const auth = {
  login: (email: string, password: string) =>
    api.post('/api/login', { email, password }),
  register: (userData: any) =>
    api.post('/api/register', userData),
  getCurrentUser: () =>
    api.get('/api/profile'),
};

export const mentors = {
  getAll: () => api.get('/mentors'),
  getById: (id: string) => api.get(`/mentors/${id}`),
  create: (mentorData: any) => api.post('/mentors', mentorData),
  update: (id: string, mentorData: any) => api.put(`/mentors/${id}`, mentorData),
};

export const careerPaths = {
  getAll: () => api.get('/career-paths'),
  getById: (id: string) => api.get(`/career-paths/${id}`),
};

export const resources = {
  getAll: (type?: string) => api.get('/resources', { params: { type } }),
  getById: (id: string) => api.get(`/resources/${id}`),
  create: (resourceData: any) => api.post('/resources', resourceData),
};
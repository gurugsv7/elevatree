import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
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

export const auth = {
  login: (email: string, password: string) => 
    api.post('/auth/login', { email, password }),
  register: (userData: any) => 
    api.post('/auth/register', userData),
  getCurrentUser: () => 
    api.get('/auth/me'),
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
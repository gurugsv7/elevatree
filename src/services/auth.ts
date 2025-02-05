import api from './api';

export const login = async (email: string, password: string) => {
  try {
    console.log('Attempting login with:', { email });
    
    const response = await api.post('/login', {
      email: email.trim(),
      password: password.trim()
    });
    
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      return response.data;
    } else {
      throw new Error('No token received');
    }
  } catch (error: any) {
    console.error('Login failed:', error.response?.data || error.message);
    throw error;
  }
};

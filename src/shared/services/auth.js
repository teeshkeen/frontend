import axios from 'axios';

<<<<<<< HEAD
const API_URL = process.env.REACT_APP_API_URL || 'https://уралплата.рф/api';
=======
const API_URL = process.env.REACT_APP_API_URL || 'http://79.174.80.133:5001/api';
>>>>>>> 9d1322fe7afd65ac7bf5c790ea2e61450ff6093c

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

import axios from 'axios';

// Base URL backend
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // untuk cookies/sessions
});



// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// API methods
export const apiService = {
  // Test connection
  testConnection: () => api.get('/'),
  
  // Users
  getUsers: () => api.get('/api/users'),
  createUser: (userData) => api.post('/api/users', userData),
  getUserById: (id) => api.get(`/api/users/${id}`),
  updateUser: (id, userData) => api.put(`/api/users/${id}`, userData),
  deleteUser: (id) => api.delete(`/api/users/${id}`),
  
  // Test endpoint
  testApi: () => api.get('/api/test'),
  submitApplication: (formData) =>
    api.post('/api/submit-application', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),
    // submitApplication: (formData) =>
    //   api.post('/api/submit-application', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   }),
  
    // ✅ Tambahkan ini:
    submitContactMessage: (contactData) =>
      api.post('/api/contact-message', contactData),
    submitConsultation: (data) => api.post('/api/consultation-request', data),

      submitPromoClaim: (data) => api.post('/api/promo-claim', data),
      resetPromoClaims: (payload) => api.post('/api/promo-claim/reset', payload),



};

export default api;
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for auth tokens
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export const crawlsAPI = {
  analyzeURL: (url, options = {}) => 
    api.post('/crawls/analyze', { url, options }),
  
  getStatus: (crawlId) => 
    api.get(`/crawls/status/${crawlId}`),
  
  getResults: (crawlId) => 
    api.get(`/results/${crawlId}`)
};

export const authAPI = {
  login: (email, password) => 
    api.post('/auth/login', { email, password }),
  
  signup: (userData) => 
    api.post('/auth/signup', userData),
  
  getProfile: () => 
    api.get('/auth/profile')
};

export default api;
// api.js
import axios from 'axios';

// API 기본 URL 설정
export const API_BASE_URL = 'https://83b6-219-255-207-40.ngrok-free.app';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
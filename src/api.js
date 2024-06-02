// api.js
import axios from 'axios';

// API 기본 URL 설정
export const API_BASE_URL = 'https://e92b-14-36-206-222.ngrok-free.app';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
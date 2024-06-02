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

export const fetchIssues = async () => {
  try {
    const response = await api.get('/issue/allIssues');
    console.log('API Response:', response); // 응답 전체를 출력
    return response.data;
  } catch (error) {
    alert('Error fetching issues:', error);
    throw error;
  }
};

export default api;

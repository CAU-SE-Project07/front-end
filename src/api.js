import axios from 'axios';

const API_BASE_URL = 'https://e92b-14-36-206-222.ngrok-free.app/';

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

// 이슈 추가
export const addIssue = async (issueData) => {
  try {
    const response = await axios.post('/api/issues', issueData);
    return response.data;
  } catch (error) {
    console.error('There was an error adding the issue!', error);
    throw error;
  }
};

// 이슈 업데이트
export const updateIssue = async (issueNum, issueData) => {
  try {
    const response = await axios.put(`/api/issues/${issueNum}`, issueData);
    return response.data;
  } catch (error) {
    console.error('There was an error updating the issue!', error);
    throw error;
  }
};

// 이슈 검색 [userid, state] 기반
export const searchIssues = async (userId, state) => {
  try {
    const response = await axios.get(`/api/issues?userid=${userId}&state=${state}`);
    return response.data;
  } catch (error) {
    console.error('There was an error searching the issues!', error);
    throw error;
  }
};

// Assignee에게 할당된 issue들만 찾아보기
export const getIssuesByAssignee = async (assignee) => {
  try {
    const response = await axios.get(`/api/issues/assignee/${assignee}`);
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the issues by assignee!', error);
    throw error;
  }
};

// project에 할당된 Issue들 다 긁어오기
export const getIssuesByProject = async (projectId) => {
  try {
    const response = await axios.get(`/api/issues/project/${projectId}`);
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the issues by project!', error);
    throw error;
  }
};
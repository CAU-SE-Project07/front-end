import React, { useState, useContext } from 'react';
import api from '../api';
import { UserContext } from '../context/UserContext';

function IssueUploadPage() {
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('major');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert('로그인 상태를 확인할 수 없습니다. 다시 로그인해 주세요.');
      return;
    }
    const date = new Date();
    const seoulTime = new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'Asia/Seoul',
    }).format(date);
    try {
      const response = await api.post('/issue/addIssue', {
        title,
        description,
        priority,
        userId: user.userId,
        date: seoulTime
      });

      if (response.status >= 200 && response.status < 300) {
        alert('이슈가 성공적으로 생성되었습니다.');
        setTitle('');
        setDescription('');
        setPriority('major');
      } else {
        alert('이슈 생성에 실패했습니다.');
        console.error('응답 상태 코드:', response.status);
        console.error('응답 데이터:', response.data);
      }
    } catch (error) {
      console.error('API 호출 중 오류가 발생했습니다:', error);
      alert('API 호출 중 오류가 발생했습니다: ' + error.message);
    }
  };

  return (
    <div className="grid gap-5 p-5 bg-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold mb-2">이슈 등록</h1>
      <form onSubmit={handleFormSubmit} className="bg-[#DDF1FF] p-5 rounded-lg shadow-md w-full">
        <div className="mb-4">
          <label htmlFor="title" className="block font-bold mb-2">제목</label>
          <input
            type="text"
            id="title"
            value={title}
            placeholder="제목을 입력하세요"
            onChange={handleTitleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-bold mb-2">상세 설명</label>
          <textarea
            id="description"
            value={description}
            placeholder="상세 설명을 입력하세요"
            onChange={handleDescriptionChange}
            className="w-full p-2 border rounded h-48"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="priority" className="block font-bold mb-2">우선 순위</label>
          <select
            id="priority"
            className="p-2 border rounded"
            value={priority}
            onChange={handlePriorityChange}
          >
            <option value="blocker">blocker</option>
            <option value="critical">critical</option>
            <option value="major">major</option>
            <option value="minor">minor</option>
            <option value="trivial">trivial</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-900 text-white py-2 px-4 rounded mx-auto w-1.7/5" >
          이슈 만들기
        </button>
      </form>
    </div>
  );
}

export default IssueUploadPage;

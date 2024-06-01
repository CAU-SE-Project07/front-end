import React, { useState } from 'react';

function IssueUploadPage() {
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
    try {
      const response = await fetch('http://localhost:8080/api/issues', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, priority }),
      });
      if (response.ok) {
        // 이슈가 성공적으로 생성된 경우
        console.log('이슈가 성공적으로 생성되었습니다.');
      } else {
        // 오류가 발생한 경우
        console.error('이슈 생성에 실패했습니다.');
      }
    } catch (error) {
      console.error('API 호출 중 오류가 발생했습니다:', error);
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
          className="bg-blue-900 text-white py-2 px-4 rounded mx-auto w-1/5" >
          이슈 만들기
        </button>
      </form>
    </div>
  );
}

export default IssueUploadPage;
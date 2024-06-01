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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // 여기에 폼 제출 로직을 추가합니다.
    console.log({ title, description, priority });
  };

  const handlePriorityFormSubmit = (e) => {
    e.preventDefault();
    // 우선 순위 폼 제출 로직을 추가합니다.
    console.log({ priority });
  };

  return (
    <div className="grid gap-5 p-5 bg-white">
      <h1 className="text-2xl font-bold mb-4">이슈 등록</h1>
      <form onSubmit={handleFormSubmit} className="bg-purple-200 p-5 rounded-lg shadow-md max-w-2xl mx-auto">
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
      </form>
      <form onSubmit={handlePriorityFormSubmit} className="bg-purple-200 p-5 rounded-lg shadow-md max-w-2xl mx-auto">
        <div className="mb-4">
          <label htmlFor="priority" className="block font-bold mb-2">우선 순위</label>
          <select
            id="priority"
            className="w-full p-2 border rounded"
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
      </form>
      <button
        onClick={handlePriorityFormSubmit}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800 mx-auto"
      >
        이슈 만들기
      </button>
    </div>
  );
}

export default IssueUploadPage;
import React, { useState } from 'react';
import './IssueRegister.css';

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
    <div className="IssueUploadPage">
      <h1>이슈 등록</h1>
      <form onSubmit={handleFormSubmit} className="main-form">
        <div className="form-group">
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            value={title}
            placeholder="제목을 입력하세요..."
            onChange={handleTitleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">상세 설명</label>
          <textarea
            id="description"
            value={description}
            placeholder="상세 설명을 입력하세요..."
            onChange={handleDescriptionChange}
          />
        </div>
      </form>
      <form onSubmit={handlePriorityFormSubmit} className="priority-form">
        <div className="form-group">
          <label htmlFor="priority">우선 순위</label>
          <select id="priority" className="priority-select" value={priority} onChange={handlePriorityChange}>
            <option value="blocker">blocker</option>
            <option value="critical">critical</option>
            <option value="major">major</option>
            <option value="minor">minor</option>
            <option value="trivial">trivial</option>
          </select>
        </div>
      </form>
      <button onClick={handlePriorityFormSubmit} className="submit-button">이슈만들기</button>
    </div>
  );
}

export default IssueUploadPage;

import React, { useState } from 'react';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const dummyData = [
    { issueNum: 1, title: 'Issue 1', reportedDate: '2024-05-01', assignee: 'John Doe', status: 'Open' },
    { issueNum: 2, title: 'Issue 2', reportedDate: '2024-05-02', assignee: 'Jane Smith', status: 'Closed' },
    { issueNum: 3, title: 'Issue 3', reportedDate: '2024-05-03', assignee: 'Alice Johnson', status: 'In Progress' },
    { issueNum: 4, title: 'Issue 4', reportedDate: '2024-05-04', assignee: 'Bob Lee', status: 'Open' },
    { issueNum: 5, title: 'Issue 5', reportedDate: '2024-05-05', assignee: 'Chris Kim', status: 'Closed' },
    { issueNum: 6, title: 'Issue 6', reportedDate: '2024-05-06', assignee: 'David Park', status: 'In Progress' },
    { issueNum: 7, title: 'Issue 7', reportedDate: '2024-05-07', assignee: 'Eva Green', status: 'Open' },
    { issueNum: 8, title: 'Issue 8', reportedDate: '2024-05-08', assignee: 'Frank White', status: 'Closed' },
    { issueNum: 9, title: 'Issue 9', reportedDate: '2024-05-09', assignee: 'Grace Brown', status: 'In Progress' },
    { issueNum: 10, title: 'Issue 10', reportedDate: '2024-05-10', assignee: 'Hank Black', status: 'Open' },
  ];

  // 현재 페이지의 데이터 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 번호를 렌더링하기 위한 로직
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(dummyData.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="">
      <div className="flex justify-center p-2">
        <input 
          type="text" 
          placeholder="이슈 검색" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded px-4 py-2 w-full max-w-xl"
          style={{ height: '4rem' }}
        />
      </div>
      <div className="flex justify-center p-2">
        <fieldset className="border p-4 w-full max-w-xl bg-white">
          <div className="flex justify-center space-x-6">
            <label className="space-x-2">
              <input 
                type="checkbox"
                name="filter" 
                value="all" 
                checked={filter === 'all'}
                onChange={(e) => setFilter(e.target.value)}
                className="form-checkbox"
              />
              all
            </label>
            <label className="space-x-2">
              <input 
                type="checkbox"
                name="filter" 
                value="open" 
                checked={filter === 'open'}
                onChange={(e) => setFilter(e.target.value)}
                className="form-checkbox"
              />
              open
            </label>
            <label className="space-x-2">
              <input 
                type="checkbox"
                name="filter" 
                value="closed" 
                checked={filter === 'closed'}
                onChange={(e) => setFilter(e.target.value)}
                className="form-checkbox"
              />
              closed
            </label>
            <label className="space-x-2">
              <input 
                type="checkbox"
                name="filter" 
                value="inProgress" 
                checked={filter === 'inProgress'}
                onChange={(e) => setFilter(e.target.value)}
                className="form-checkbox"
              />
              in progress
            </label>
            <label className="space-x-2">
              <input 
                type="checkbox"
                name="filter" 
                value="assigned" 
                checked={filter === 'assigned'}
                onChange={(e) => setFilter(e.target.value)}
                className="form-checkbox"
              />
              assigned
            </label>
          </div>
        </fieldset>
      </div>

      <h1 className="text-left text-2xl mb-4">ISSUE</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b"># Issue num</th>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Reported Date</th>
              <th className="py-2 px-4 border-b">Assignee</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((issue, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{issue.issueNum}</td>
                <td className="py-2 px-4 border-b">{issue.title}</td>
                <td className="py-2 px-4 border-b">{issue.reportedDate}</td>
                <td className="py-2 px-4 border-b">{issue.assignee}</td>
                <td className="py-2 px-4 border-b">{issue.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        {pageNumbers.map(number => (
          <button key={number} onClick={() => setCurrentPage(number)} className="mx-1 px-4 py-2 border rounded cursor-pointer">
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
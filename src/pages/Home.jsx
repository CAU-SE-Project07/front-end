import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const navigate = useNavigate(); 

  const dummyData = [
    // 이슈 데이터
    { issueNum: 1, title: 'Issue 1', reportedDate: '2024-05-01', assignee: 'John Doe', status: 'new' },
    { issueNum: 2, title: 'Issue 2', reportedDate: '2024-05-02', assignee: 'Jane Smith', status: 'closed' },
    { issueNum: 3, title: 'Issue 3', reportedDate: '2024-05-03', assignee: 'Alice Johnson', status: 'resolved' },
    { issueNum: 4, title: 'Issue 4', reportedDate: '2024-05-04', assignee: 'Bob Lee', status: 'new' },
    { issueNum: 5, title: 'Issue 5', reportedDate: '2024-05-05', assignee: 'Chris Kim', status: 'new' },
    { issueNum: 6, title: 'Issue 6', reportedDate: '2024-05-06', assignee: 'David Park', status: 'fixed' },
    { issueNum: 7, title: 'Issue 7', reportedDate: '2024-05-07', assignee: 'John Doe', status: 'new' },
    { issueNum: 8, title: 'Issue 8', reportedDate: '2024-05-08', assignee: 'Frank White', status: 'resolved' },
    { issueNum: 9, title: 'Issue 9', reportedDate: '2024-05-09', assignee: 'Grace Brown', status: 'assigned' },
    { issueNum: 10, title: 'Issue 10', reportedDate: '2024-05-10', assignee: 'Hank Black', status: 'new' },
  ];

  const handleClickIssue = (issueNum) => {
    // 이슈 번호를 기반으로 URL을 구성하고 페이지 이동
    navigate(`/issue/${issueNum}`);
  };

  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    setFilter((prevFilter) => 
      prevFilter.includes(value)
        ? prevFilter.filter((item) => item !== value)
        : [...prevFilter, value]
    );
  };

  // 필터링된 데이터 계산
  const filteredData = dummyData.filter((issue) => {
    const matchAssignee = searchTerm ? issue.assignee.toLowerCase().includes(searchTerm.toLowerCase()) : true;
    const matchStatus = filter.length ? filter.includes(issue.status) : true;
    return matchAssignee && matchStatus;
  });

  // 현재 페이지의 데이터 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 번호를 렌더링하기 위한 로직
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredData.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="min-h-screen">
      <div className="bg-blue-900">
        <div className="flex justify-center pt-6 pr-6 pl-6 bg-blue-900">
          <input 
            type="text" 
            placeholder="이슈 검색" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded px-4 py-2 w-full max-w-xl bg-white"
            style={{ height: '4.5rem' }}
          />
        </div>
        
        <div className="flex justify-center p-6">
          <fieldset className="border rounded-lg p-4 w-full max-w-xl bg-white">
            <div className="flex justify-center space-x-6">
              <label className="space-x-2">
                <input 
                  type="checkbox"
                  name="filter" 
                  value="new" 
                  checked={filter.includes('new')}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                new
              </label>
              <label className="space-x-2">
                <input 
                  type="checkbox"
                  name="filter" 
                  value="assigned" 
                  checked={filter.includes('assigned')}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                assigned
              </label>
              <label className="space-x-2">
                <input 
                  type="checkbox"
                  name="filter" 
                  value="closed" 
                  checked={filter.includes('closed')}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                closed
              </label>
              <label className="space-x-2">
                <input 
                  type="checkbox"
                  name="filter" 
                  value="resolved" 
                  checked={filter.includes('resolved')}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                resolved
              </label>
              <label className="space-x-2">
                <input 
                  type="checkbox"
                  name="filter" 
                  value="fixed" 
                  checked={filter.includes('fixed')}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                fixed
              </label>
            </div>
          </fieldset>
        </div>
      </div>

      <div className="bg-white rounded-t-2xl p-6">
        <h1 className="text-2xl font-bold mb-4">ISSUES</h1>
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
              {currentItems.map((issue) => (
                <tr key={issue.issueNum} onClick={() => handleClickIssue(issue.issueNum)} style={{ cursor: 'pointer' }}>
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
        <div className="flex justify-center my-4">
          {pageNumbers.map(number => (
            <button 
              key={number} 
              onClick={() => setCurrentPage(number)} 
              className="mx-1 px-4 py-2 border rounded cursor-pointer bg-white"
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
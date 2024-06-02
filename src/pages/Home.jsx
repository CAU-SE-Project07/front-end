import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchIssues } from '../api';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [issues, setIssues] = useState([]); // 빈 배열로 초기화
  const itemsPerPage = 8;
  const navigate = useNavigate();

  useEffect(() => {
    const loadIssues = async () => {
      try {
        const issuesData = await fetchIssues();
        console.log('Fetched Issues:', issuesData); // 데이터를 확인하기 위해 콘솔에 출력
        setIssues(Array.isArray(issuesData) ? issuesData : []); // 데이터를 배열로 설정
      } catch (error) {
        console.error('Failed to fetch issues:', error);
        setIssues([]); // 오류가 발생할 경우 빈 배열로 설정
      }
    };

    loadIssues();
  }, []);

  const handleClickIssue = (issueId) => {
    navigate(`/issue/${issueId}`);
  };

  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    setFilter((prevFilter) =>
      prevFilter.includes(value)
        ? prevFilter.filter((item) => item !== value)
        : [...prevFilter, value]
    );
  };

  // 필터링을 잠시 제거하여 모든 데이터를 출력해봅니다.
  const filteredData = issues;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

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
              {['new', 'assigned', 'closed', 'resolved', 'fixed'].map((status) => (
                <label key={status} className="space-x-2">
                  <input
                    type="checkbox"
                    name="filter"
                    value={status}
                    checked={filter.includes(status)}
                    onChange={handleCheckboxChange}
                    className="form-checkbox"
                  />
                  {status}
                </label>
              ))}
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
              {currentItems.length > 0 ? (
                currentItems.map((issue) => (
                  <tr key={issue.issueId} onClick={() => handleClickIssue(issue.issueId)} style={{ cursor: 'pointer' }}>
                    <td className="py-2 px-4 border-b">{issue.issueId}</td>
                    <td className="py-2 px-4 border-b">{issue.title}</td>
                    <td className="py-2 px-4 border-b">{issue.date ? new Date(issue.date).toLocaleDateString() : 'N/A'}</td>
                    <td className="py-2 px-4 border-b">{issue.assignee || 'N/A'}</td>
                    <td className="py-2 px-4 border-b">{issue.state}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-2 px-4 border-b text-center">No issues found</td>
                </tr>
              )}
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

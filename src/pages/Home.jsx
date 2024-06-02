import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api'; // 경로가 정확한지 확인하세요

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsPerPage = 8;
  const navigate = useNavigate();

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = async (stateFilter = []) => {
    setLoading(true);
    try {
      const response = await api.get('/issue/allIssues');
      const allIssues = Array.isArray(response.data) ? response.data : [];
      const filteredIssues = stateFilter.length
        ? allIssues.filter(issue => stateFilter.includes(issue.state.toLowerCase()))
        : allIssues;
      setIssues(filteredIssues);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

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

  const handleSearch = () => {
    fetchIssues(filter);
  };

  const filteredData = issues.filter((issue) => {
    const matchAssignee = searchTerm ? issue.assignee.toLowerCase().includes(searchTerm.toLowerCase()) : true;
    return matchAssignee;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredData.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
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
        
        <div className="flex justify-center p-6">
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Search
          </button>
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
                <th className="py-2 px-4 border-b">Reporter</th>
                <th className="py-2 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((issue) => (
                <tr key={issue.issueId} onClick={() => handleClickIssue(issue.issueId)} style={{ cursor: 'pointer' }}>
                  <td className="py-2 px-4 border-b">{issue.issueId}</td>
                  <td className="py-2 px-4 border-b">{issue.title}</td>
                  <td className="py-2 px-4 border-b">{issue.date}</td>
                  <td className="py-2 px-4 border-b">{issue.reporter}</td>
                  <td className="py-2 px-4 border-b">{issue.state}</td>
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

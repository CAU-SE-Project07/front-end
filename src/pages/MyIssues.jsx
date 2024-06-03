import React, { useState, useEffect, useContext } from 'react';
import api from '../api'; // api 파일을 임포트합니다.
import { UserContext } from '../context/UserContext';

const MyIssues = () => {
  const { user } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [issues, setIssues] = useState([]);
  const itemsPerPage = 5;

  useEffect(() => {
    if (user) {
      fetchIssues();
    }
  }, [user]);

  const fetchIssues = async () => {
    try {
      let response;
      if (user.userRoles.includes('Developer')) {
        response = await api.get(`/issue/assignee/${user.userId}`);
      } else if (user.userRoles.includes('Tester')) {
        response = await api.get(`/issue/reporterId/${user.userId}`);
      } else if (user.userRoles.includes('PL')) {
        response = await api.get('/issue/issuesByStates', { params: { state: 'NEW' } });
      }

      if (response && response.status === 200) {
        setIssues(response.data);
      } else {
        console.error('이슈 데이터를 가져오는 데 실패했습니다.');
      }
    } catch (error) {
      console.error('API 호출 중 오류가 발생했습니다:', error);
    }
  };

  // 현재 페이지의 데이터 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentIssues = issues.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 번호를 렌더링하기 위한 로직
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(issues.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-6">My issues</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b"># Issue num.</th>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Reported Date</th>
              <th className="py-2 px-4 border-b">Assignee</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentIssues.map((issue) => (
              <tr key={issue.issueId}>
                <td className="py-2 px-4 border-b">{issue.issueId}</td>
                <td className="py-2 px-4 border-b">{issue.title}</td>
                <td className="py-2 px-4 border-b">{issue.date}</td>
                <td className="py-2 px-4 border-b">{issue.assignee}</td>
                <td className="py-2 px-4 border-b">
                  <span className="px-2 py-1 text-xs font-semibold text-purple-800 bg-purple-200 rounded">
                    {issue.state}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            className={`px-3 py-2 mx-1 border rounded cursor-pointer ${currentPage === pageNumber ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MyIssues;

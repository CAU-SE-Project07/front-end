import React, { useState } from 'react';


const MyIssues = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const issues = [
    { issueNum: '00002', title: '', reportedDate: '14 Feb 2019', assignee: 'Rosie Pearson', status: 'Assigned' },
    { issueNum: '00008', title: '', reportedDate: '14 Feb 2019', assignee: 'Rosie Pearson', status: 'Assigned' },
    { issueNum: '00013', title: '', reportedDate: '14 Feb 2019', assignee: 'Rosie Pearson', status: 'Assigned' },
  ];

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
      <h1 className="text-xl font-bold mb-6">My issue</h1>

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
            {currentIssues.map((issue, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{issue.issueNum}</td>
                <td className="py-2 px-4 border-b">{issue.title}</td>
                <td className="py-2 px-4 border-b">{issue.reportedDate}</td>
                <td className="py-2 px-4 border-b">{issue.assignee}</td>
                <td className="py-2 px-4 border-b">
                  <span className="px-2 py-1 text-xs font-semibold text-purple-800 bg-purple-200 rounded">
                    {issue.status}
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
            className={`px-3 py-2 mx-1 border rounded cursor-pointer ${currentPage === pageNumber}`}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MyIssues;

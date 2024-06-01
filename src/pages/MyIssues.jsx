import React from 'react';

const MyIssues = () => {
  const issues = [
    { issueNum: '00002', title: '', reportedDate: '14 Feb 2019', assignee: 'Rosie Pearson', status: 'Assigned' },
    { issueNum: '00008', title: '', reportedDate: '14 Feb 2019', assignee: 'Rosie Pearson', status: 'Assigned' },
    { issueNum: '00013', title: '', reportedDate: '14 Feb 2019', assignee: 'Rosie Pearson', status: 'Assigned' },
    // Add more issues as needed
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">My issue</h1>
      
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
            {issues.map((issue, index) => (
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
        <nav>
          <ul className="inline-flex items-center -space-x-px">
            <li>
              <button className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">1</button>
            </li>
            <li>
              <button className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</button>
            </li>
            <li>
              <button className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">3</button>
            </li>
            <li>
              <button className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">4</button>
            </li>
            <li>
              <button className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">5</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MyIssues;
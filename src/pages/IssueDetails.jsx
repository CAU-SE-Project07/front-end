import React from 'react';
import { useParams } from 'react-router-dom';

const dummyData = [
  // 이슈 데이터
  { issueNum: 1, title: 'Issue 1', reportedDate: '2024-05-01', assignee: 'John Doe', status: 'new', reporter: 'Reporter 1', priority: 'major', description: 'Description of issue 1' },
  { issueNum: 2, title: 'Issue 2', reportedDate: '2024-05-02', assignee: 'Jane Smith', status: 'closed', reporter: 'Reporter 2', priority: 'minor', description: 'Description of issue 2' },
  { issueNum: 3, title: 'Issue 3', reportedDate: '2024-05-03', assignee: 'Alice Johnson', status: 'resolved', reporter: 'Reporter 3', priority: 'critical', description: 'Description of issue 3' },
  { issueNum: 4, title: 'Issue 4', reportedDate: '2024-05-04', assignee: 'Bob Lee', status: 'new', reporter: 'Reporter 4', priority: 'trivial', description: 'Description of issue 4' },
  { issueNum: 5, title: 'Issue 5', reportedDate: '2024-05-05', assignee: 'Chris Kim', status: 'new', reporter: 'Reporter 5', priority: 'blocker', description: 'Description of issue 5' },
  { issueNum: 6, title: 'Issue 6', reportedDate: '2024-05-06', assignee: 'David Park', status: 'fixed', reporter: 'Reporter 6', priority: 'major', description: 'Description of issue 6' },
  { issueNum: 7, title: 'Issue 7', reportedDate: '2024-05-07', assignee: 'John Doe', status: 'new', reporter: 'Reporter 7', priority: 'minor', description: 'Description of issue 7' },
  { issueNum: 8, title: 'Issue 8', reportedDate: '2024-05-08', assignee: 'Frank White', status: 'resolved', reporter: 'Reporter 8', priority: 'critical', description: 'Description of issue 8' },
  { issueNum: 9, title: 'Issue 9', reportedDate: '2024-05-09', assignee: 'Grace Brown', status: 'assigned', reporter: 'Reporter 9', priority: 'blocker', description: 'Description of issue 9' },
  { issueNum: 10, title: 'Issue 10', reportedDate: '2024-05-10', assignee: 'Hank Black', status: 'new', reporter: 'Reporter 10', priority: 'major', description: 'Description of issue 10' },
];

const IssueDetails = () => {
  const { issueNum } = useParams();
  const issue = dummyData.find(issue => issue.issueNum === parseInt(issueNum));

  if (!issue) {
    return <div>이슈를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="grid gap-5 p-5 bg-white w-4/5 mx-auto">
      <h2 className="text-2xl font-bold mb-2">이슈 확인 및 수정</h2>

      <div className="bg-[#DDF1FF] p-5 rounded-lg shadow-md">
        <h2 className="text-l font-semibold"># 이슈 번호: {issue.issueNum}</h2>
        <h1 className="text-xl font-medium">{issue.title}</h1>
        <div className="h-[1px] bg-gray-800 my-4"></div>
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div>Reporter: {issue.reporter}</div>
          <div>Reported Date: {issue.reportedDate}</div>
          <div>이슈 상태: {issue.status}</div>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div>우선 순위: {issue.priority}</div>
          <div>담당자(Assignee): {issue.assignee}</div>
          <div></div>
        </div>
        <div className="h-[1px] bg-gray-800 my-4"></div>
        <p className="text-gray-700">
          {issue.description}
        </p>
      </div>

      <h2 className="text-2xl font-semibold">이슈 수정</h2>
      <div className="bg-[#DDF1FF] p-5 rounded-lg shadow-md">
        <div className="mb-5">
          <div>
            <h1 className="text-xl font-medium mb-2">{issue.title}</h1>
            <div className="mt-4">
              <textarea placeholder="수정할 내용을 적어주세요" className="w-full p-2 h-36 border rounded"></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#DDF1FF] p-5 rounded-lg shadow-md">
        <div className="mb-5 flex items-center">
          <label className="block mb-1 font-semibold mr-2">우선 순위 </label>
          <select className="p-2 border rounded w-1/5">
            <option value="blocker">blocker</option>
            <option value="critical">critical</option>
            <option value="major">major</option>
            <option value="minor">minor</option>
            <option value="trivial">trivial</option>
          </select>
        </div>
        <div className="mb-5 flex items-center">
          <label className="block mb-1 font-semibold mr-2">담당자 </label>
          <select className="p-2 border rounded w-1/5">
            <option>담당자1</option>
            <option>담당자2</option>
            <option>담당자3</option>
          </select>
        </div>
        <div className="mb-5">
          <label className="block mb-1 font-semibold">이슈 상태:</label>
          <div className="flex space-x-4 mt-2">
            <label><input type="radio" name="status" value="new" className="mr-2" /> NEW</label>
            <label><input type="radio" name="status" value="assigned" className="mr-2" /> ASSIGNED</label>
            <label><input type="radio" name="status" value="fixed" className="mr-2" /> FIXED</label>
            <label><input type="radio" name="status" value="resolved" className="mr-2" /> RESOLVED</label>
            <label><input type="radio" name="status" value="closed" className="mr-2" /> CLOSED</label>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold">Comment</h2>
      <div className="bg-[#DDF1FF] p-5 rounded-lg shadow-md">
        <div className="mb-5">
          <div>
            <input type="text" placeholder="코멘트 제목" className="w-full p-2 mb-2 border rounded" />
            <div className="mt-4">
              <textarea placeholder="수정할 내용을 적어주세요" className="w-full p-2 h-36 border rounded"></textarea>
            </div>
            <button className="w-32 mt-4 p-2 bg-blue-900 text-white rounded">코멘트 등록</button>
          </div>
        </div>
      </div>

      <button className="w-1/5 mx-auto p-3 bg-blue-900 text-white rounded">변경 사항 적용하기</button>
    </div>
  );
};

export default IssueDetails;
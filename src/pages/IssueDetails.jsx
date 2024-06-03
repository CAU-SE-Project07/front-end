import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

const IssueDetails = () => {
  const { issueNum } = useParams();
  const [issue, setIssue] = useState(null);
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('major');
  const [assignee, setAssignee] = useState('');
  const [status, setStatus] = useState('new');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]); // 사용자 목록 상태 추가

  useEffect(() => {
    const fetchIssueDetails = async () => {
      try {
        const response = await api.get(`/issue/issueTitle/${issueNum}`);
        const issueData = response.data.list[0];
        setIssue(issueData);
        setDescription(issueData.description);
        setPriority(issueData.priority);
        setAssignee(issueData.assignee);
        setStatus(issueData.state);
      } catch (error) {
        console.error('Error fetching issue details:', error);
      }
    };
    
    const fetchUsers = async () => {
      try {
        const response = await api.get('/member/allUsers'); // 모든 사용자 목록을 가져오는 API 호출
        setUsers(response.data.list);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchIssueDetails();
    fetchUsers(); // 사용자 목록 가져오기 호출
  }, [issueNum]);

  const handleUpdateIssue = async () => {
    try {
      const response = await api.put('/issue/updateIssue', {
        title: issue.title,
        description,
        date: new Date().toISOString(),
        assignee,
        priority,
        state: status,
      });

      if (response.data.code === 0) {
        alert('이슈가 성공적으로 업데이트되었습니다.');
        setIssue(response.data.list[0]);
      } else {
        alert('이슈 업데이트에 실패했습니다: ' + response.data.msg);
      }
    } catch (error) {
      console.error('Error updating issue:', error);
      alert('API 호출 중 오류가 발생했습니다:', error.message);
    }
  };

  const handleAddComment = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    try {
      const response = await api.post('/comment/addComment', {
        content: comment,
        date: new Date().toISOString(),
        userId: user.userId,
        issueTitle: issue.title,
      });

      if (response.data.code === 0) {
        alert('코멘트가 성공적으로 추가되었습니다.');
        setComments([...comments, { content: comment, date: new Date().toISOString(), userId: user.userId }]);
        setComment('');
      } else {
        alert('코멘트 추가에 실패했습니다: ' + response.data.msg);
      }
    } catch (error) {
      console.error('Error adding comment:', error);
      alert('API 호출 중 오류가 발생했습니다:', error.message);
    }
  };

  if (!issue) {
    return <div>이슈를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="grid gap-5 p-5 bg-white w-4/5 mx-auto">
      <h2 className="text-2xl font-bold mb-2">이슈 확인 및 수정</h2>

      <div className="bg-[#DDF1FF] p-5 rounded-lg shadow-md">
        <h2 className="text-l font-semibold"># 이슈 번호: {issue.issueNum}</h2>
        <h1 className="text-xl font-medium">이슈 제목: {issue.title}</h1>
        <div className="h-[1px] bg-gray-800 my-4"></div>
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div>Reporter: {issue.reporter}</div>
          <div>Reported Date: {issue.reportedDate}</div>
          <div>이슈 상태: {issue.state}</div>
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
            <h1 className="text-xl font-medium mb-2">이슈 제목: {issue.title}</h1>
            <div className="mt-4">
              <textarea
                placeholder="수정할 내용을 적어주세요"
                className="w-full p-2 h-36 border rounded"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#DDF1FF] p-5 rounded-lg shadow-md">
        <div className="mb-5 flex items-center">
          <label className="block mb-1 font-semibold mr-2">우선 순위 </label>
          <select
            className="p-2 border rounded w-1/5"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="blocker">blocker</option>
            <option value="critical">critical</option>
            <option value="major">major</option>
            <option value="minor">minor</option>
            <option value="trivial">trivial</option>
          </select>
        </div>
        <div className="mb-5 flex items-center">
          <label className="block mb-1 font-semibold mr-2">담당자 </label>
          <select
            className="p-2 border rounded w-1/5"
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
          >
            {users.map((user) => (
              <option key={user.userId} value={user.userId}>{user.userId}</option>
            ))}
          </select>
        </div>
        <div className="mb-5">
          <label className="block mb-1 font-semibold">이슈 상태:</label>
          <div className="flex space-x-4 mt-2">
            <label><input type="radio" name="status" value="new" className="mr-2" checked={status === 'new'} onChange={(e) => setStatus(e.target.value)} /> NEW</label>
            <label><input type="radio" name="status" value="assigned" className="mr-2" checked={status === 'assigned'} onChange={(e) => setStatus(e.target.value)} /> ASSIGNED</label>
            <label><input type="radio" name="status" value="fixed" className="mr-2" checked={status === 'fixed'} onChange={(e) => setStatus(e.target.value)} /> FIXED</label>
            <label><input type="radio" name="status" value="resolved" className="mr-2" checked={status === 'resolved'} onChange={(e) => setStatus(e.target.value)} /> RESOLVED</label>
            <label><input type="radio" name="status" value="closed" className="mr-2" checked={status === 'closed'} onChange={(e) => setStatus(e.target.value)} /> CLOSED</label>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold">Comment</h2>
      <div className="bg-[#DDF1FF] p-5 rounded-lg shadow-md">
        <div className="mb-5">
          <div>
            <input
              type="text"
              placeholder="코멘트 내용"
              className="w-full p-2 mb-2 border rounded"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              className="w-32 mt-4 p-2 bg-blue-900 text-white rounded"
              onClick={handleAddComment}
            >
              코멘트 등록
            </button>
          </div>
          <div className="mt-4">
            {comments.map((c, index) => (
              <div key={index} className="mb-2 p-2 border rounded">
                <div className="font-semibold">{c.userId}</div>
                <div>{c.date}</div>
                <div>{c.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        className="w-1/5 mx-auto p-3 bg-blue-900 text-white rounded"
        onClick={handleUpdateIssue}
      >
        변경 사항 적용하기
      </button>
    </div>
  );
};

export default IssueDetails;
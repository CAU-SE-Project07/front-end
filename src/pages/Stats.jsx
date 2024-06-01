import React from 'react';

const IssueDetails = () => {
  return (
    <div className="grid gap-5 p-5 bg-white w-4/5 mx-auto font-sans" style={{ fontSize: '16px' }}>
      <div className="bg-[#ADC8FF] p-5 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">이슈 확인 및 수정</h1>
        <div className="border p-4 bg-gray-50 mb-5">
          <h2 className="text-xl font-semibold mb-2"># 이슈 번호</h2>
          <h3 className="text-lg font-medium mb-2">이슈 제목(Incorporate footnotes into Trac)</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Reporter</li>
            <li>Reported Date</li>
            <li>이슈 상태</li>
            <li>우선 순위</li>
            <li>담당자(Assignee)</li>
          </ul>
          <p className="text-gray-700">
            저녁이 되어 노을이 지기 시작할 때, 하늘은 분홍빛과 주황빛으로 물들었다. 밤이 되어 달빛이 반짝이며 천천히 내려앉기 시작했다. 
            길가 옆으로 나무 그림자는 서서히 길어지며, 불빛은 사라진 어둠속으로 번져갔다. 나는 작은 언덕 위에 앉아 
            경치를 바라보았다. 시간이 흐를수록 점점 더 어두워지고, 나는 깊은 생각에 잠겼다. 하루 동안 일어났던 일들, 
            그리고 앞으로 다가올 일들에 대해 생각하게 되었다.
          </p>
        </div>
      </div>
      
      <div className="bg-[#ADC8FF] p-5 rounded-lg shadow-md">
        <div className="mb-5">
          <h2 className="text-2xl font-semibold mb-4">이슈 수정</h2>
          <div className="border p-4 bg-gray-50">
            <input type="text" placeholder="이슈 제목(Incorporate footnotes into Trac)" className="w-full p-2 mb-2 border rounded" />
            <textarea placeholder="수정할 내용을 적어주세요" className="w-full p-2 h-36 border rounded"></textarea>
          </div>
        </div>
      </div>

      <div className="bg-[#ADC8FF] p-5 rounded-lg shadow-md">
        <div className="mb-5">
          <label className="block mb-1 font-semibold">우선 순위:</label>
          <select className="ml-2 p-2 border rounded">
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
        <div className="mb-5">
          <label className="block mb-1 font-semibold">담당자:</label>
          <select className="ml-2 p-2 border rounded">
            <option>담당자1</option>
            <option>담당자2</option>
            <option>담당자3</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-semibold">이슈 상태:</label>
          <div className="flex space-x-4 mt-2">
            <label><input type="radio" name="status" value="new" className="mr-2" /> New</label>
            <label><input type="radio" name="status" value="assigned" className="mr-2" /> Assigned</label>
            <label><input type="radio" name="status" value="fixed" className="mr-2" /> Fixed</label>
            <label><input type="radio" name="status" value="resolved" className="mr-2" /> Resolved</label>
            <label><input type="radio" name="status" value="closed" className="mr-2" /> Closed</label>
          </div>
        </div>
      </div>

      <div className="bg-[#ADC8FF] p-5 rounded-lg shadow-md">
        <div className="mb-5">
          <h2 className="text-2xl font-semibold mb-4">Comment</h2>
          <div className="border p-4 bg-gray-50">
            <input type="text" placeholder="User ID" className="w-full p-2 mb-2 border rounded" />
            <textarea placeholder="내용을 작성해주세요" className="w-full p-2 h-24 border rounded"></textarea>
            <button className="w-30% mt-4 p-2 bg-blue-500 text-white rounded">코멘트 등록</button>
          </div>
        </div>
      </div>

      <button className="w-2/5 mx-auto p-3 bg-blue-600 text-white rounded">변경 사항 적용하기</button>
    </div>
  );
};

export default IssueDetails;
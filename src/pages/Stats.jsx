import React from 'react';

const IssueDetails = () => {
  return (
      <div className="grid gap-5 p-5 bg-white w-4/5 mx-auto">
      <h2 className="text-2xl font-bold mb-2">이슈 확인 및 수정</h2>

      <div class="bg-[#DDF1FF] p-5 rounded-lg shadow-md">
        <h2 class="text-l font-semibold"># 이슈 번호</h2>
        <h1 class="text-xl font-medium">이슈 제목(Incorporate footnotes into Trac)</h1>
        <div class="h-[1px] bg-gray-800 my-4"></div>
          <div class="grid grid-cols-3 gap-2 mb-4">
            <div>Reporter</div>
            <div>Reported Date</div>
            <div>이슈 상태</div>
          </div>
        <div class="grid grid-cols-3 gap-2 mb-4">
          <div>우선 순위</div>
            <div>담당자(Assignee)</div>
          <div></div>
        </div>
        <div class="h-[1px] bg-gray-800 my-4"></div>
        <p class="text-gray-700">
          저녁이 되어 노을이 지기 시작할 때, 하늘은 분홍빛과 주황빛으로 물들었다. 밤이 되어 달빛이 반짝이며 천천히 내려앉기 시작했다. 
          길가 옆으로 나무 그림자는 서서히 길어지며, 불빛은 사라진 어둠속으로 번져갔다. 나는 작은 언덕 위에 앉아 경치를 바라보았다. 
          시간이 흐를수록 점점 더 어두워지고, 나는 깊은 생각에 잠겼다. 하루 동안 일어났던 일들, 그리고 앞으로 다가올 일들에 대해 
          생각하게 되었다.
        </p>
      </div>
      
      <h2 className="text-2xl font-semibold">이슈 수정</h2>
      <div className="bg-[#DDF1FF] p-5 rounded-lg shadow-md">
        <div className="mb-5">
          <div>
            <input type="text" placeholder="이슈 제목(Incorporate footnotes into Trac)" className="w-full p-2 mb-2 border rounded" />
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
            <option option value="blocker">blocker</option>
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
            <input type="text" placeholder="이슈 제목(Incorporate footnotes into Trac)" className="w-full p-2 mb-2 border rounded" />
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
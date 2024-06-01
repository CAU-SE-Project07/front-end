import React from 'react';

const IssueDetails = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>이슈 확인 및 수정</h1>
      
      <div style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px' }}>
        <h2># 이슈 번호</h2>
        <h3>이슈 제목(Incorporate footnotes into Trac)</h3>
        <hr />
        <ul>
          <li>Reporter</li>
          <li>Reported Date</li>
          <li>이슈 상태</li>
          <li>우선 순위</li>
          <li>담당자(Assignee)</li>
        </ul>
        <hr />
        <p>
          저녁이 되어 노을이 지기 시작할 때, 하늘은 분홍빛과 주황빛으로 물들었다. 밤이 되어 달빛이 반짝이며 천천히 내려앉기 시작했다. 
          길가 옆으로 나무 그림자는 서서히 길어지며, 불빛은 사라진 어둠속으로 번져갔다. 나는 작은 언덕 위에 앉아 
          경치를 바라보았다. 시간이 흐를수록 점점 더 어두워지고, 나는 깊은 생각에 잠겼다. 하루 동안 일어났던 일들, 
          그리고 앞으로 다가올 일들에 대해 생각하게 되었다.
        </p>
      </div>
      
      <h2>이슈 수정</h2>
      
      <div style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px' }}>
        <input type="text" placeholder="이슈 제목(Incorporate footnotes into Trac)" style={{ width: '100%', marginBottom: '10px' }} />
        <textarea placeholder="수정할 내용을 적어주세요" style={{ width: '100%', height: '150px' }}></textarea>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>
          우선 순위:
          <select style={{ marginLeft: '10px' }}>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </label>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <label>
          담당자:
          <select style={{ marginLeft: '10px' }}>
            <option>담당자1</option>
            <option>담당자2</option>
            <option>담당자3</option>
          </select>
        </label>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <label>
          이슈 상태:
          <input type="radio" name="status" value="new" style={{ marginLeft: '10px' }} /> New
          <input type="radio" name="status" value="assigned" style={{ marginLeft: '10px' }} /> Assigned
          <input type="radio" name="status" value="fixed" style={{ marginLeft: '10px' }} /> Fixed
          <input type="radio" name="status" value="resolved" style={{ marginLeft: '10px' }} /> Resolved
          <input type="radio" name="status" value="closed" style={{ marginLeft: '10px' }} /> Closed
        </label>
      </div>
      
      <h2>Comment</h2>
      
      <div style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px' }}>
        <input type="text" placeholder="User ID" style={{ width: '100%', marginBottom: '10px' }} />
        <textarea placeholder="내용을 작성해주세요" style={{ width: '100%', height: '100px' }}></textarea>
        <button style={{ display: 'block', margin: '10px auto' }}>코멘트 등록</button>
      </div>
      
      <button style={{ display: 'block', margin: '20px auto' }}>변경 사항 적용하기</button>
    </div>
  );
};

export default IssueDetails;
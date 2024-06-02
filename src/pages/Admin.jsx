import React, { useState, useEffect } from 'react';
import api from '../api';

const Admin = () => {
  const [projectName, setProjectName] = useState(localStorage.getItem('projectName') || '');
  const [projectDescription, setProjectDescription] = useState(localStorage.getItem('projectDescription') || '');
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [userInfo, setUserInfo] = useState({
    userID: '',
    password: '',
    email: '',
    name: '',
    role: 'Developer'
  });

  const fetchUsers = async () => {
    try {
      const response = await api.get('/member/allUsers');
      const fetchedUsers = response.data.list.map(user => ({
        memberId: user.memberId,
        userID: user.userId,
        name: user.userNm,
        role: user.userRoles,
        email: user.email || ''
      }));
      console.log('Fetched users:', fetchedUsers);
      setUsers(fetchedUsers);
    } catch (error) {
      console.error('Error fetching users:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value);
    localStorage.setItem('projectName', e.target.value);
  };

  const handleProjectDescriptionChange = (e) => {
    setProjectDescription(e.target.value);
    localStorage.setItem('projectDescription', e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    });
  };

  const handleAddUser = async () => {
    const { userID, password, email, name, role } = userInfo;
    if (!userID || !password || !email || !name || !role) {
      alert('정보를 모두 입력해주세요');
      return;
    }

    try {
      const existingUser = users.find(user => user.userID === userID);
      if (existingUser) {
        alert('해당 userID가 이미 등록되어 있습니다. 정보만 수정됩니다.');
        const response = await api.put('/member/updateMember', {
          memberId: existingUser.memberId,
          userId: userID,
          userNm: name,
          userPwd: password,
          userChkPwd: password,
          userRoles: role,
          nickNm: name,
          email: email,
          projectNm: projectName
        });
        setUsers(users.map(user => (user.userID === userID ? response.data : user)));
      } else {
        const response = await api.post('/member/addMember', {
          memberId: 0,
          userId: userID,
          userNm: name,
          userPwd: password,
          userChkPwd: password,
          userRoles: role,
          nickNm: name,
          email: email,
          projectNm: projectName
        });
        alert('User가 추가되었습니다');
        setUsers([...users, response.data]);
      }

      setUserInfo({ userID: '', password: '', email: '', name: '', role: 'Developer' });
      fetchUsers();  // Refresh the user list after adding/updating user
    } catch (error) {
      console.error('Error adding/updating user:', error.response ? error.response.data : error.message);
      alert('사용자 추가/수정에 실패했습니다.');
    }
  };

  const handleSelectUser = (userID) => {
    setSelectedUsers((prevSelectedUsers) =>
      prevSelectedUsers.includes(userID)
        ? prevSelectedUsers.filter((user) => user !== userID)
        : [...prevSelectedUsers, userID]
    );
  };

  const handleRemoveSelectedUsers = async () => {
    try {
      await Promise.all(
        selectedUsers.map(userID =>
          api.delete(`/member/deleteMember/${userID}`)
        )
      );
      alert('선택된 사용자가 삭제되었습니다.');
      fetchUsers();  // Refresh the user list after removing selected users
    } catch (error) {
      console.error('Error removing users:', error);
      alert('사용자 삭제에 실패했습니다.');
    } finally {
      setSelectedUsers([]);
    }
  };

  const handleSaveProject = async () => {
    try {
      const response = await api.post('/project/addProject', {
        projectNm: projectName,
        projectDesc: projectDescription
      });
      console.log('Project saved:', response.data);
      alert('프로젝트 제목과 상세내용이 저장되었습니다.');
      localStorage.setItem('projectName', projectName);
      localStorage.setItem('projectDescription', projectDescription);
    } catch (error) {
      console.error('Error saving project:', error.response ? error.response.data : error.message);
      alert('프로젝트 저장에 실패했습니다.');
    }
  };

  return (
    <div className="p-5">
      <div className="max-w-2xl mx-auto">
        <h2 className="mb-5 text-xl font-bold">Admin</h2>
      </div>
      <div className="bg-[#DDF1FF] rounded-lg p-5 mb-5 max-w-2xl mx-auto">
        <div className="mb-5">
          <label htmlFor="projectName" className="block mb-2">Project Name</label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={handleProjectNameChange}
            placeholder="Enter your project name"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="projectDescription" className="block mb-2">Project Description</label>
          <textarea
            id="projectDescription"
            value={projectDescription}
            onChange={handleProjectDescriptionChange}
            placeholder="Enter your project description"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <button className="bg-[#2353A5] text-white px-3 py-1 rounded hover:bg-blue-900 mb-5" onClick={handleSaveProject}>
          Save
        </button>
      </div>

      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-bold mb-5">Manage User Accounts</h2>
      </div>
      <div className="bg-[#DDF1FF] rounded-lg p-5 max-w-2xl mx-auto">
        <div className="mb-5">
          <div className="flex items-center mb-4">
            <label htmlFor="userID" className="w-24 mr-2">User ID:</label>
            <input
              type="text"
              id="userID"
              name="userID"
              placeholder="User ID"
              value={userInfo.userID}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="password" className="w-24 mr-2">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={userInfo.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="email" className="w-24 mr-2">e-mail:</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="e-mail"
              value={userInfo.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="name" className="w-24 mr-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={userInfo.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex items-center mb-4">
            <label className="w-24 mr-2">Role:</label>
            <div className="flex items-center ml-6">
              <label className="flex items-center mr-6">
                <input
                  type="radio"
                  name="role"
                  value="Tester"
                  checked={userInfo.role === 'Tester'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Tester
              </label>
              <label className="flex items-center mr-6">
                <input
                  type="radio"
                  name="role"
                  value="PL"
                  checked={userInfo.role === 'PL'}
                  onChange={handleChange}
                  className="mr-2"
                />
                PL
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="Developer"
                  checked={userInfo.role === 'Developer'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Developer
              </label>
            </div>
          </div>
          <button className="bg-[#2353A5] text-white px-3 py-1 rounded hover:bg-blue-900" onClick={handleAddUser}>ADD</button>
        </div>
        <table className="w-full border-collapse mb-5">
          <thead>
            <tr>
              <th className="border px-4 py-2">Select</th>
              <th className="border px-4 py-2">Role</th>
              <th className="border px-4 py-2">User ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">E-mail</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="border px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.userID)}
                    onChange={() => handleSelectUser(user.userID)}
                  />
                </td>
                <td className="border px-4 py-2 text-center">{user.role}</td>
                <td className="border px-4 py-2 text-center">{user.userID}</td>
                <td className="border px-4 py-2 text-center">{user.name}</td>
                <td className="border px-4 py-2 text-center">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="bg-[#E23812] text-white px-3 py-1 rounded hover:bg-red-700" onClick={handleRemoveSelectedUsers}>
          Remove selected accounts
        </button>
      </div>
    </div>
  );
};

export default Admin;

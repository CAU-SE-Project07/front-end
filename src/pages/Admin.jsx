import React, { useState } from 'react';

const Admin = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    email: '',
    role: 'Developer'
  });

  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleProjectDescriptionChange = (e) => {
    setProjectDescription(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    });
  };

  const handleAddUser = () => {
    setUsers([...users, userInfo]);
    setUserInfo({ username: '', password: '', email: '', role: 'Developer' });
  };

  const handleSelectUser = (username) => {
    setSelectedUsers((prevSelectedUsers) =>
      prevSelectedUsers.includes(username)
        ? prevSelectedUsers.filter((user) => user !== username)
        : [...prevSelectedUsers, username]
    );
  };

  const handleRemoveSelectedUsers = () => {
    setUsers(users.filter((user) => !selectedUsers.includes(user.username)));
    setSelectedUsers([]);
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
      </div>

      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-bold mb-5">Manage User Accounts</h2>
      </div>
      <div className="bg-[#DDF1FF] rounded-lg p-5 max-w-2xl mx-auto">
        <div className="mb-5">
          <div className="flex items-center mb-4">
            <label htmlFor="username" className="w-24 mr-2">User ID:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="User ID"
              value={userInfo.username}
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
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={handleAddUser}>ADD</button>
        </div>
        <table className="w-full border-collapse mb-5">
          <thead>
            <tr>
              <th className="border px-4 py-2">Select</th>
              <th className="border px-4 py-2">Role</th>
              <th className="border px-4 py-2">User ID</th>
              <th className="border px-4 py-2">E-mail</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="border px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.username)}
                    onChange={() => handleSelectUser(user.username)}
                  />
                </td>
                <td className="border px-4 py-2 text-center">{user.role}</td>
                <td className="border px-4 py-2 text-center">{user.username}</td>
                <td className="border px-4 py-2 text-center">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={handleRemoveSelectedUsers}>
          Remove selected accounts
        </button>
      </div>
    </div>
  );
};

export default Admin;
// src/AdminPage/Admin.js
import React, { useState } from 'react';
import './Admin.css';

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
    <div className="admin-container">
      <h1>Admin</h1>
      <div className="project-form">
        <div className="form-group">
          <label htmlFor="projectName">Project Name</label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={handleProjectNameChange}
            placeholder="Enter your project name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectDescription">Project Description</label>
          <textarea
            id="projectDescription"
            value={projectDescription}
            onChange={handleProjectDescriptionChange}
            placeholder="Enter your project description"
          />
        </div>
      </div>
      <div className="user-management">
        <h2>Manage User Accounts</h2>
        <div className="form-container">
          <div className="form-group-inline">
            <label htmlFor="username">User ID :</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="User ID"
              value={userInfo.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group-inline">
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={userInfo.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group-inline">
            <label htmlFor="email">e-mail :</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="e-mail"
              value={userInfo.email}
              onChange={handleChange}
            />
          </div>
          <div className="role-selection">
            <label>Role :</label>
            <div className="role-group">
                <div className="radio-label">
                    <input
                        type="radio"
                        name="role"
                        value="Tester"
                        checked={userInfo.role === 'Tester'}
                        onChange={handleChange}
                    />
                    <span>Tester</span>
                </div>
                <div className="radio-label">
                    <input
                        type="radio"
                        name="role"
                        value="PL"
                        checked={userInfo.role === 'PL'}
                        onChange={handleChange}
                    />
                    <span>PL</span>
                </div>
                <div className="radio-label">
                    <input
                        type="radio"
                        name="role"
                        value="Developer"
                        checked={userInfo.role === 'Developer'}
                        onChange={handleChange}
                    />
                    <span>Developer</span>
                </div>
            </div>
          </div>
          <button className="add-button" onClick={handleAddUser}>ADD</button>
        </div>
        <table className="user-table">
          <thead>
            <tr>
              <th>Select</th>
              <th>Role</th>
              <th>User ID</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.username)}
                    onChange={() => handleSelectUser(user.username)}
                  />
                </td>
                <td>{user.role}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>

              </tr>
            ))}
          </tbody>
        </table>
        <button className="remove-accounts-button" onClick={handleRemoveSelectedUsers}>
          Remove selected accounts
        </button>
      </div>
    </div>
  );
};

export default Admin;

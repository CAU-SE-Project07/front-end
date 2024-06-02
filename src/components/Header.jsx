import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api';
import logoImage from '../assets/images/logo.png';

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.userId) {
      setIsLoggedIn(true);
      setUserId(user.userId);
      fetchUserInfo(user.userId);
    }
  }, []);

  const fetchUserInfo = async (userId) => {
    try {
      const response = await api.get(`/member/${userId}`);
      console.log('API 응답 데이터:', response.data); // API 응답 데이터 확인
      setUserInfo(response.data);
    } catch (error) {
      console.error('유저 정보 불러오기 실패:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserId('');
    setUserInfo(null);
    navigate('/');
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full h-20 bg-blue-900 text-white flex items-center justify-between px-4 fixed top-0 left-0 z-10">
      <div className="flex items-center">
        <Link to="/" className="cursor-pointer">
          <img src={logoImage} alt="logo" className="h-44 w-44 p-6" />
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          <>
            <div className="relative" ref={dropdownRef}>
              <span
                style={{ color: 'white', cursor: 'pointer' }}
                onClick={toggleDropdown}
              >
                {userId}
              </span>
              {showDropdown && userInfo && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg py-2">
                  <div className="px-4 py-2 text-black">{userInfo.userId}</div>
                  <div className="px-4 py-2 text-black">{userInfo.email}</div>
                  <div className="border-t border-gray-300"></div>
                  <div className="px-4 py-2 text-black">{userInfo.userRoles}</div>
                </div>
              )}
            </div>
            <button onClick={handleLogout} className="text-white hover:text-gray-300">로그아웃</button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-white hover:text-gray-300">로그인</Link>
            <Link to="/signup" className="text-white hover:text-gray-300">회원가입</Link>
          </>
        )}
      </div>
    </header>
  );
};
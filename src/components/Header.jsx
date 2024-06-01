import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/logo.png'; 

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userImage, setUserImage] = useState('');
  const [showDropdown, setShowDropdown] = useState(false); // 드롭다운 메뉴 표시 여부

  useEffect(() => {
    // 로그인 상태와 사용자 이미지를 가져오는 API 호출 대체 예시
    const fetchUserData = async () => {
      setTimeout(() => {
        setIsLoggedIn(true);
        setUserImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxUjuMp6J34mOz5Mof17-YzNcl9FkUPAv57pi247dndA&s');
      }, 1000);
    };

    fetchUserData();
  }, []);

  // 드롭다운 메뉴 토글 함수
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="w-full h-20 bg-gray-800 text-white flex items-center justify-between px-4 fixed top-0 left-0 z-10">
      <div className="flex items-center">
        {/* <h1> 대신 img 태그를 사용하여 로고 이미지를 삽입합니다. */}
        <img src={logoImage} alt="logo" className="h-24 pl-6" />
      </div>
      {isLoggedIn ? (
        <div className="relative">
          <img
            src={userImage}
            alt="User Avatar"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={toggleDropdown}
          />
          {showDropdown && (
            <div className="absolute right-0 mt-3 w-40 bg-white text-black py-2 px-4 rounded shadow">
              <div>웨이드</div>
              <div>wade@cau.cac.kr</div>
              <hr className="my-2" />
              <div>developer</div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-white hover:text-gray-300">로그인</Link>
          <Link to="/signup" className="text-white hover:text-gray-300">회원가입</Link>
        </div>
      )}
    </header>
  );
};
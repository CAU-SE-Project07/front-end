import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/logo.png'; 

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setIsLoggedIn(true);
      setUserId(user.id);
    }
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
          <span>{userId}</span>
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
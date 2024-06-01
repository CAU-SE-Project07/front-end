import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/logo.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRememberPasswordChange = (e) => {
        setRememberPassword(e.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('/member/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            
            const data = await response.json();
            
            if (response.ok) {
                // 로그인 성공 처리
                console.log('로그인 성공:', data);
            } else {
                // 로그인 실패 처리
                console.error('로그인 실패:', data.error);
            }
        } catch (error) {
            console.error('로그인 요청 실패:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-blue-900">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-2/6" onSubmit={handleSubmit}>
                <Link to="/">
                    <img src={logoImage} alt="logo" className="mx-auto" style={{ height: '100px' }} />
                </Link>
                <p className="text-gray-600 text-sm text-center mb-6">이메일과 비밀번호를 입력하세요.</p>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">이메일 주소:</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={handleEmailChange} 
                        required 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">비밀번호:</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={handlePasswordChange} 
                        required 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-1/5 py-2 px-4 rounded focus:outline-none focus:shadow-outline">로그인</button>
                    <label htmlFor="remember" className="text-sm text-gray-600">
                        <input 
                            type="checkbox" 
                            id="remember" 
                            checked={rememberPassword}
                            onChange={handleRememberPasswordChange} 
                            className="mr-1 leading-tight focus:outline-none"
                        />
                        아이디 저장
                    </label>
                </div>
            </form>
        </div>
    );
};

export default Login;
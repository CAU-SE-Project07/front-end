import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/logo.png';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true); // 비밀번호 일치 여부

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        // 비밀번호 재확인
        setPasswordMatch(e.target.value === confirmPassword);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        // 비밀번호 재확인
        setPasswordMatch(e.target.value === password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('https://your-backend-url/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            
            const data = await response.json();
            
            if (response.ok) {
                // 회원가입 성공 처리
                console.log('회원가입 성공:', data);
            } else {
                // 회원가입 실패 처리
                console.error('회원가입 실패:', data.error);
            }
        } catch (error) {
            console.error('회원가입 요청 실패:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-blue-900">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-2 w-2/6" onSubmit={handleSubmit}>
                <Link to="/">
                    <img src={logoImage} alt="logo" className="mx-auto" style={{ height: '100px' }} />
                </Link>
                <p className="text-gray-600 text-sm text-center mb-6">회원가입을 위해 정보를 입력하세요!</p>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">이메일 주소</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={handleEmailChange} 
                        required 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">비밀번호</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={handlePasswordChange} 
                        required 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">비밀번호 재확인</label>
                    <input 
                        type="password" 
                        id="confirmPassword" 
                        value={confirmPassword} 
                        onChange={handleConfirmPasswordChange} 
                        required 
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${!passwordMatch && 'border-red-500'}`}
                    />
                    {!passwordMatch && <p className="text-red-500 text-xs">비밀번호가 일치하지 않습니다.</p>}
                    {passwordMatch && confirmPassword && <p className="text-blue-500 text-xs">비밀번호가 일치합니다.</p>}
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-auto w-2/5 py-2 px-4 rounded focus:outline-none focus:shadow-outline">회원가입</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
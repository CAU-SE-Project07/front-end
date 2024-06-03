import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImage from '../assets/images/logo.png';
import api from '../api';
import { UserContext } from '../context/UserContext';

const Login = () => {
    const { setUser } = useContext(UserContext);
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    const handleUserIdChange = (e) => {
        setUserId(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRememberPasswordChange = (e) => {
        setRememberPassword(e.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const response = await api.post('/member/login', { userId, userPwd: password });
            const data = response.data;

            if (data.code === 200) {
                console.log('로그인 성공:', data);
                alert('로그인에 성공했습니다!');
                const userData = { userId, userRoles: data.userRoles };
                localStorage.setItem('user', JSON.stringify(userData));
                setUser(userData);
                navigate('/');
            } else {
                console.error('로그인 실패:', data);
                setError(data.msg || '로그인에 실패했습니다.');
                alert('로그인에 실패했습니다: ' + (data.msg || ''));
            }
        } catch (error) {
            console.error('로그인 오류:', error);
            setError('서버와 통신할 수 없습니다.');
            alert('서버와 통신할 수 없습니다.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-blue-900">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-2/6" onSubmit={handleSubmit}>
                <Link to="/">
                    <img src={logoImage} alt="logo" className="mx-auto" style={{ height: '100px' }} />
                </Link>
                <p className="text-gray-600 text-sm text-center mb-6">아이디와 비밀번호를 입력하세요.</p>
                <div className="mb-4">
                    <label htmlFor="userId" className="block text-gray-700 text-sm font-bold mb-2">아이디:</label>
                    <input 
                        type="text" 
                        id="userId" 
                        value={userId} 
                        onChange={handleUserIdChange} 
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
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-1/5 py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        {loading ? '로딩 중...' : '로그인'}
                    </button>
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
                {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
            </form>
        </div>
    );
};

export default Login;
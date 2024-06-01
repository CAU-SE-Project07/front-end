import React, { useState } from 'react';
import './Login.css';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        // 로그인 처리 로직을 여기에 추가
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember Password:', rememberPassword);
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login to Account</h2>
                <p>Please enter your email and password to continue</p>
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={handleEmailChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={handlePasswordChange} 
                        required 
                    />
                </div>
                <button type="submit" className="login-button">Sign In</button>
            </form>
        </div>
    );
};

export default Login;

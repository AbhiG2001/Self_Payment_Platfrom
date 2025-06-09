import React from 'react';
import './Login.css'; 

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <input type="email" placeholder="Email" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <button className="login-button">Login</button>
      </div>
    </div>
  );
};

export default Login;

import React from 'react';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Sign Up</h2>
        <input type="text" placeholder="Full Name" className="signup-input" />
        <input type="email" placeholder="Email" className="signup-input" />
        <input type="password" placeholder="Password" className="signup-input" />
        <button className="signup-button">Create Account</button>
      </div>
    </div>
  );
};

export default SignUp;

import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h1 className="login-title">New Name</h1>
      <h2 className="login-subtitle">Hangman</h2>
      <div className="name-box">
        <input type="text" className="login-input" placeholder="Enter your name" />
        <button className="login-button">continue</button>
      </div>
      <div>
      <div className="loader"></div> {/* Add the loader here */}


      </div>
    </div>
  );
}

export default Login;

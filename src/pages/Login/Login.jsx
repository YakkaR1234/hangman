import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUserName }) => {
  const [name, setName] = useState("");
  const navigate = useNavigate(); // Hook to navigate to different routes

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleLogin = () => {
    if (name) {
      setUserName(name);  // Set the userName in the parent state
      navigate('/game');  // Navigate to the /game page
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">New Name</h1>
      <h2 className="login-subtitle">Hangman</h2>
      <div className="name-box">
        <input 
          type="text" 
          className="login-input" 
          placeholder="Enter your name" 
          value={name}
          onChange={handleInputChange} 
        />
        <button className="login-button" onClick={handleLogin}>
          continue
        </button>
      </div>
      <div>
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default Login;

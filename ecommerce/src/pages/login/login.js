// LoginPage.js
import React, { useState } from 'react';
import './sign.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Clear any previous error message
    setError('');
    // Handle login logic here
    alert('Logged in successfully');
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="left-section">
          <h2>Welcome Back!</h2>
          <p>If you don't have an account, <Link to="/register">Register here</Link></p>
        </div>
        
        <div className="right-section">
          <h2>Please log in to continue</h2>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input-field"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="input-field"
                required
              />
            </div>

            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div>

            <div className="login-button-wrapper">
              <button type="submit" className="login-button">Log In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

// RegisterPage.js
import React, { useState } from 'react';
import './sign.css';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setError('');
    // Handle registration logic here
    alert('Registered successfully');
  };

  return (
    <div className="register-page">
      <div className="container">
        <div className="left-section">
          <h2>New User?</h2>
          <p>Join our community now! <Link to="/login">Log in here</Link></p>
        </div>

        <div className="right-section">
          <h2>Create a New Account</h2>

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

            <div className="register-button-wrapper">
              <button type="submit" className="register-button">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

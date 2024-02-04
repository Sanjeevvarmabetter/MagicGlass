// Login.js

import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import './hostlogin.css';

const Login = () => {
    const navigate = useNavigate(); // Use the correct hook
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5009/loginHost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        setError(null);
        navigate('/host/dashboard'); // Redirect to the host's dashboard or any desired route
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Error connecting to the server');
    }
  };

  return (
    <div>
      <h2>Login as Host</h2>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/signupHost">Sign up here</a></p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;

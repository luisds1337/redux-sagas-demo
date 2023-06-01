import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../api';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    setLoading(true);

    event.preventDefault();

    const response = api.loginUser(email, password)
    if(!response.success){
      setLoading(false)
      window.alert(response.message)
    }else {
        setTimeout(() => {
            setLoading(false)
            window.location.href = '/home';
        },3000)
    }
  };

  return (
    <div className="center">
      <h1>Login</h1>
      {loading ? (
        <div>Loading....</div>
      ): (
        <>
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
      </>
      )}
    </div>
  );
};

export default LoginPage;
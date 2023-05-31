import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can add your logic to handle the login request
    // For now, let's just display the entered email and password in the console
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="center">
      <h1>Login Page</h1>
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
    </div>
  );
};

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can add your logic to handle the registration request
    // For now, let's just display the entered email and password in the console
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="center">
      <h1>Register Page</h1>
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
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" Component={LoginPage}/>
          <Route exact path="/register" Component={RegisterPage}/>
        </Routes>
    </Router>
  );
};

export default App;

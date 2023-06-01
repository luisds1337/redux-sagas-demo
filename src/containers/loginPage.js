import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loginRequest } from "../actions/userActions";

import {useNavigate} from 'react-router-dom';


const LoginPage = (props) => {
  const navigate = useNavigate();
  const { isLoading, error, loginRequest, user } = props;
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginRequest(credentials);
  };

  useEffect(() =>{
    if(user?.name){
      navigate('/home')
    }
  },[user])
  return (
    <div className="center">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.user.userData,
    isLoading: state.user.isLoading,
    error: state.user.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (credentials) => dispatch(loginRequest(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

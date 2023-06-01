import React, { useState } from "react";


import { connect } from "react-redux";
import {
  editUser,
  saveUser,
  cancelEditing,
} from "../actions/userActions";

const AccountPage = (props) => {
  const { user, isEditing, editUser, saveUser } = props;

  const [userData, setUserData] = useState(user);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    saveUser(userData)
  };

  return (
    <div className="center">
      <h1>Account Page</h1>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={userData.address}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Save</button>
          <button type="button" onClick={editUser}>
            Cancel
          </button>
        </form>
      ) : (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Address: {userData.address}</p>
          <button type="button" onClick={() => editUser()}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

// Map Redux state to component props
const mapStateToProps = (state) => {
  return {
    user: state.user,
    isEditing: state.user.isEditing,
  };
};

// Map Redux actions to component props
const mapDispatchToProps = (dispatch) => {
  return {
    editUser: () => dispatch(editUser()),
    saveUser: (userData) => dispatch(saveUser(userData)),
    cancelEditing: () => dispatch(cancelEditing()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);

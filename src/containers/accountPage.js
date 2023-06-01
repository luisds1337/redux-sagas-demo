import React from "react";


import { connect } from "react-redux";

const AccountPage = (props) => {
  const { user } = props;

  return (
    <div className="center">
      <h1>Account Page</h1>
        <div>
          <p>Name: {user?.name}</p>
          <p>Email: {user?.email}</p>
          <p>Address: {user?.address}</p>
        </div>
    </div>
  );
};

// Map Redux state to component props
const mapStateToProps = (state) => {
  return {
    user: state.user.userData,
  };
};

export default connect(mapStateToProps)(AccountPage);

/* eslint-disable import/no-anonymous-default-export */
// Mock API functions for user login and signup

// Sample database to store user information
const usersDb = {
    "luis@boats.com": {
      email: "luis@boats.com",
      password: "123456",
      data: {
        name: 'Luis Sanchez',
        email: 'luis@boats.com',
        address: '123 Miami Beach',
      }
    },
  };
  
  // Function to log in a user
  function loginUser(email, password) {
    if (usersDb.hasOwnProperty(email) && usersDb[email].password === password) {
      return usersDb[email].data
    } else {
      throw Error('invalid user')
    }
  }
  
  // Function to sign up a user
  function signupUser(email, password) {
    if (usersDb.hasOwnProperty(email)) {
      return { success: false, message: "Email already exists" };
    } else {
      usersDb[email] = { email: email, password: password };
      return { success: true, message: "Signup successful" };
    }
  }
  
  
export default {
    loginUser,
    signupUser
}
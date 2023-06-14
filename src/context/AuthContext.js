import { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState();

  // Singup Handler
  const signupHandler = async ({ email, password, firstName, lastName }) => {
    try {
      const { status, data } = await axios.post(`/api/auth/signup`, {
        email,
        password,
        firstName,
        lastName,
      });
      if (status === 200) {
        setLoggedInUser(data.user);
        localStorage.setItem('token', data.encodedToken);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Login Handler
  const loginHandler = async ({ email, password }) => {
    try {
      const { status, data } = await axios.post(`/api/auth/login`, {
        email,
        password,
      });
      if (status === 200) {
        setLoggedInUser(data.user);
        localStorage.setItem('token', data.encodedToken);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AuthContext.Provider value={(signupHandler, loginHandler)}>
      {children}
    </AuthContext.Provider>
  );
};

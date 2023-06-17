import { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState();
  const navigate = useNavigate();

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
  const loginHandler = async ({ username, password }) => {
    console.log({ username, password });
    try {
      const { status, data } = await axios.post(`/api/auth/login`, {
        username,
        password,
      });
      if (status === 200) {
        setLoggedInUser(data.user);
        localStorage.setItem('token', data.encodedToken);
        navigate('/users');
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Logout Handler
  const logoutHandler = async () => {
    localStorage.removeItem('token');
    setLoggedInUser();
    navigate('/');
  };
  return (
    <AuthContext.Provider
      value={{ signupHandler, loginHandler, loggedInUser, logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

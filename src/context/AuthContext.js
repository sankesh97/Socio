import { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useLocalStorage('loggedInUser', null);
  const [token, setToken] = useLocalStorage('token');
  const navigate = useNavigate();

  // Singup Handler
  const signupHandler = async ({
    email,
    password,
    userName,
    firstName,
    lastName,
  }) => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        email,
        password,
        firstName,
        lastName,
        userName,
      });
      setLoggedInUser(response.data.user);
      setToken(response.data.encodedToken);
      navigate('/user/home');
      console.log(loggedInUser);
    } catch (err) {
      console.log(err);
    }
  };

  // Login Handler
  const loginHandler = async ({ userName, password }) => {
    console.log({ userName, password });
    try {
      const response = await axios.post(`/api/auth/login`, {
        userName,
        password,
      });
      if (response.status === 200) {
        setToken(response.data.encodedToken);
        setLoggedInUser(response.data.foundUser);
        navigate('/user/home');
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Logout Handler
  const logoutHandler = async () => {
    setToken();
    setLoggedInUser();
    navigate('/');
  };
  return (
    <AuthContext.Provider
      value={{
        signupHandler,
        loginHandler,
        loggedInUser,
        logoutHandler,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

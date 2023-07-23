import { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState();
  const navigate = useNavigate();
  //const [errMessage, setErrMessage] = useState('');

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
      localStorage.setItem('token', response.data.encodedToken);
      navigate('/users');
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
        setLoggedInUser(response.data.foundUser);
        localStorage.setItem('token', response.data.encodedToken);
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

import { createContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import Toaster from '../components/Toaster';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useLocalStorage('loggedInUser', null);
  const [token, setToken] = useLocalStorage('token', null);
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
        Avatar: 'On',
      });
      if (response.status === 200 || 201) {
        setLoggedInUser(response.data.createdUser);
        setToken(response.data.encodedToken);
      }
    } catch (error) {
      Toaster('ERROR', error.response.data.errors[0]);
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
    } catch (error) {
      Toaster('ERROR', error.response.data.errors[0]);
    }
  };

  // Logout Handler
  const logoutHandler = async () => {
    setToken();
    setLoggedInUser();
    navigate('/');
  };

  //Add to Bookmark
  const addToBookmark = async (postId, token) => {
    try {
      const { status, data } = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        { headers: { authorization: token } }
      );
      if (status === 200 || 201)
        setLoggedInUser((prevState) => ({
          ...prevState,
          bookmarks: data.bookmarks,
        }));
      console.log(data);
    } catch (error) {
      Toaster('ERROR', error.response.data.errors[0]);
    }
  };

  // Remove from Bookmark
  const removeFromBookmark = async (postId, token) => {
    try {
      const { status, data } = await axios.post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        { headers: { authorization: token } }
      );
      if (status === 200 || 201)
        setLoggedInUser((prevState) => ({
          ...prevState,
          bookmarks: data.bookmarks,
        }));
    } catch (error) {
      Toaster('ERROR', error.response.data.errors[0]);
    }
  };

  // Get all the Bookmarks
  const getBookmarks = async (token) => {
    try {
      const { status, data } = await axios.get(`/api/users/bookmark`, {
        headers: { authorization: token },
      });
      if (status === 200)
        setLoggedInUser((prevState) => ({
          ...prevState,
          bookmarks: data.bookmarks,
        }));
    } catch (error) {
      Toaster('ERROR', error.response.data.errors[0]);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signupHandler,
        loginHandler,
        loggedInUser,
        logoutHandler,
        token,
        addToBookmark,
        removeFromBookmark,
        getBookmarks,
        setLoggedInUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

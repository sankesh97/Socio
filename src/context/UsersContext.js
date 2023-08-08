import { createContext, useState } from 'react';
import axios from 'axios';

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [userList, setUserList] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [bookmarksList, setBookmarksList] = useState([]);

  // Get All Users
  const getUsers = async () => {
    try {
      const { status, data } = await axios.get(`/api/users`);
      if (status === 200) setUserList(data.users);
    } catch (err) {
      console.log(err);
    }
  };

  // Get A User
  const GetAUser = async (userId) => {
    try {
      const { status, data } = await axios.get(`/api/users/${userId}`);
      if (status === 200) setCurrentUser(data.user);
    } catch (err) {
      console.log(err);
    }
  };

  // Edit User
  const editUser = async (userData) => {
    try {
      const { status, data } = await axios.post(
        `/api/users/edit`,
        { userData },
        { authorization: localStorage.getItem('token') }
      );
      if (status === 200) setCurrentUser(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  //Add to Bookmark
  const addToBookmark = async (postId, token) => {
    try {
      const { status, data } = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        { headers: { authorization: token } }
      );
      if (status === 200 || 201) setBookmarksList(data.bookmarks);
      console.log(data);
    } catch (error) {
      console.log(error);
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
      if (status === 200 || 201) setBookmarksList(data.bookmarks);
    } catch (error) {
      console.log(error);
    }
  };

  // Get all the Bookmarks
  const getBookmarks = async (token) => {
    try {
      const { status, data } = await axios.get(`/api/users/bookmark`, {
        headers: { authorization: token },
      });
      if (status === 200) setBookmarksList(data.bookmarks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UsersContext.Provider
      value={{
        userList,
        currentUser,
        getUsers,
        GetAUser,
        editUser,
        addToBookmark,
        removeFromBookmark,
        bookmarksList,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };

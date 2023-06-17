import { createContext, useContext, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userList, setUserList] = useState([]);
  const [currentUser, setCurrentUser] = useState();

  // Get All Users
  const getUsers = async () => {
    try {
      const { status, data } = await axios.get(`/api/users`);
      if (status === 200) setUserList(data.users);
    } catch (err) {
      console.log(err);
    }
  };

  // Get A Users
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
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <UserContext.Provider
      value={{ userList, currentUser, getUsers, GetAUser, editUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

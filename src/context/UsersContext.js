import { createContext, useState } from 'react';
import axios from 'axios';

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
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
    } catch (err) {
      console.log(err);
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
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };

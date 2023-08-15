import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import Toaster from '../components/Toaster';

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [userList, setUserList] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const { setLoggedInUser } = useContext(AuthContext);

  // Get All Users
  const getUsers = async () => {
    try {
      const { status, data } = await axios.get(`/api/users`);

      if (status === 200) setUserList(data.users);
    } catch (error) {
      Toaster('ERROR', error.response.data.errors[0]);
    }
  };

  // Get A User
  const GetAUser = async (userId) => {
    try {
      const { status, data } = await axios.get(`/api/users/${userId}`);
      if (status === 200) setCurrentUser(data.user);
    } catch (error) {
      Toaster('ERROR', error.response.data.errors[0]);
    }
  };

  // Edit User
  const editUser = async (userData) => {
    try {
      const { status, data } = await axios.post(
        `/api/users/edit`,
        { userData },
        { headers: { authorization: localStorage.getItem('token') } }
      );
      if (status === 200 || 201) {
        console.log(data);
        setLoggedInUser(data.user);
        setCurrentUser(data.user);
      }
      Toaster('SUCCESS', 'Profile Edited Successfully');
    } catch (error) {
      Toaster('ERROR', error.response.data.errors[0]);
    }
  };

  //Follow User
  const FollowUser = async (followuserId) => {
    try {
      const { status, data } = await axios.post(
        `/api/users/follow/${followuserId}`,
        {},
        { headers: { authorization: localStorage.getItem('token') } }
      );
      if (status === 200) {
        setLoggedInUser(data.user);
        setUserList((prevState) =>
          prevState.reduce(
            (newUserList, currentUser) =>
              data.followUser._id === currentUser._id
                ? [...newUserList, data.followUser]
                : [...newUserList],
            []
          )
        );
      }
      Toaster('SUCCESS', 'Followed Successfully');
    } catch (error) {
      Toaster('ERROR', error.response.data.errors[0]);
    }
  };

  //UnFollow User
  const UnFollowUser = async (followuserId) => {
    try {
      const { status, data } = await axios.post(
        `/api/users/unfollow/${followuserId}`,
        {},
        { headers: { authorization: localStorage.getItem('token') } }
      );
      if (status === 200) {
        setLoggedInUser(data.user);
        setUserList((prevState) =>
          prevState.reduce(
            (newUserList, currentUser) =>
              data.followUser._id === currentUser._id
                ? [...newUserList, data.followUser]
                : [...newUserList],
            []
          )
        );
      }
      Toaster('SUCCESS', 'Unfollowed Successfully');
    } catch (error) {
      Toaster('ERROR', error.response.data.errors[0]);
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
        FollowUser,
        UnFollowUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };

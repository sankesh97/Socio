import { createContext, useState } from 'react';
import axios from 'axios';

const FollowUnFollowContext = createContext();

export const FollowUnFollowProvider = ({ children }) => {
  const [userList, setUserList] = useState([]);
  const [currentUser, setCurrentUser] = useState();

  // Follow User
  const getUsers = async (followUserId) => {
    try {
      const { status, data } = await axios.post(
        `/api/users/follow/${followUserId}`,
        { authorization: localStorage.getItem('token') }
      );
      if (status === 200) setUserList(data.users);
    } catch (err) {
      console.log(err);
    }
  };

  // Un-Follow User
  const GetAUser = async (userId) => {
    try {
      const { status, data } = await axios.get(`/api/users/${userId}`);
      if (status === 200) setCurrentUser(data.user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FollowUnFollowContext.Provider value={{}}>
      {children}
    </FollowUnFollowContext.Provider>
  );
};

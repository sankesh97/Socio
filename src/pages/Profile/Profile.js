import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { PostsContext } from '../../context/PostsContext';
import { AuthContext } from '../../context/AuthContext';
import { UsersContext } from '../../context/UsersContext';

import ProfileComponent from '../../components/ProfileComponent';

const Profile = () => {
  const { userId } = useParams();
  const { loggedInUser } = useContext(AuthContext);
  const { userNamePostList, getPostsByUsername } = useContext(PostsContext);
  const { userList, getUsers } = useContext(UsersContext);

  useEffect(() => {
    getUsers();
    getPostsByUsername(userId ? userId : loggedInUser.userName);
  }, []);

  return (
    <>
      {loggedInUser ? (
        <ProfileComponent
          userNamePostList={userNamePostList}
          user={
            userId ? userList.find((user) => user._id === userId) : loggedInUser
          }
          userList={userList}
        />
      ) : (
        <h3 className='text-center'>Please Login</h3>
      )}
    </>
  );
};
export default Profile;

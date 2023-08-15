import { useContext } from 'react';
import { UsersContext } from '../context/UsersContext';
import { AuthContext } from '../context/AuthContext';

const FollowButton = ({ userId }) => {
  const { FollowUser, UnFollowUser } = useContext(UsersContext);
  const { loggedInUser } = useContext(AuthContext);

  return (
    <>
      {loggedInUser.following.find((user) => user._id === userId) ===
      undefined ? (
        <button
          onClick={() => {
            FollowUser(userId);
          }}
          className='btn btn-outline-light'
        >
          Follow +
        </button>
      ) : (
        <button
          onClick={() => {
            UnFollowUser(userId);
          }}
          className='btn btn-light'
        >
          Followed
        </button>
      )}
    </>
  );
};

export default FollowButton;

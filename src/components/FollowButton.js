import { useContext } from 'react';
import { UsersContext } from '../Context/UsersContext';

const FollowButton = () => {
  const { FollowUser } = useContext(UsersContext);
  return (
    <button
      onClick={() => {
        FollowUser('8ce6034a-84d0-41ee-a1a0-2121675baf0a');
      }}
      className='btn btn-outline-light'
    >
      Follow +
    </button>
  );
};

export default FollowButton;

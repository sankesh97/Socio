import { useContext, useEffect } from 'react';
import { PostsContext } from '../../Context/PostsContext';
import { AuthContext } from '../../Context/AuthContext';
import { useParams } from 'react-router-dom';
import ProfileComponent from '../../Components/ProfileComponent';

const Profile = () => {
  const { userId } = useParams();
  const { loggedInUser } = useContext(AuthContext);
  const { userNamePostList, getPostsByUsername } = useContext(PostsContext);

  useEffect(() => {
    getPostsByUsername(userId ? userId : loggedInUser.userName);
  }, []);

  return (
    <>
      {loggedInUser ? (
        <ProfileComponent handleShow user={userId ? userId : loggedInUser} />
      ) : (
        <h3 className='text-center'>Please Login</h3>
      )}
    </>
  );
};
export default Profile;

import { useContext, useEffect } from 'react';
import Card from '../../components/Card';
import Post from '../../components/Post';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../context/UsersContext';
import { PostsContext } from '../../context/PostsContext';

const Profile = () => {
  const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
  const { handleShow } = useContext(UserContext);
  const { userNamePostList, getPostsByUsername } = useContext(PostsContext);

  useEffect(() => {
    getPostsByUsername(loggedInUser.userName);
  }, []);

  return (
    <>
      {loggedInUser ? (
        <div className='p-2'>
          <div className='text-center'>
            <img
              alt=''
              src={loggedInUser.Avatar}
              width='100px'
              className='img-fluid rounded-circle border'
            />
            <h4 className='fw-semibold'>
              {loggedInUser.firstName} {loggedInUser.lastName}
            </h4>
            <p>
              {loggedInUser.userName} | {loggedInUser.portfolioURL}
            </p>
            <Button variant='outline-dark' onClick={handleShow}>
              {' '}
              Edit Profile
            </Button>
            <br />
            <br />
            <p>{loggedInUser.bio}</p>
            <br />
            <Card>
              <div className='row'>
                <div className='col'>
                  <h5>{loggedInUser.following.length}</h5>
                  <h6>Following</h6>
                </div>
                <div className='col'>
                  <h5>{loggedInUser.followers.length}</h5>
                  <h6>Posts</h6>
                </div>
                <div className='col'>
                  <h5>{loggedInUser.followers.length}</h5>
                  <h6>Followers</h6>
                </div>
              </div>
            </Card>
            <br />
          </div>
          <div>
            <hr />
            <h2 className='text-center'>Your Posts</h2>
            {userNamePostList ? (
              userNamePostList.map((postInfo) => (
                <Post
                  key={postInfo._id}
                  postInfo={postInfo}
                  loggedInUser={loggedInUser}
                ></Post>
              ))
            ) : (
              <p>There are no posts</p>
            )}
          </div>
        </div>
      ) : (
        <h3 className='text-center'>Please Login</h3>
      )}
    </>
  );
};
export default Profile;

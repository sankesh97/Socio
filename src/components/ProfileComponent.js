import { Card } from 'react-bootstrap';
import Post from '../components/Post';
import { useLocation } from 'react-router-dom';
import FollowButton from './FollowButton';
import EditProfileModal from './EditProfileModal';
import { useContext } from 'react';
import { PostsContext } from '../context/PostsContext';

const ProfileComponent = ({ user, userNamePostList, userList }) => {
  const location = useLocation();
  const { postList } = useContext(PostsContext);
  return (
    <div className='p-2'>
      <div className='text-center'>
        <img
          alt=''
          src={`/UserProfileImages/${user?.Avatar}.jpeg`}
          width='100px'
          className='img-fluid rounded-circle border'
        />
        <h4 className='fw-semibold'>
          {user?.firstName} {user?.lastName}
        </h4>
        <p>
          {user?.userName} | {user?.portfolioURL}
        </p>
        {location.pathname === '/user/profile' ? (
          <EditProfileModal userData={user} />
        ) : (
          <FollowButton userId={user?._id} />
        )}
        <br />
        <br />
        <p>{user?.bio}</p>
        <br />
        <Card>
          <div className='row p-3'>
            <div className='col'>
              <h5>{user?.following.length}</h5>
              <h6>Following</h6>
            </div>
            <div className='col'>
              <h5>
                {
                  postList.filter((post) => post.userName === user?.userName)
                    .length
                }
              </h5>
              <h6>Posts</h6>
            </div>
            <div className='col'>
              <h5>{user?.followers.length}</h5>
              <h6>Followers</h6>
            </div>
          </div>
        </Card>
        <br />
      </div>
      <div>
        <hr />
        <h2>Your Posts</h2>
        {userNamePostList ? (
          userNamePostList.map((postInfo) => (
            <Post
              key={postInfo._id}
              postInfo={postInfo}
              loggedInUser={user}
              userList={userList}
            ></Post>
          ))
        ) : (
          <p>There are no posts</p>
        )}
      </div>
    </div>
  );
};
export default ProfileComponent;

import { Button, Card } from 'react-bootstrap';

const ProfileComponent = ({ user }) => {
  return (
    <div className='p-2'>
      <div className='text-center'>
        <img
          alt=''
          src={user.Avatar}
          width='100px'
          className='img-fluid rounded-circle border'
        />
        <h4 className='fw-semibold'>
          {user.firstName} {user.lastName}
        </h4>
        <p>
          {user.userName} | {user.portfolioURL}
        </p>
        <Button variant='outline-dark' onClick={() => {}}>
          Edit Profile
        </Button>
        <br />
        <br />
        <p>{user.bio}</p>
        <br />
        <Card>
          <div className='row'>
            <div className='col'>
              <h5>{user.following.length}</h5>
              <h6>Following</h6>
            </div>
            <div className='col'>
              <h5>{user.followers.length}</h5>
              <h6>Posts</h6>
            </div>
            <div className='col'>
              <h5>{user.followers.length}</h5>
              <h6>Followers</h6>
            </div>
          </div>
        </Card>
        <br />
      </div>
      <div>
        <hr />
        <h2 className='text-center'>Your Posts</h2>
        {/* {userNamePostList ? (
          userNamePostList.map((postInfo) => (
            <Post
              key={postInfo._id}
              postInfo={postInfo}
              loggedInUser={user}
            ></Post>
          ))
        ) : (
          <p>There are no posts</p>
        )} */}
      </div>
    </div>
  );
};
export default ProfileComponent;

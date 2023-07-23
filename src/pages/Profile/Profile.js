import Card from '../../components/Card/Card';
import Post from '../../components/Post/Post';

const Profile = () => {
  const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

  return (
    <>
      {loggedInUser ? (
        <div className='p-2'>
          <div className='text-center'>
            <img
              alt=''
              src='https://picsum.photos/72'
              className='img-fluid rounded-circle'
            />
            <h4 className='fw-semibold'>
              {loggedInUser.firstName} {loggedInUser.lastName}
            </h4>
            <p>
              {loggedInUser.userName} | {loggedInUser.portfolioURL}
            </p>
            <button className='btn btn-outline-dark'> Edit Profile</button>
            <br />
            <br />
            <p>{loggedInUser.bio}</p>
            <br />
            <Card>
              <div className='row'>
                <div className='col'>
                  <h5>0</h5>
                  <h6>Following</h6>
                </div>
                <div className='col'>
                  <h5>0</h5>
                  <h6>Posts</h6>
                </div>
                <div className='col'>
                  <h5>0</h5>
                  <h6>Followers</h6>
                </div>
              </div>
            </Card>
            <br />
          </div>
          <div>
            <hr />
            <h2 className='text-center'>Your Posts</h2>
            <Post></Post>
          </div>
        </div>
      ) : (
        <h3 className='text-center'>Please Login</h3>
      )}
    </>
  );
};
export default Profile;

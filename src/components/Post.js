import dateDiffHandler from '../utils/dateDiffHandler';

const Post = ({ postInfo, loggedInUser, userList }) => {
  const { userName, content, createdAt, likeCount, dislikedBy, likedBy } =
    postInfo;

  return (
    <div className='card my-3'>
      <div className='card-header d-flex justify-content-between'>
        <div>
          <img
            className='rounded-circle img-fluid'
            src={userList.find((user) => user.userName === userName).Avatar}
            alt={userName}
            width='36px'
          />{' '}
          <strong>{`${userName}`}</strong>
        </div>
        <div>{dateDiffHandler(createdAt)}</div>
      </div>
      <div className='card-body'>
        <p className='card-text'>{content}</p>
      </div>
      <div className='card-footer d-flex justify-content-around bg-teal '>
        <span>
          <i className='bi bi-heart'></i>
        </span>
        <span>
          <i className='bi bi-bookmark-heart'></i>
        </span>
        <span>
          <i className='bi bi-pencil-square'></i>
        </span>
      </div>
    </div>
  );
};
export default Post;

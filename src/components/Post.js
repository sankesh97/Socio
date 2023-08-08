import { useContext } from 'react';
import dateDiffHandler from '../utils/dateDiffHandler';
import { PostsContext } from '../context/PostsContext';
import { AuthContext } from '../context/AuthContext';
import { UsersContext } from '../context/UsersContext';

const Post = ({ postInfo, userList }) => {
  const { _id, userName, content, createdAt, likes } = postInfo;
  const { loggedInUser, token } = useContext(AuthContext);
  const { addToBookmark, removeFromBookmark, bookmarksList } =
    useContext(UsersContext);
  const { likeAPost, disLikeAPost } = useContext(PostsContext);

  const LikeabilityFactor = likes.likedBy.find(
    (user) => user._id === loggedInUser._id
  ) ? (
    <span
      onClick={() => {
        disLikeAPost(_id, token);
      }}
    >
      <i className='bi bi-heart-fill text-danger'></i>
    </span>
  ) : (
    <span
      onClick={() => {
        likeAPost(_id, token);
      }}
    >
      <i className='bi bi-heart text-danger'></i>
    </span>
  );

  const EditabilityFactor =
    loggedInUser.userName === userName ? (
      <span>
        <i className='bi bi-pencil-square text-info'></i>
      </span>
    ) : null;

  const BookmarkFactor = (
    <span
      onClick={() => {
        bookmarksList.find((bookmark) => bookmark._id === _id)
          ? removeFromBookmark(_id, token)
          : addToBookmark(_id, token);
      }}
    >
      <i
        className={
          bookmarksList.find((bookmark) => bookmark._id === _id)
            ? `bi bi-bookmark-heart-fill text-danger`
            : `bi bi-bookmark-heart`
        }
      ></i>
    </span>
  );

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
      <div className='card-footer d-flex justify-content-around'>
        {LikeabilityFactor}
        {BookmarkFactor}
        {EditabilityFactor}
      </div>
    </div>
  );
};
export default Post;

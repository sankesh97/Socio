import { useContext } from 'react';

import { PostsContext } from '../context/PostsContext';
import { AuthContext } from '../context/AuthContext';
import dayjs from 'dayjs';

const Post = ({ postInfo, userList }) => {
  const { _id, userName, content, createdAt, likes } = postInfo;
  const { loggedInUser, token, addToBookmark, removeFromBookmark } =
    useContext(AuthContext);
  const { likeAPost, disLikeAPost } = useContext(PostsContext);

  const LikeabilityFactor = likes.likedBy.find(
    (user) => user._id === loggedInUser._id
  ) ? (
    <span
      className='btn btn-light me-2'
      onClick={() => {
        disLikeAPost(_id, token);
      }}
    >
      <i className='bi bi-heart-fill text-danger'></i> Liked
    </span>
  ) : (
    <span
      className='btn btn-outline-light me-2'
      onClick={() => {
        likeAPost(_id, token);
      }}
    >
      <i className='bi bi-heart text-danger'></i> Like
    </span>
  );

  const EditabilityFactor =
    loggedInUser.userName === userName ? (
      <span className='btn btn-light me-2'>
        <i className='bi bi-pencil-square text-info'></i> Edit Post
      </span>
    ) : null;

  const BookmarkFactor = loggedInUser.bookmarks.find(
    (bookmark) => bookmark._id === _id
  ) ? (
    <span
      className='btn btn-light me-2'
      onClick={() => {
        removeFromBookmark(_id, token);
      }}
    >
      <i className='bi bi-bookmark-heart-fill text-danger'></i> Bookmarked
    </span>
  ) : (
    <span
      className='btn btn-outline-light me-2'
      onClick={() => {
        addToBookmark(_id, token);
      }}
    >
      <i className='bi bi-bookmark-heart'></i> Bookmark
    </span>
  );

  return (
    <div className='card mb-5'>
      <div className='card-header d-flex justify-content-between'>
        <div>
          <img
            className='rounded-circle img-fluid'
            src={userList.find((user) => user.userName === userName).Avatar}
            alt={userName}
            width='36px'
          />{' '}
          <strong>{userName}</strong>
        </div>
        <div>{dayjs(createdAt).format('DD/MM/YYYY')}</div>
      </div>
      <div className='card-body'>
        <p className='card-text'>{content}</p>
      </div>
      <div className='card-footer d-flex justify-content-between'>
        <div>
          {LikeabilityFactor}
          {BookmarkFactor}
        </div>
        {EditabilityFactor}
      </div>
    </div>
  );
};
export default Post;

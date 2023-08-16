import { useContext, useState } from 'react';

import { PostsContext } from '../context/PostsContext';
import { AuthContext } from '../context/AuthContext';
import dayjs from 'dayjs';
import { FloatingLabel, Form } from 'react-bootstrap';

const Post = ({ postInfo, userList }) => {
  const { loggedInUser, token, addToBookmark, removeFromBookmark } =
    useContext(AuthContext);
  const { likeAPost, disLikeAPost, EditPost, DeletePost } =
    useContext(PostsContext);
  const [currentPostContent, setCurrentPostContent] = useState();
  const [editContent, setEditContent] = useState(false);

  const LikeabilityFactor = postInfo.likes.likedBy.find(
    (user) => user._id === loggedInUser._id
  ) ? (
    <span
      className='btn btn-light me-2'
      onClick={() => {
        disLikeAPost(postInfo._id);
      }}
    >
      <i className='bi bi-heart-fill text-danger'></i> Liked
    </span>
  ) : (
    <span
      className='btn btn-outline-light me-2'
      onClick={() => {
        likeAPost(postInfo._id);
      }}
    >
      <i className='bi bi-heart text-danger'></i> Like
    </span>
  );

  const EditabilityFactor =
    loggedInUser.userName === postInfo.userName ? (
      editContent ? (
        <span
          onClick={() => {
            EditPost(postInfo._id, {
              ...postInfo,
              content: currentPostContent,
            });
            setEditContent(false);
          }}
          className='btn btn-light me-2'
        >
          <i className='bi bi-pencil-square text-info'></i> Save
        </span>
      ) : (
        <span
          onClick={() => {
            setCurrentPostContent(postInfo.content);
            setEditContent(true);
          }}
          className='btn btn-light me-2'
        >
          <i className='bi bi-pencil-square text-info'></i> Edit Post
        </span>
      )
    ) : null;

  const BookmarkFactor = loggedInUser.bookmarks.find(
    (bookmark) => bookmark._id === postInfo._id
  ) ? (
    <span
      className='btn btn-light me-2'
      onClick={() => {
        removeFromBookmark(postInfo._id, token);
      }}
    >
      <i className='bi bi-bookmark-heart-fill text-danger'></i> Bookmarked
    </span>
  ) : (
    <span
      className='btn btn-outline-light me-2'
      onClick={() => {
        addToBookmark(postInfo._id, token);
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
            src={
              userList &&
              `/UserProfileImages/${
                userList.find((user) => user.userName === postInfo.userName)
                  .Avatar
              }.jpeg`
            }
            alt={postInfo.userName}
            width='36px'
          />{' '}
          <strong className='mx-2'>{postInfo.userName}</strong>
        </div>
        <div>{dayjs(postInfo.createdAt).format('DD/MM/YYYY')}</div>
      </div>
      <div className='card-body'>
        {editContent ? (
          <FloatingLabel
            controlId='floatingTextarea2'
            label='Write something interesting...'
          >
            <Form.Control
              value={currentPostContent}
              onChange={(e) => setCurrentPostContent(e.target.value)}
              as='textarea'
              style={{ height: '100px' }}
            />
          </FloatingLabel>
        ) : (
          <p className='card-text'>{postInfo.content}</p>
        )}
      </div>
      <div className='card-footer d-flex justify-content-between'>
        <div>
          {LikeabilityFactor}
          {BookmarkFactor}
        </div>
        <div>
          {EditabilityFactor}
          {loggedInUser.userName === postInfo.userName && (
            <button
              className='btn btn-light'
              onClick={() => {
                DeletePost(postInfo._id);
              }}
            >
              <i class='bi bi-trash3 text-info'></i> Delete Post
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Post;

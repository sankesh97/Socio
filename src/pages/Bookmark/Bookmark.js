import { useContext } from 'react';
import { UsersContext } from '../../context/UsersContext';
import { PostsContext } from '../../context/PostsContext';
import Post from '../../components/Post';
import { AuthContext } from '../../context/AuthContext';

const Bookmark = () => {
  const { loggedInUser } = useContext(AuthContext);
  const { postList } = useContext(PostsContext);
  const { userList } = useContext(UsersContext);
  return (
    <>
      <h2 className='py-2'>Your Bookmarks</h2>
      <hr />
      {loggedInUser.bookmarks.length > 0 ? (
        loggedInUser.bookmarks.map((bookmark) => (
          <Post
            userList={userList}
            postInfo={postList.find((post) => post._id === bookmark._id)}
          ></Post>
        ))
      ) : (
        <p>Add the posts to Bookmarks</p>
      )}
    </>
  );
};
export default Bookmark;

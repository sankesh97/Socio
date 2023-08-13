import { useContext } from 'react';
import { UsersContext } from '../../Context/UsersContext';
import { PostsContext } from '../../Context/PostsContext';
import Post from '../../Components/Post';

const Bookmark = () => {
  const { bookmarksList, removeFromBookmark } = useContext(UsersContext);
  const { postList } = useContext(PostsContext);
  return (
    <>
      <h2>Your Bookmarks</h2>
      {postList ? (
        postList
          .filter((post) => bookmarksList)
          .map((bookmark) => <Post postInfo={bookmark}></Post>)
      ) : (
        <p>Add the product to Bookmarks</p>
      )}
    </>
  );
};
export default Bookmark;

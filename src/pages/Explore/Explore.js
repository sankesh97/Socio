import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { PostsContext } from '../../context/PostsContext';
import Post from '../../components/Post';
import { UsersContext } from '../../context/UsersContext';

const Explore = () => {
  const { loggedInUser } = useContext(AuthContext);
  const { postList, getPosts } = useContext(PostsContext);
  const { userList, getUsers } = useContext(UsersContext);

  useEffect(() => {
    getUsers();
    getPosts();
  }, []);

  return (
    <>
      <h2 className='py-2'>Explore</h2>
      <hr />
      <div>
        {postList ? (
          postList.map((postInfo) => (
            <Post
              key={postInfo._id}
              postInfo={postInfo}
              loggedInUser={loggedInUser}
              userList={userList}
            ></Post>
          ))
        ) : (
          <p>There are no posts</p>
        )}
      </div>
    </>
  );
};
export default Explore;

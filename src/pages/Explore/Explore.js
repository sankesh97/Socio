import { useContext, useEffect } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { PostsContext } from '../../Context/PostsContext';
import Post from '../../Components/Post';
import { UsersContext } from '../../Context/UsersContext';

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

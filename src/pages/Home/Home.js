import { useContext, useEffect } from 'react';
import { Form } from 'react-bootstrap';

import { AuthContext, PostsContext } from '../../context/AppContext';
import { UsersContext } from '../../context/UsersContext';
import CreatePost from '../../components/CreatePost';
import Post from '../../components/Post';

const Home = () => {
  const { postList, getPosts } = useContext(PostsContext);
  const { loggedInUser } = useContext(AuthContext);
  const { userList, getUsers } = useContext(UsersContext);
  useEffect(() => {
    getUsers();
    getPosts();
  }, []);
  return (
    <>
      <CreatePost />
      <hr />
      <div className='d-flex justify-content-between'>
        <h3>Latest Posts</h3>
        <div>
          <Form.Select aria-label='Sorting Dropdown'>
            <option>Sort By</option>
            <option value='Trending'>Trending</option>
            <option value='Date'>Date</option>
          </Form.Select>
        </div>
      </div>
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
export default Home;

import { useContext, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

import { AuthContext, PostsContext } from '../../Context/AppContext';
import { UsersContext } from '../../Context/UsersContext';
import CreatePost from '../../Components/CreatePost';
import Post from '../../Components/Post';

const Home = () => {
  const { postList, getPosts } = useContext(PostsContext);
  const { loggedInUser } = useContext(AuthContext);
  const { userList, getUsers } = useContext(UsersContext);
  const [sortBasedOn, setSortBasedOn] = useState();
  useEffect(() => {
    getUsers();
    getPosts();
  }, []);

  const sortedList = sortBasedOn
    ? sortBasedOn === 'Trending'
      ? postList.sort((a, b) => {
          return a.likes.likeCount - b.like.likeCount;
        })
      : (postList.sort = (a, b) => {
          return new Date(a.createdAt) - new Date(b.createdAt);
        })
    : postList;
  return (
    <>
      <CreatePost />
      <hr />
      <div className='d-flex justify-content-between'>
        <h3>Latest Posts</h3>
        <div>
          <Form.Select
            aria-label='Sorting Dropdown'
            onChange={(event) => {
              setSortBasedOn(event.target.value);
            }}
          >
            <option>Sort By</option>
            <option value='Trending'>Trending</option>
            <option value='Date'>Date</option>
          </Form.Select>
        </div>
      </div>
      <div>
        {sortedList ? (
          sortedList.map((postInfo) => (
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

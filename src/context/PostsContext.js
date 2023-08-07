import { createContext, useState } from 'react';
import axios from 'axios';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [postList, setPostList] = useState([]);
  const [userNamePostList, setuserNamePostList] = useState([]);
  //const [currentUserPosts, dispatch] = useReducer(CurrentUserPostsHandler, []);

  // Get All Posts
  const getPosts = async () => {
    try {
      const { status, data } = await axios.get(`/api/posts`);
      if (status === 200) setPostList(data.posts);
    } catch (err) {
      console.log(err);
    }
  };

  // Get Post by Id
  const getPostById = async (postId) => {
    try {
      const { status, data } = await axios.get(`/api/posts/${postId}`);
      if (status === 200) setPostList(data.post);
    } catch (err) {
      console.log(err);
    }
  };

  // Get Post by Username
  const getPostsByUsername = async (userName) => {
    try {
      const { status, data } = await axios.get(`/api/posts/user/${userName}`);
      if (status === 200) setuserNamePostList(data.posts);
    } catch (err) {
      console.log(err);
    }
  };

  // Create a New Post
  const createNewPost = async (token, content) => {
    try {
      const { status, data } = await axios.post(
        `/api/posts`,
        { postData: { content } },
        { headers: { authorization: token } }
      );
      if (status === 200) setPostList(data.posts);
      console.log(status, data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PostsContext.Provider
      value={{
        postList,
        userNamePostList,
        getPosts,
        getPostById,
        getPostsByUsername,
        createNewPost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

import { createContext, useState } from 'react';
import axios from 'axios';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [postList, setPostList] = useState([]);
  const [userNamePostList, setuserNamePostList] = useState([]);

  // Get All Posts
  const getPosts = async () => {
    try {
      const { status, data } = await axios.get(`/api/posts`);
      if (status === 200 || 201) setPostList(data.posts);
    } catch (err) {
      console.log(err);
    }
  };

  // Get Post by Id
  const getPostById = async (postId) => {
    try {
      const { status, data } = await axios.get(`/api/posts/${postId}`);
      if (status === 200 || 201) setPostList(data.post);
    } catch (err) {
      console.log(err);
    }
  };

  // Get Post by Username
  const getPostsByUsername = async (userName) => {
    try {
      const { status, data } = await axios.get(`/api/posts/user/${userName}`);
      if (status === 200 || 201) setuserNamePostList(data.posts);
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
      if (status === 200 || 201) setPostList(data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  //Delete a Post
  const DeletePost = async (token) => {
    try {
      const { status, data } = await axios.delete(`/api/posts/:postId`, {
        headers: { authorization: token },
      });
      if (status === 200 || 201) setPostList(data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  //Edit a Post
  const EditPost = async (token, postData) => {
    try {
      const { status, data } = await axios.delete(
        `/api/posts/${postData._id}`,
        { postData },
        {
          headers: { authorization: token },
        }
      );
      if (status === 200 || 201) setPostList(data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  // Like a Post
  const likeAPost = async (postId, token) => {
    try {
      const { status, data } = await axios.post(
        `/api/posts/like/${postId}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      if (status === 200 || 201) setPostList(data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  // Dislike a Post
  const disLikeAPost = async (postId, token) => {
    try {
      const { status, data } = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      if (status === 200 || 201) setPostList(data.posts);
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
        DeletePost,
        EditPost,
        likeAPost,
        disLikeAPost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

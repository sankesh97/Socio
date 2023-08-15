import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import Toaster from '../components/Toaster';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [postList, setPostList] = useState([]);
  const [userNamePostList, setuserNamePostList] = useState([]);
  const { token } = useContext(AuthContext);

  // Get All Posts
  const getPosts = async () => {
    try {
      const { status, data } = await axios.get(`/api/posts`);
      if (status === 200 || 201) setPostList(data.posts);
    } catch (error) {
      Toaster('ERROR', error.response.data.errors[0]);
    }
  };

  // Get Post by Id
  const getPostById = async (postId) => {
    try {
      const { status, data } = await axios.get(`/api/posts/${postId}`);
      if (status === 200 || 201) setPostList(data.post);
    } catch (error) {
      Toaster('ERROR', error.response.data.errors[0]);
    }
  };

  // Get Post by Username
  const getPostsByUsername = async (userName) => {
    try {
      const { status, data } = await axios.get(`/api/posts/user/${userName}`);
      if (status === 200 || 201) setuserNamePostList(data.posts);
    } catch (error) {
      Toaster('ERROR', error.response.data.errors[0]);
    }
  };

  // Create a New Post
  const createNewPost = async (content) => {
    try {
      const { status, data } = await axios.post(
        `/api/posts`,
        { postData: { content } },
        { headers: { authorization: token } }
      );
      if (status === 200 || 201) setPostList(data.posts);
      Toaster('SUCCESS', 'You post has been published');
    } catch (error) {
      Toaster('ERROR', error.response.data.errors[0]);
    }
  };

  //Delete a Post
  const DeletePost = async (postId) => {
    try {
      const { status, data } = await axios.delete(`/api/posts/${postId}`, {
        headers: { authorization: token },
      });
      if (status === 200 || 201) setPostList(data.posts);
      Toaster('SUCCESS', 'Post has been deleted successfully');
    } catch (error) {
      Toaster('ERROR', error.response.data.errors[0]);
    }
  };

  //Edit a Post
  const EditPost = async (_id, postData) => {
    try {
      const { status, data } = await axios.post(
        `/api/posts/edit/${_id}`,
        { postData },
        {
          headers: { authorization: token },
        }
      );
      if (status === 200 || 201) setPostList(data.posts);
      console.log(data.posts);
      Toaster('SUCCESS', 'Post has been edited successfully');
    } catch (error) {
      console.log(error);
      Toaster('ERROR', error.response.data.message);
    }
  };

  // Like a Post
  const likeAPost = async (postId) => {
    try {
      const { status, data } = await axios.post(
        `/api/posts/like/${postId}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      if (status === 200 || 201) setPostList(data.posts);
      Toaster('SUCCESS', 'Post has been liked');
    } catch (error) {
      Toaster('ERROR', error.response.data.errors[0]);
    }
  };

  // Dislike a Post
  const disLikeAPost = async (postId) => {
    try {
      const { status, data } = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      if (status === 200 || 201) setPostList(data.posts);
      Toaster('SUCCESS', 'Posts has been unliked');
    } catch (error) {
      Toaster('ERROR', error.response.data.errors[0]);
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

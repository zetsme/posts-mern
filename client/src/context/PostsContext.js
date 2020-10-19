import React, { createContext, useReducer } from 'react';
import axios from 'axios';

// Initial State
const initialState = {
  posts: [],
  error: null,
  loading: true,
};

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_ALL_POSTS':
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter((i) => i._id !== action.payload),
      };
    case 'POST_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
};

// Create Context
export const PostsContext = createContext(initialState);

// Provider Component
export const PostsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getAllPosts = async () => {
    try {
      const res = await axios.get('/api/v1/posts');
      dispatch({
        type: 'GET_ALL_POSTS',
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: 'POST_ERROR',
        payload: error.response.data.error,
      });
    }
  };
  const deletePost = async (id) => {
    try {
      await axios.delete(`/api/v1/posts/${id}`);
      dispatch({
        type: 'DELETE_POST',
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: 'POST_ERROR',
        payload: error.response.data.error,
      });
    }
  };
  const addPost = async (post) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await axios.post('/api/v1/posts', post, config);
      dispatch({
        type: 'ADD_POST',
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: 'POST_ERROR',
        payload: error.response.data.error,
      });
    }
  };
  return (
    <PostsContext.Provider
      value={{
        posts: state.posts,
        error: state.error,
        loding: state.loading,
        getAllPosts,
        deletePost,
        addPost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

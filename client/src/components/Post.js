import React, { useContext } from 'react';
import { PostsContext } from '../context/PostsContext';

const Post = ({ post }) => {
  const { deletePost } = useContext(PostsContext);
  return (
    <li className='post'>
      <div className='post__header'>
        <span className='post__title'>{post.title}</span>
        <span className='post_author'>{post.author}</span>
      </div>

      <p className='post__text'>{post.text}</p>
      <div className='post__footer'>
        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
        <button
          onClick={() => deletePost(post._id)}
          className='post__delete-btn'
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Post;

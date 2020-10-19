import React, { useContext, useEffect } from 'react';
import { PostsContext } from '../context/PostsContext';
import Post from './Post';

const PostList = () => {
  const { posts, getAllPosts } = useContext(PostsContext);
  useEffect(() => {
    getAllPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className='post__section'>
      <h2 className='post__section-header'>Posts</h2>
      <ul className='post__list'>
        {posts.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
      </ul>
    </section>
  );
};

export default PostList;

import React from 'react';
import AddPost from './components/AddPost';
import PostList from './components/PostList';
import { PostsProvider } from './context/PostsContext';

const App = () => {
  return (
    <PostsProvider>
      <div className='container'>
        <PostList />
        <AddPost />
      </div>
    </PostsProvider>
  );
};

export default App;

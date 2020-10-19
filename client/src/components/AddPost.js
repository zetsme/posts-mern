import React, { useContext, useState } from 'react';
import { PostsContext } from '../context/PostsContext';

const AddPost = () => {
  const { addPost } = useContext(PostsContext);
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    addPost({ text, author, title });
  };
  return (
    <section className='form__section'>
      <h3 className='form__header'>Add New Post</h3>
      <form className='form' onSubmit={onSubmit}>
        <div className='form__control'>
          <label className='form__label' htmlFor='formTitle'>
            Title :
          </label>
          <input
            autoComplete='off'
            className='form__input'
            id='formTitle'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type='text'
            placeholder='Enter your title'
          />
        </div>
        <div className='form__control'>
          <label className='form__label' htmlFor='formAuthor'>
            Author :
          </label>
          <input
            autoComplete='off'
            className='form__input'
            id='formAuthor'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            type='text'
            placeholder='Enter your name'
          />
        </div>
        <div className='form__control'>
          <textarea
            className='form__textarea'
            id='formTitle'
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <button className='form__add-btn'>Add Post</button>
      </form>
    </section>
  );
};

export default AddPost;

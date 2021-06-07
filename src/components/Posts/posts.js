import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createPost } from '../../store/posts.js';
import useForm from '../../Hooks/useForm.js';
import cookie from 'react-cookies';
import AllPosts from './allPost.js';
// Profile Page
// get the all posts from the server handled by redux.

function Posts() {
  // const [create, setCreate] = useState({});
  const state = useSelector((state) => {
    return {
      user: state.auth,
      post: state.post,
    };
  });
  const dispatch = useDispatch();
  const token = cookie.load('auth');
  const id = state.user.user.id;
  const [, handleChange, handleSubmit] = useForm(
    dispatch,
    createPost,
    token,
    id
  );
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input type="text" name="title" id="title" onChange={handleChange} />
        </label>
        <label htmlFor="content">
          Content:
          <input
            type="text"
            name="content"
            id="content"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Post</button>
      </form>
      <AllPosts />
    </>
  );
}

export default Posts;

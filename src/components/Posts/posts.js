import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createPost } from '../../store/posts.js';
import useForm from '../../Hooks/useForm.js';
import cookie from 'react-cookies';
import AllPosts from './allPost.js';
import './posts.scss'


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
    <div >
      <form  class= 'mb-3 mt-4' onSubmit={handleSubmit}>
        <input class= 'text1' placeholder="Title" type="text" name="title" id="title" onChange={handleChange} />
        <textarea placeholder="Content" type="text" name="content"  id="content" onChange={handleChange}></textarea>
        <input  class='postbbtn' type="submit" value="Post" />
      </form>
      <AllPosts />
    </div>
  );
}

export default Posts;

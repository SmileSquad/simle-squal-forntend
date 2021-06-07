import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts } from '../../store/posts.js';
import cookie from 'react-cookies';

function AllPost() {
  const state = useSelector((state) => {
    return {
      user: state.auth,
      post: state.post,
    };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    const token = cookie.load('auth');
    if (token) {
      dispatch(getAllPosts(token));
    }
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {state.post.posts.map((el, id) => {
        return (
          <div key={id}>
            <div>{el.user.username}</div>
            <div>{el.title}</div>
            <div>{el.content}</div>
          </div>
        );
      })}
    </>
  );
}

export default AllPost;

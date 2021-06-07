import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, signin, logout } from '../../store/auth.js';
import useForm from '../../Hooks/useForm.js';
import { If, Else, Then } from 'react-if';
import { useHistory } from 'react-router-dom';
import LoginGoogle from '../Google/google';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';
import Signup from '../Signup/signup';

const SECRET = 'smilesquad';
// Header Components
// signin signup authentication as a Modal/ popup with Google Auth button

function Auth() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      user: state.auth,
    };
  });
  useEffect(() => {
    const token = cookie.load('auth');
    if (token) {
      const user = jwt.verify(token, SECRET);
      dispatch(login({ user, token }));
    }
    // eslint-disable-next-line
  }, []);
  const history = useHistory();
  const { loggedIn } = state.user;
  const [, handleChange, handleSubmit] = useForm(dispatch, signin);
  return (
    <If condition={!loggedIn}>
      <Then>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
            history.push('/profile');
          }}
        >
          <label htmlFor="name">
            <input
              type="text"
              name="username"
              id="name"
              onChange={handleChange}
            ></input>
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
            ></input>
          </label>
          <button type="submit">Login</button>
        </form>
        <LoginGoogle />
        <Signup />
      </Then>
      <Else>
        <Then>
          <button
            onClick={() => {
              dispatch(logout({ loggedIn: false, user: {} }));
              history.push('/');
            }}
          >
            Logout
          </button>
        </Then>
      </Else>
    </If>
  );
}

export default Auth;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../../store/auth.js';
import { If, Else, Then } from 'react-if';
import { useHistory } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';
import Signin from './signin.js';
import Signup from './signup.js';
import Button from '@material-ui/core/Button';
import useStyles from './style.js';

const SECRET = 'smilesquad';

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
  const classes = useStyles();

  return (
    <>
      <If condition={!loggedIn}>
        <Then>
          <Signup />
          <Signin />
        </Then>
        <Else>
          <Then>
            <Button
              style={{ marginLeft: '170px' }}
              onClick={() => {
                dispatch(logout({ loggedIn: false, user: {} }));
                history.push('/');
              }}
              variant="contained"
              className={classes.sign}
            >
              {' '}
              Logout
            </Button>
          </Then>
        </Else>
      </If>
    </>
  );
}

export default Auth;

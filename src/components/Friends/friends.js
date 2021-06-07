import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFriendsList } from '../../store/friends';
import cookie from 'react-cookies';
// Profile Page
// get the use friends from the server
// this will be handled usign redux

function Friends() {
  const state = useSelector((state) => {
    return { friend: state.friends, user: state.auth };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    // const token = cookie.load('auth');
    console.log('effect', state);
    // '60bd09a08c3e0e0015bcdf8b'
    if (state.user.user.id) {
      dispatch(getFriendsList(state.user.user.id, state.user.token));
    }
    // eslint-disable-next-line
  }, [state.user]);
  console.log('state', state);
  return <div>friend list</div>;
}

export default Friends;

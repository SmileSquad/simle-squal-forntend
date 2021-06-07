import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFriendsList } from '../../store/friends';
import cookie from 'react-cookies';
// Profile Page
// get the use friends from the server
// this will be handled usign redux

function Friends() {
  const state = useSelector((state) => {
    return { friend: state.friends, user: state.auth, id: state.post.userId };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    const token = cookie.load('auth');
    console.log('effect', state.user.user);
    // '60bd09a08c3e0e0015bcdf8b'
    dispatch(getFriendsList(state.user?.user?.id, token));
    // eslint-disable-next-line
  }, [state.user.user]);
  console.log('state', state);
  return <div>friend list</div>;
}

export default Friends;

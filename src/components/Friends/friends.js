import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFriendsList, removeFriend, report } from '../../store/friends';
import './friends.scss';

function Friends() {
  const [reportState, setReport] = useState({});
  const state = useSelector((state) => {
    return { friend: state.friends, user: state.auth };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (state.user.user.id) {
      if (!state.friend.arr.length) {
        dispatch(getFriendsList(state.user.user.id, state.user.token));
      }
    }
    // eslint-disable-next-line
  }, [state.user]);
  const handleChange = (e) => {
    setReport({ ...reportState, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.id, reportState);
    dispatch(report(e.target.id.value, state.user.token, reportState));
  };
  return (
    <div class="friends">
      {state.friend.arr.map((user) => {
        return (
          <div className="FriendDiv">
            <span class="dot"></span>
            <p> {user.username} </p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="message">
                <input
                  type="text"
                  name="message"
                  id="message"
                  onChange={handleChange}
                />
              </label>
              <input
                type="text"
                name="id"
                id="id"
                hidden
                value={user.id}
                onChange={handleChange}
              />
              <button type="submit">report</button>
            </form>
            <button
              onClick={() => {
                dispatch(
                  removeFriend(user.id, state.user.user.id, state.user.token)
                );
              }}
            >
              {' '}
              remove{' '}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Friends;

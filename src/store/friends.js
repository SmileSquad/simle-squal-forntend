import { createSlice } from '@reduxjs/toolkit';
import superagent from 'superagent';
// import cookie from 'react-cookies';

const API = 'https://smile-squad.herokuapp.com/api/v1';

const friendSlice = createSlice({
  name: 'friend',
  initialState: {
    arr: [],
  },
  reducers: {
    getFriends: (state, action) => {
      state.arr.push(...action.payload.friends);
    },
    add: (state, action) => {
      state.arr.push(action.payload.friend[0]);
    },
  },
});

export const { getFriends, add } = friendSlice.actions;

export const getFriendsList = (id, token) => async (dispatch) => {
  const response = await superagent
    .get(`${API}/players/friends/${id}`)
    .set('Authorization', `Bearer ${token}`);
  dispatch(getFriends({ friends: response.body }));
};
export const addFriend = (id1, id2, token) => async (dispatch) => {
  const response = await superagent
    .post(`${API}/players/addFriend`)
    .set('Authorization', `Bearer ${token}`)
    .send({
      userId: id1,
      friendId: id2,
    });

  dispatch(add({ friend: response.body }));
};

export default friendSlice.reducer;

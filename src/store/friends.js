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
  },
});

export const { getFriends } = friendSlice.actions;

export const getFriendsList = (id, token) => async (dispatch) => {
  console.log('hello');
  const response = await superagent
    .get(`${API}/players/friends/${id}`)
    .set('Authorization', `Bearer ${token}`);
  console.log('body', response.body);
  dispatch(getFriends({ friends: response.body }));
};

export default friendSlice.reducer;

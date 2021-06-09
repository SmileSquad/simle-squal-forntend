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
    remove: (state, action) => {
      state.arr.filter((el) => el.id !== action.payload.user.id);
    },
  },
});

export const { getFriends, add, remove } = friendSlice.actions;

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
export const removeFriend = (id1, id2, token) => async (dispatch) => {
  const response = await superagent
    .post(`${API}/players/removeFriend`)
    .set('Authorization', `Bearer ${token}`)
    .send({
      userId: id1,
      friendId: id2,
    });
  dispatch(remove({ user: response.body[0] }));
  console.log('remove', response.body);
};

export const report =
  (id, token, { message }) =>
  async (dispatch) => {
    try {
      const response = await superagent
        .post(`${API}/report/player/${id}`)
        .set('Authorization', `Bearer ${token}`)
        .send({ message });
      console.log('report', response.body);
    } catch (error) {
      console.error(error.message);
    }
  };

export default friendSlice.reducer;

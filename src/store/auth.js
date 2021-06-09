import { createSlice } from '@reduxjs/toolkit';
import superagent from 'superagent';
import cookie from 'react-cookies';
// import jwt from 'jsonwebtoken';

const API = 'https://smile-squad.herokuapp.com/api/v1';
// const SECRET = 'smilesquad';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    trigger: false,
    loggedIn: false,
    user: {},
    token: '',
  },
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      cookie.save('auth', state.token);
    },
    logout: (state, action) => {
      state.loggedIn = action.payload.loggedIn;
      state.user = action.payload.user;
      state.token = '';
      cookie.remove('auth');
    },
    update: (state, action) => {
      state.user.win += 1;
    },
    socket: (state, action) => {
      state.trigger = true;
    },
    socketEnd: (state, action) => {
      state.trigger = false;
    },
  },
});

export const { login, logout, socket, socketEnd, update } = authSlice.actions;

export const signin =
  ({ username, password }) =>
  async (dispatch) => {
    const response = await superagent
      .post(`${API}/signin`)
      .set('Authorization', `Basic ${btoa(`${username}:${password}`)}`);
    dispatch(login(response.body));
  };
export const signup =
  ({ username, email, password }) =>
  async (dispatch) => {
    try {
      const response = await superagent
        .post(`${API}/signup`)
        .send({ username, email, password });
      dispatch(login({ user: response.body, token: response.body.token }));
    } catch (error) {
      console.error(error.message);
    }
  };

// export const updateUser = (id, token, body) => async (dispatch) => {
//   try {
//     const response = await superagent
//       .post(`${API}/signup`)
//       .send({ win: body.win });
//   } catch (error) {
//     console.error(error.message);
//   }
// };

export default authSlice.reducer;

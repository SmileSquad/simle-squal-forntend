import { createSlice } from '@reduxjs/toolkit';
import superagent from 'superagent';
// import cookie from 'react-cookies';

const API = 'https://smile-squad.herokuapp.com/api/v1';

const searchSlice = createSlice({
  name: 'search',
  initialState: [],
  reducers: {
    searchUser: (state, action) => {
      state.push(...action.payload);
    },
  },
});

export const { searchUser } = searchSlice.actions;

export const search = (name, token) => async (dispatch) => {
  console.log('hello');
  const response = await superagent
    .get(`${API}/search/${name}`)
    .set('Authorization', `Bearer ${token}`);
  console.log('search', response.body);
  dispatch(searchUser(response.body));
};

export default searchSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import superagent from 'superagent';

const API = 'https://smile-squad.herokuapp.com/api/v1';

const leaderSlice = createSlice({
  name: 'leaderboard',
  initialState: [],
  reducers: {
    getLeaderboard: (state, action) => {
      state.push(...action.payload.players);
    },
  },
});

export const { getLeaderboard } = leaderSlice.actions;

export const getLeaders = () => async (dispatch) => {
  try {
    const response = await superagent.get(`${API}/topPlayers`);
    dispatch(getLeaderboard({ players: response.body }));
  } catch (error) {
    console.error(error.message);
  }
};

export default leaderSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import auth from './auth';
import post from './posts.js';
import friends from './friends.js';
import search from './search.js';
import leaders from './leaderboard.js';

const reducer = combineReducers({
  auth,
  post,
  friends,
  search,
  leaders,
});

export default configureStore({ reducer });

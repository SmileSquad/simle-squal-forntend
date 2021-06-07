import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import auth from './auth';

const reducer = combineReducers({
  auth,
});

export default configureStore({ reducer });

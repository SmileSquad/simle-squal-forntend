// import { createSlice } from '@reduxjs/toolkit';
// import superagent from 'superagent';
import { createSlice } from '@reduxjs/toolkit';
import superagent from 'superagent';

const API = 'https://smile-squad.herokuapp.com/api/v1';

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    userId: '',
    user: {},
    posts: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.userId = action.payload.userId;
      state.user = action.payload.user;
      state.posts.push({ ...action.payload.post, user: action.payload.user });
    },
    getPosts: (state, action) => {
      state.posts.push(...action.payload.posts);
    },
  },
});

export const { addPost, getPosts } = postSlice.actions;

export const createPost =
  ({ userId, title, content, token }) =>
  async (dispatch) => {
    const response = await superagent
      .post(`${API}/addPost`)
      .send({ userId, title, content })
      .set('Authorization', `Bearer ${token}`);
    dispatch(
      addPost({
        post: { title: response.body.title, content: response.body.content },
        user: { id: response.body.user._id, name: response.body.user.username },
        userId: response.body.user._id,
      })
    );
  };

export const deletePost = (id, token) => async (dispatch) => {
  try {
    const response = await superagent
      .delete(`${API}/removePost/${id}`)
      .set('Authorization', `Bearer ${token}`);
    console.log(response.body);
  } catch (error) {
    console.error(error.message);
  }
};

export const getAllPosts = (token) => async (dispatch) => {
  const response = await superagent
    .get(`${API}/posts`)
    .set('Authorization', `Bearer ${token}`);
  dispatch(getPosts({ posts: [...response.body] }));
};

export default postSlice.reducer;

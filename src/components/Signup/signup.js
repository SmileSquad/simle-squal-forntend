import React from 'react';
import useForm from '../../Hooks/useForm.js';
import { signup } from '../../store/auth.js';
import { useDispatch } from 'react-redux';
function Signup() {
  const dispatch = useDispatch();
  const [, handleChange, handleSubmit] = useForm(dispatch, signup);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          name
          <input
            type="text"
            onChange={handleChange}
            name="username"
            id="name"
          />
        </label>
        <label htmlFor="email">
          email
          <input type="email" onChange={handleChange} name="email" id="email" />
        </label>
        <label htmlFor="password">
          password
          <input
            type="password"
            onChange={handleChange}
            name="password"
            id="password"
          />
        </label>
        <button type="submit">Signup</button>
      </form>
    </>
  );
}

export default Signup;

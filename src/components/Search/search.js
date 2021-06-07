import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { search } from '../../store/search.js';
import cookie from 'react-cookies';
// profile page
// search for a user using username.

function Search() {
  const [name, setName] = useState('');
  const state = useSelector((state) => {
    return {
      search: state.search,
    };
  });
  console.log('search state', state);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    dispatch(search(name, cookie.load('auth')));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">
          <input
            type="text"
            name="search"
            id="search"
            onChange={handleChange}
          />
        </label>
        <button type="submit">search</button>
      </form>
      <div>hello from search</div>
    </>
  );
}

export default Search;

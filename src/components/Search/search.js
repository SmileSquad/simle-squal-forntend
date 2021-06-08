import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { search } from '../../store/search.js';
import cookie from 'react-cookies';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './search.scss'

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
  console.log('search', state);
  return (
    <div>
      <Form  onSubmit={handleSubmit}> 
          <Form.Control class= 'searchForm input1' style={{background :'#363636' , width: 350, display: 'inline-block' }
          } type="text" name="search" id="search" onChange={handleChange}
           placeholder="Search by username or Email" />
        <Button style={{ height: 43, margin: 2 }} variant="warning" type="submit">
        search
        </Button>
      </Form>
      <div>hello from search</div>


    </div>
  );
}

export default Search;

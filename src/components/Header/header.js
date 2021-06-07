import React from 'react';
import { NavLink } from 'react-router-dom';
import Auth from '../Auth/auth';
// Header
// Goes into all pages
// the auth should be included

function header() {
  return (
    <div>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/About">About us</NavLink>
        </li>
        <Auth />
      </ul>
    </div>
  );
}

export default header;

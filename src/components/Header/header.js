import React from 'react';
import { NavLink } from 'react-router-dom';
import Auth from '../Auth/auth.js';
import './header.scss';
import logo from '../../assets/yellowlogo.png'
// import '../../../public/assets/yellowlogo.png'
// Header
// Goes into all pages
// the auth should be included

function header() {
  return (
    <div className="header">
      <div>
        <img className="logo" src={logo} alt='logo' />
        <h2>SMILE SQUAD</h2>
      </div>
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
      </ul>
      <Auth />
    </div>
  );
}

export default header;

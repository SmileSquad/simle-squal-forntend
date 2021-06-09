import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { socket } from '../../store/auth.js';
import Auth from '../Auth/auth.js';
import './header.scss';
import logo from '../../assets/yellowlogo.png';
import { If, Then } from 'react-if';
import { useSelector } from 'react-redux';
// Header
// Goes into all pages
// the auth should be included

function Header() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      user: state.auth,
    };
  });
  return (
    <div className="header">
      <div>
        <img className="logo" src={logo} alt="logo" />
        <h4>SMILE SQUAD</h4>
      </div>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <If condition={state.user.loggedIn}>
            <Then>
              <NavLink to="/profile">Profile</NavLink>
            </Then>
          </If>
        </li>
        <li>
          <NavLink to="/About">About us</NavLink>
        </li>
        <If condition={state.user.loggedIn}>
          <Then>
            <NavLink
              to="/game"
              onClick={() => {
                dispatch(socket());
              }}
            >
              Game
            </NavLink>
          </Then>
        </If>
      </ul>
      <div className="auth">
        <Auth />
      </div>
    </div>
  );
}

export default Header;

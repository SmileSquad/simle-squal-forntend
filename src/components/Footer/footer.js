import React from 'react';
import { NavLink } from 'react-router-dom';
import fb from '../../assets/fb.png'
import tw from '../../assets/tw.png'
import google from '../../assets/google.png'

import './footer.scss';

// Footer goes in all pages
// see the wireframe

function footer() {
  return <div className="footer">
    <div>
      <ul className="footerUl">
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">ABout</NavLink>
        </li>
      </ul>
    </div>
    <div>
      <ul className="socialMedia">
        <li>
          <NavLink to="/">
            <img src={fb} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <img src={google} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <img src={tw} />
          </NavLink>
        </li>
      </ul>
    </div>
    <div className="discretion">
      <p >
        an exciting game to make people smile and making communication easier by play with each other and make new friend
    </p>
    </div>
  </div>
}


export default footer;

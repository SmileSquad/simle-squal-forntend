import React from 'react';
import { NavLink, Link } from 'react-router-dom';
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
          <a href={`https://www.facebook.com/`}><img src={fb} /> </a>
        </li>
        <li>
          <a href={`https://www.google.com/`}><img src={google} /> </a>
        </li>
        <li>
          <a href={`https://www.twitter.com/`}><img src={tw} /> </a>
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

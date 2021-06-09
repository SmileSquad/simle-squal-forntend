import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import minion1 from '../../assets/minionstart.png';

import './start.scss';

// Profile Page
// send the user to a room.

function start() {
  return (
    <div className="startGame1">
      <img className="minion1" src={minion1} alt="minions" />
      <Button className="startBtn" variant="warning" size="lg">
      <NavLink className="gameNav" to="/game">START</NavLink>
      </Button>
    </div>
  );
}

export default start;

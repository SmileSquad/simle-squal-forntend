import React from 'react';
import Button from 'react-bootstrap/Button'
import minion1 from '../../assets/minion1.png'

import './start.scss'

// Profile Page
// send the user to a room.

function start() {
  return <div className="start">
    <img className="minion1" src={minion1} />
    <Button className= 'startBtn' variant="warning" size="lg"> START</Button>
  </div>

}

export default start;

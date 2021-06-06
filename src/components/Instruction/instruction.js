import React from 'react';
import './instruction.scss'
import img from '../../assets/logoPoint.png'
// Home Page
// instruction How to play the game

function instruction() {
  return (
    <div className="instruction">
      <div className="title">
        <h4>Game Instructions</h4>
        <p>Two players connect with each other in video call , make an opponent smile and  get a point</p>
        <p>Rules of the game</p>
      </div>
      <div className="points">
        <div className="point">
          <img src={img} alt="img" />
          <p>When your turn, you must make your opponent laughing and you will get a point</p>
        </div>
        <div className="point">
          <img src={img} alt="img" />
          <p>When your opponent turn, try not to laugh , if you laugh your opponent will get a point</p>
        </div>
        <div className="point">
          <img src={img} alt="img" />
          <p>Every player turn based on  a timer wiches 13 seconds</p>
        </div>
        <div className="point">
          <img src={img} alt="img" />
          <p>When the player reaches three points will win, and another one  will lose</p>
        </div>
      </div>
    </div>
  )
}

export default instruction;

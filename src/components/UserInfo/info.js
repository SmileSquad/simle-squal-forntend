import React from 'react';
import { useSelector } from 'react-redux';
import './info.scss';

// profile page
// get user data fromt the server handled by redux

function Info() {
  const state = useSelector((state) => {
    return state.auth;
  });
  return (
    <div className="userInfo">
      <img src={state.user.imgUrl} alt="user" />
      <div className="username">{state.user.username}</div>
      <div className="info1">Played Games: {state.user.gamePlayed}</div>
      <div >Win Games: {state.user.gameWin}</div>
      <div >Win Ratio: {state.user.winRatio}</div>
    </div>
  );
}

export default Info;

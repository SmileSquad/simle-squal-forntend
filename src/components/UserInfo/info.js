import React from 'react';
import { useSelector } from 'react-redux';
// profile page
// get user data fromt the server handled by redux

function Info() {
  const state = useSelector((state) => {
    return state.auth;
  });
  return (
    <>
      <img src={state.user.imgUrl} alt="user" />
      <div>{state.user.username}</div>
      <div>Game Played: {state.user.gamePlayed}</div>
      <div>Game Win: {state.user.gameWin}</div>
      <div>Win Ratio: {state.user.winRatio}</div>
    </>
  );
}

export default Info;

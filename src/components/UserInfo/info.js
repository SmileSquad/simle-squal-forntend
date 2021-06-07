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
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque architecto suscipit, nulla tempore voluptatum ea facilis quae amet sit quibusdam natus, omnis dolorum vero dolores blanditiis provident quia soluta harum.  </p>
      <img src={state.user.imgUrl} alt="user" />
      <div>{state.user.username}</div>
      <div>Game Played: {state.user.gamePlayed}</div>
      <div>Game Win: {state.user.gameWin}</div>
      <div>Win Ratio: {state.user.winRatio}</div>
    </>
  );
}

export default Info;

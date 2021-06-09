import React from 'react';
import './chat.scss'
import chatimg from '../../assets/chat.png'
// profile Page
// should be accessable only if the user logged in
// global chat with all players

function chat() {
  return <div>
   <h5> Global Chat</h5>
   <img   src={chatimg} alt="chatimg"/>
    </div>;
}

export default chat;

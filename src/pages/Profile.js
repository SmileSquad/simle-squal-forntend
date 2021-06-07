import React from 'react';
import Header from '../components/Header/header.js';
import Footer from '../components/Footer/footer.js';
import Info from '../components/UserInfo/info.js';
import Friends from '../components/Friends/friends.js';
import Search from '../components/Search/search.js';
import Posts from '../components/Posts/posts.js';
import Chat from '../components/Chat/chat.js';
import Start from '../components/Start/start.js';

function Profile() {
  return (
    <>
      <Header />
      <main>
        <Info />
        <Search />
        <Posts />
        <Friends />
        <Chat />
        <Start />
      </main>
      <Footer />
    </>
  );
}

export default Profile;

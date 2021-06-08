import React from 'react';
import Header from '../components/Header/header.js';
import Footer from '../components/Footer/footer.js';
import Info from '../components/UserInfo/info.js';
import Friends from '../components/Friends/friends.js';
import Search from '../components/Search/search.js';
import Posts from '../components/Posts/posts.js';
import Chat from '../components/Chat/chat.js';
import Start from '../components/Start/start.js';
import './Profile.scss';

function Profile() {
  return (
    <>
      <Header />
      <main className="aboutUs2">
        <div class="flex-col">
          <Info />
          <Friends />
        </div>

        <div class="flex-col">
          <Search />
          <Posts />
          <Start />
        </div>

        <div class="flex-col">
          <Chat />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Profile;

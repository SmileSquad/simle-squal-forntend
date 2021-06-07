import React from 'react';
import Header from '../components/Header/header.js';
import Footer from '../components/Footer/footer.js';
import Info from '../components/UserInfo/info.js';
import Friends from '../components/Friends/friends.js';
import Search from '../components/Search/search.js';
import Posts from '../components/Posts/posts.js';
import Chat from '../components/Chat/chat.js';
import Start from '../components/Start/start.js';
import { useSelector } from 'react-redux';
function Profile() {
  const state = useSelector((state) => {
    return {
      user: state.auth,
    };
  });
  return (
    <>
      <Header />
      {console.log('user', state)}
      <main>
        <Info />
        <Friends />
        <Search />
        <Posts />
        <Chat />
        <Start />
      </main>
      <Footer />
    </>
  );
}

export default Profile;

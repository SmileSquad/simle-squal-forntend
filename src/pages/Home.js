import React from 'react';
import Header from '../components/Header/header.js';
import Landscape from '../components/Landscape/landscape.js';
import Leaderboard from '../components/Leaderboard/leaderboard.js';
import Vs from '../components/Vs/vs.js';
import Instruction from '../components/Instruction/instruction.js';
import Contact from '../components/ContactUs/contact.js';
import Footer from '../components/Footer/footer.js';

function Home() {
  return (
    <>
      <Header />
      <main>
        
        <Landscape />
        <Leaderboard />
        <Vs />
        <Instruction />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;

import React from 'react';
import './team.scss';
import raghad from '../../assets/raghad.png'
import faten from '../../assets/faten.png'
import omar from '../../assets/omar.png'
import ayoub from '../../assets/ayoub.png'
import bahaa from '../../assets/bahaa.png'

// about us page
// add the team images and links

function team() {
  return (
    <div className="team">
      <h2 className="h22">Our Team</h2>
      <div className="aboutUs" >

        <div className="aboutUs2">
          <div>
            <img src={ayoub} alt='ayoub'/>
            <h5>Ayoub Kandah</h5>
          </div>
          <div>
            <img src={omar} alt='omar'/>
            <h5>Omar Al-Tarawneh</h5>
          </div>
          <div>
            <img src={bahaa} alt='bahaa'/>
            <h5>Bahaa Al-Zghayar</h5>
          </div>
        </div>

        <div className="aboutUs2">
          <div>
            <img src={faten} alt='faten' />
            <h5>Faten Samman</h5>

          </div>
          <div>
            <img src={raghad} alt='raghad' />
            <h5>Raghad Mustafa</h5>

          </div>
        </div>
      </div>
    </div>
  )
}

export default team;

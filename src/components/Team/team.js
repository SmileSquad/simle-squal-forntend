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
    <div className="aboutUs" >

      <div className="aboutUs2">
        <div>
          <img src={ayoub} />
        </div>
        <div>
          <img src={omar} />
        </div>
        <div>
          <img src={bahaa} />
        </div>
      </div>

      <div className="aboutUs2">
        <div>
          <img src={faten} />
        </div>
        <div>
          <img src={raghad} />
        </div>
      </div>
    </div>
  )
}

export default team;

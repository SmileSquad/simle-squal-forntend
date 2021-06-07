import React from 'react';
import './leaderboard.scss';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import leaderimg from '../../assets/cardL.png'

// Home Page
// top players from the server handled by redux

function leaderboard() {
  return (
    <div className="leaderboard">
      <div className="title">
        <h4>Leaderboard</h4>
        <p> Be One of Our Top  Players</p>
      </div>
      <div className="cards">

        <Card className="bg-dark text-white">
          <Card.Img src={leaderimg} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Text className="num" >1</Card.Text>
            <Card.Title className="wName">Winner Name</Card.Title>
            <Card.Text className="wRatio">
              Win Ratio 90%
    </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card className="bg-dark text-white">
          <Card.Img src={leaderimg} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Text className="num" >2</Card.Text>
            <Card.Title className="wName">Winner Name</Card.Title>
            <Card.Text className="wRatio">
              Win Ratio 90%
    </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card className="bg-dark text-white">
          <Card.Img src={leaderimg} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Text className="num" >3</Card.Text>
            <Card.Title className="wName">Winner Name</Card.Title>
            <Card.Text className="wRatio">
              Win Ratio 90%
    </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card className="bg-dark text-white">
          <Card.Img src={leaderimg} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Text className="num" >4</Card.Text>
            <Card.Title className="wName">Winner Name</Card.Title>
            <Card.Text className="wRatio">
              Win Ratio 90%
    </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card className="bg-dark text-white">
          <Card.Img src={leaderimg} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Text className="num" >5</Card.Text>
            <Card.Title className="wName">Winner Name</Card.Title>
            <Card.Text className="wRatio">
              Win Ratio 90%
    </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card className="bg-dark text-white">
          <Card.Img src={leaderimg} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Text className="num" >6</Card.Text>
            <Card.Title className="wName">Winner Name</Card.Title>
            <Card.Text className="wRatio">
              Win Ratio 90%
    </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    </div>
  )
}

export default leaderboard;

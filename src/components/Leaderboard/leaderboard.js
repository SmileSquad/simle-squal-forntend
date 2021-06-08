import React, { useEffect } from 'react';
import './leaderboard.scss';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getLeaders } from '../../store/leaderboard.js';
import { useSelector, useDispatch } from 'react-redux';
import leaderimg from '../../assets/cardL.png';

// Home Page
// top players from the server handled by redux

function Leaderboard() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      leader: state.leaders,
    };
  });
  useEffect(() => {
    if (!state.leader.length) {
      dispatch(getLeaders());
    }
    // eslint-disable-next-line
  }, []);
  console.log('leader', state);
  return (
    <div className="leaderboard">
      <div className="title">
        <h4>Leaderboard</h4>
        <p> Be One of Our Top Players</p>
      </div>
      <div className="cards">
        {state.leader.map((user, idx) => {
          return (
            <Card className="bg-dark text-white">
              <Card.Img src={leaderimg} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Text className="num">{idx + 1}</Card.Text>
                <Card.Title className="wName">{user.username}</Card.Title>
                <Card.Text className="wRatio">
                  win ratio: {user.winRatio}%
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          );
        })}
        {/* <Card className="bg-dark text-white">
          <Card.Img src={leaderimg} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Text className="num">2</Card.Text>
            <Card.Title className="wName">Winner Name</Card.Title>
            <Card.Text className="wRatio">Win Ratio 90%</Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card className="bg-dark text-white">
          <Card.Img src={leaderimg} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Text className="num">3</Card.Text>
            <Card.Title className="wName">Winner Name</Card.Title>
            <Card.Text className="wRatio">Win Ratio 90%</Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card className="bg-dark text-white">
          <Card.Img src={leaderimg} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Text className="num">4</Card.Text>
            <Card.Title className="wName">Winner Name</Card.Title>
            <Card.Text className="wRatio">Win Ratio 90%</Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card className="bg-dark text-white">
          <Card.Img src={leaderimg} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Text className="num">5</Card.Text>
            <Card.Title className="wName">Winner Name</Card.Title>
            <Card.Text className="wRatio">Win Ratio 90%</Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card className="bg-dark text-white">
          <Card.Img src={leaderimg} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Text className="num">6</Card.Text>
            <Card.Title className="wName">Winner Name</Card.Title>
            <Card.Text className="wRatio">Win Ratio 90%</Card.Text>
          </Card.ImgOverlay>
        </Card> */}
      </div>
    </div>
  );
}

export default Leaderboard;

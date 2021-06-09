import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFriendsList, removeFriend, report } from '../../store/friends';

import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import BlockIcon from '@material-ui/icons/Block';
import Card from 'react-bootstrap/Card';
import { If, Else, Then } from 'react-if';

import './friends.scss';

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

function Friends() {
  const classes = useStyles();

  const [reportState, setReport] = useState({});
  const [show, setShow] = useState(false);
  const [evenSelected, setEvenSelected] = useState('');
  const [block, setBlock] = useState(true);


  const state = useSelector((state) => {
    return { friend: state.friends, user: state.auth };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (state.user.user.id) {
      if (!state.friend.arr.length) {
        dispatch(getFriendsList(state.user.user.id, state.user.token));
      }
    }
    // eslint-disable-next-line
  }, [state.user]);
  const handleChange = (e) => {
    setReport({ ...reportState, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.id, reportState);
    dispatch(report(e.target.id.value, state.user.token, reportState));
  };


  const handleSelectL2 = (id, i) => {
    setEvenSelected(i)
    setShow(!show)                 
  };

  return (
    <div class="friends">
      <h5>Friend</h5>


      {state.friend.arr.map((user, id) => {
        return (
          <div>
            <Card
              bg="dark"
              key={id}
              style={{ width: '22rem' }}
              className="mb-3 post"
            >
              <Card.Header className="CardHeader">


                <img className="imgPost dot " src={user.imgUrl} alt="user" />{' '}
                <p style={{ color: 'white', fontSize: '15px', marginTop: '3px' }}> {user.username} </p>

                <Tooltip style={{ float: 'right', marginTop: '-5px' }} title="Delete">
                  <IconButton aria-label="delete">
                    <DeleteIcon style={{ color:'#9e9d9d' }}
                      onClick={() => {

                        dispatch(
                          removeFriend(user.id, state.user.user.id, state.user.token)
                        );
                      }} />
                  </IconButton>
                </Tooltip>


                <If condition={block === true}>
                  <Then>
                    <Tooltip style={{ float: 'right', marginTop: '-5px' }} title='Report'>
                      <IconButton aria-label="BlockIcon">


                        <BlockIcon style={{ color: '#9e9d9d' }}

                          key={id}
                          className={
                            evenSelected === id
                              ? "selectedRBox"
                              : "selectorRBox"
                          }
                          onClick={e => handleSelectL2(e, id)}
                        />
                      
                      </IconButton>
                    </Tooltip>

                    <If condition={show && evenSelected === id}>
                        <Then>
                        <form  style={{ width:'328px' , marginLeft:'10px'}}  onSubmit={handleSubmit}>
                        <label htmlFor="message">

                            <input
                              type="text"
                              name="message"
                              id="message"                              onChange={handleChange}
                              style={{width:'328px', height:'30px'}}
                            />
                            </label>
  <input
                      type="text"
                      name="id"
                      id="id"
                      hidden
                      value={user.id}
                      onChange={handleChange}
                    />
                          <button style={{ margin: '5px 0 5px 60px',  borderRadius:'15px', fontSize:'15px' , width:'100px'}} type="submit">Report</button>

                          <button style={{ borderRadius:'15px' , fontSize:'15px' , width:'100px'}} onClick={() => {
                            setShow(!show)
                            setBlock(true)                          
                          }} >Cancel</button>
                           
                        </form>
                        </Then>

                        </If>
                  </Then>
  
                </If>
              </Card.Header>
            </Card>

          </div>
        );
      })}
    </div>
  );
}

export default Friends;



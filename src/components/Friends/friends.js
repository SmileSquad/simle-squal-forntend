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
  return (
    <div class="friends">
      <h5>Friend</h5>


      {state.friend.arr.map((user, id) => {
        return (
               <div>
              <img className="imgPost dot " src={user.imgUrl} alt="user" />{' '}
              <p style={{ fontSize: '15px', marginTop: '3px' }}> {user.username} </p>

              <Tooltip style={{ float: 'right', marginTop: '-5px' }} title="Delete">
                <IconButton aria-label="delete">
                  <DeleteIcon style={{color:'#9e9d9d'}}
                    onClick={() => {
                      
                      dispatch(
                        removeFriend(user.id, state.user.user.id, state.user.token)
                      );
                    }} />
                </IconButton>
              </Tooltip>

              <Tooltip style={{ float: 'right', marginTop: '-5px' }} title='Report'>
                <IconButton aria-label="BlockIcon">
                  <BlockIcon style={{color:'#9e9d9d'}} onClick={() => {
                                          setShow(!show)
                  }} />
                  {show && <form  className='formClass' onSubmit={handleSubmit}>
                    <label htmlFor="message">
                      <input
                        type="text"
                        name="message"
                        id="message"
                        onChange={handleChange}
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

                    <button type="submit">report</button>
                    <button onClick={() => {
                      setShow(!show)
                    }} >Cancel</button>

                  </form>}
                </IconButton>
              </Tooltip>



        </div>











          // <div className="FriendDiv">
          //   <p> {user.username} </p>
          //   <form onSubmit={handleSubmit}>
          //     <label htmlFor="message">
          //       <input
          //         type="text"
          //         name="message"
          //         id="message"
          //         onChange={handleChange}
          //       />
          //     </label>
          //     <input
          //       type="text"
          //       name="id"
          //       id="id"
          //       hidden
          //       value={user.id}
          //       onChange={handleChange}
          //     />
          //     <button type="submit">report</button>
          //   </form>



          //   <button
          //     onClick={() => {
          //       dispatch(
          //         removeFriend(user.id, state.user.user.id, state.user.token)
          //       );
          //     }}
          //   >
          //     {' '}
          //     remove{' '}
          //   </button>

          // </div>
        );
      })}
    </div>
  );
}

export default Friends;



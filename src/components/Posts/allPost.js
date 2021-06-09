import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost, getAllPosts } from '../../store/posts.js';
import cookie from 'react-cookies';
import Card from 'react-bootstrap/Card';
import './posts.scss';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

function AllPost() {
  const state = useSelector((state) => {
    return {
      user: state.auth,
      post: state.post,
    };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    const token = cookie.load('auth');
    if (token) {
      if (!state.post.posts.length) {
        dispatch(getAllPosts(token));
      }
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className="allPost">
      {state.post.posts.map((el, id) => {
        return (
          <Card
            bg="white"
            key={id}
            text={el === 'light' ? 'dark' : 'white'}
            style={{ width: '22rem' }}
            className="mb-3 post"
          >
            <Card.Header className="CardHeader">
              {' '}
              <img className="imgPost" src={el.user.imgUrl} alt="user" />{' '}
              {el.user.username}

              <Tooltip style={{ float: 'right' , marginTop: '-5px'}} title="Delete">
                <IconButton aria-label="delete">
                  <DeleteIcon 
                    onClick={() => {
                      if (state.user.user.id === el.user.id) {
                        dispatch(deletePost(el._id, state.user.token));
                        // post id el._id
                      } else {
                        alert('you can not delete this post');
                      }
                    }} />
                </IconButton>
              </Tooltip>


            </Card.Header>
            <Card.Body className="CardBody">
              <Card.Title className="CardBody">{el.title}</Card.Title>
              <Card.Text className="CardBody">{el.content}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default AllPost;

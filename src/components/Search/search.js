import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { search } from '../../store/search.js';
import cookie from 'react-cookies';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

import { loadCSS } from 'fg-loadcss';
import Icon from '@material-ui/core/Icon';

import './search.scss'

// profile page
// search for a user using username.

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
    width: '430px',
  },
  // pop: {
  //   width: '1000px',
  // },
  root: {
    '& > .fa': {
      margin: theme.spacing(2),
    },
  },
  icon:{
    marginLeft: '220px'
  },
}));

function Search() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  React.useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  const [name, setName] = useState('');
  const state = useSelector((state) => {
    return {
      search: state.search,
    };
  });
  console.log('search state', state);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnchorEl(e.currentTarget);
    e.target.reset();
    dispatch(search(name, cookie.load('auth')));
  };

  console.log('search', state.search);
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Control class='searchForm input1' style={{ background: '#363636', width: 350, display: 'inline-block' }
        } type="text" name="search" id="search" onChange={handleChange}
          placeholder="Search by username or Email" />
        <Button style={{ height: 43, margin: 2 }} variant="warning" type="submit">
          search
        </Button>
      </Form>

      {state.search.map((el) => {
        return (
          <Popover
            // className={classes.pop}
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography className={classes.typography}>{el.email}
            <Typography className={classes.icon}>
              <Icon className="fa fa-plus-circle" fontSize="small" />
            </Typography>
            </Typography>
          </Popover>
        );
      })}

    </div>
  );
}

export default Search;

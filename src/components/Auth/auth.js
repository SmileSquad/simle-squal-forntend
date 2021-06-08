import React from 'react';
// import Button from 'react-bootstrap/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Signin from './signin.js';
import Signup from './signup.js';

// Header Components
// signin signup authentication as a Modal/ popup with Google Auth button
function Auth() {
  return (
    <>
      <Signup />
      <Signin />
    </>
  )
}

export default Auth;

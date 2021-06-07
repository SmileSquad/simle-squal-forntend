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

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Image from '../../assets/signin.png';
import './auth.scss'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  backDrop: {
    backdropFilter: "blur(3px)",
    backgroundColor: 'rgba(0,0,30,0.4)'
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage: `url(${Image})`,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.warning.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    height: '90%'
  },
  textField: {
    backgroundColor: theme.palette.warning.main,
    opacity: '.6',
    borderColor: theme.palette.warning.main,
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#0f0f0f"
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: '#9e9d9d',
      marginTop: '-12px',
      opacity: '1',
      fontWeight: 'bold',
    }

  },
  input: {
    backgroundColor: 'white',
    opacity: '.6',
  },
  submit: {
    '&:hover': {
      backgroundColor: '#0f0f0f',
      color: theme.palette.warning.main,
      border: '1px solid #f5b201',
    margin: theme.spacing(0, 0, 2),

    },
    margin: theme.spacing(0, 0, 2),
    backgroundColor: theme.palette.warning.main,
    fontSize: 15,
    fontWeight: 'bold',
  },
  sign: {
    maxWidth: '70px',
    '&:hover': {
      backgroundColor: '#0f0f0f',
      color: theme.palette.warning.main,
      border: '1px solid #f5b201',
    },
    backgroundColor: theme.palette.warning.main,

  },

  Typography: {
    color: theme.palette.warning.main,
  },
  Label: {

    color: theme.palette.warning.main
  }
}));



// Header Components
// signin signup authentication as a Modal/ popup with Google Auth button
function Auth() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  return (
    <>
      <Button variant="contained" className={classes.sign} onClick={handleOpen}  >Signup</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}

        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          classes: {
            root: classes.backDrop,
          },
        }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography className={classes.Typography} component="h1" variant="h5">
              Sign up
        </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="user"
                label="User Name"
                name="User"
                // autoComplete="email"
                // autoFocus
                className={classes.textField}
                InputProps={{
                  className: classes.input,
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                // autoFocus
                className={classes.textField}
                InputProps={{
                  className: classes.input,
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                className={classes.textField}
                InputProps={{
                  className: classes.input,
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" className={classes.Label} />}
                label="Remember me"
                className={classes.Label}

              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              >
                Sign Up
          </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              >
                Sign Up By Google
          </Button>
            </form>
          </div>
        </Container>
      </Modal>



      <Button variant="contained" className={classes.sign} onClick={handleOpen1}>Signin</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open1}
        onClose={handleClose1}

        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          classes: {
            root: classes.backDrop,
          },
        }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography className={classes.Typography} component="h1" variant="h5">
              Sign in
        </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                className={classes.textField}
                InputProps={{
                  className: classes.input,
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                className={classes.textField}
                InputProps={{
                  className: classes.input,
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" className={classes.Label} />}
                label="Remember me"
                className={classes.Label}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              >
                Sign In
          </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              >
                Sign In By Google
          </Button>
            </form>
          </div>
        </Container>
      </Modal>
      {/* <div>Signin / Signup / Google Auth button</div> */}
    </>
  )
}

export default Auth;

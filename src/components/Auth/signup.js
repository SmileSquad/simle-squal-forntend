import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LoginGoogle from '../Google/google'; //.............. ما عملناها 

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './style.js';

import { signup } from '../../store/auth';
import { useDispatch } from 'react-redux';
import useForm from '../../Hooks/useForm';

// Header Components
// signin signup authentication as a Modal/ popup with Google Auth button
function Signup() {
    const dispatch = useDispatch();
    const [, handleChange, handleSubmit] = useForm(dispatch, signup);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                        <form onSubmit={handleSubmit} className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                name="username"
                                onChange={handleChange}
                                label='name'
                                // autoComplete="name"
                                // autoFocus
                                placeholder='username'
                                className={classes.textField}
                                InputProps={{
                                    className: classes.input,
                                }}
                            />
                            <TextField
                                onChange={handleChange}
                                variant="outlined"
                                margin="normal"
                                placeholder='your Email'
                                required
                                fullWidth
                                id="email"
                                name="email"
                                type="email"
                                // autoComplete="email"
                                // autoFocus
                                className={classes.textField}
                                InputProps={{
                                    className: classes.input,
                                }}
                            />
                            <TextField
                               onChange={handleChange}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                type="password"
                                id="password"
                                // autoComplete="current-password"
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
                                // type="submit"
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
        </>
    )
}

export default Signup;

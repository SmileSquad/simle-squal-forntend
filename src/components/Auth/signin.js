import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, signin, logout } from '../../store/auth.js';
import useForm from '../../Hooks/useForm.js';
import { If, Else, Then } from 'react-if';
import { useHistory } from 'react-router-dom';
import LoginGoogle from '../Google/google';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';

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
import Container from '@material-ui/core/Container';
import useStyles from './style.js';


// Header Components
// signin signup authentication as a Modal/ popup with Google Auth button
const SECRET = 'smilesquad';

function Signin() {

    const dispatch = useDispatch();

    const state = useSelector((state) => {
        return {
            user: state.auth,
        };
    });

    useEffect(() => {
        const token = cookie.load('auth');
        if (token) {
            const user = jwt.verify(token, SECRET);
            dispatch(login({ user, token }));
        }
        // eslint-disable-next-line
    }, []);

    const history = useHistory();
    const { loggedIn } = state.user;
    const [, handleChange, handleSubmit] = useForm(dispatch, signin);


    const classes = useStyles();
    const [open1, setOpen1] = React.useState(false);

    const handleOpen1 = () => {
        setOpen1(true);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };
    return (
        <>

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


                        <form className={classes.form} noValidate onSubmit={(e) => {
                            handleSubmit(e);
                            history.push('/profile');
                        }}>
                            <TextField
                                onChange={handleChange}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="username"
                                name="username"
                                autoComplete="username"
                                autoFocus
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
                                // type="submit"
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
        </>
    )
}

export default Signin;
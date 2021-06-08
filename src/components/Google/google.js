import React from 'react';
import superagent from 'superagent';
import { useDispatch } from 'react-redux';
import { login } from '../../store/auth.js';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

const clientId =
  '778913638708-68v8123cms7mrirq86hng29o1t5fj02a.apps.googleusercontent.com';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const onSuccess = async (res) => {
    const data = await superagent
      .post('https://smile-squad.herokuapp.com/api/v1/login-google')
      .send({ token: res.tokenId });
    dispatch(login({ user: data.body, token: data.body.token }));
    history.push('/profile');
  };

  const onFailure = (res) => {
    alert(`Please try to login again 😢`);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        // isSignedIn={true}
      />
    </div>
  );
}

export default Login;

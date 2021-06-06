import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './auth.scss'

// Header Components
// signin signup authentication as a Modal/ popup with Google Auth button
function auth() {
  return (
    <>
      <Button className="sign" variant="outline-warning">Signup</Button>
      <Button className="sign" variant="outline-warning">Signin</Button>
      {/* <div>Signin / Signup / Google Auth button</div> */}
    </>
  )
}

export default auth;

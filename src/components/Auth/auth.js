import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

// Header Components
// signin signup authentication as a Modal/ popup with Google Auth button
function auth() {
  return (
    <>
      <Button variant="outline-warning">Signup</Button>
      <Button variant="outline-warning">Signin</Button>
      {/* <div>Signin / Signup / Google Auth button</div> */}
    </>
  )
}

export default auth;

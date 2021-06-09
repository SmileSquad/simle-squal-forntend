import React from 'react';
import fb from '../../assets/fb.png'
import tw from '../../assets/tw.png'
import google from '../../assets/google.png'
import { Col, Form, Button } from "react-bootstrap";
import email from '../../assets/email.png'
import phone from '../../assets/phone.png'
import 'bootstrap/dist/css/bootstrap.min.css';

import './footer.scss';
import './contact.scss';

// Footer goes in all pages
// see the wireframe

function footer() {
  return (
    <div className="foot">
      <div className="footer">

        <div className="discretion" >
          <p  >
            an exciting game to make people smile and making communication easier by play with each other and make new friend
           </p>
          <div>
            <ul className="info" >
              <li>
                <img src={phone} alt="phone" />  56412350
                 </li>
              {/* <li>
                <img  src={email} alt="email" />  smile squad
                </li> */}
              <li>
                <img src={email} alt="email" />  smileSquad@squad.com
               </li>
            </ul>
          </div>
        </div>


        <div className="contact_1">
          <h2 className="contactH2"> Contact us</h2>
          <div >
            <Form style={{ opacity: .5 }} >
              <Form.Row>
                <Col>
                  <Form.Control className='input1' placeholder="Your Name" />
                </Col>
                <Col>
                  <Form.Control className='input1' placeholder="Your Email" />
                </Col>
              </Form.Row>
              <Form style={{ border: '2px solid #f5b201' }} >
                <Form.Control
                  className='input1'
                  as="textarea"
                  placeholder="Your Message"
                  style={{ height: '150px' }}
                />
              </Form>
            </Form>
          </div>
          <Button className='buttonC' variant="outline-warning">Send</Button>
        </div>

      </div>

      <div>
        <ul className="socialMedia">
          <li>
            <a href={`https://www.facebook.com/`}><img src={fb}alt="fb" /> </a>
          </li>
          <li>
            <a href={`https://www.google.com/`}><img src={google} alt="ggl"  /> </a>
          </li>
          <li>
            <a href={`https://www.twitter.com/`}><img src={tw}alt="tw"  /> </a>
          </li>
        </ul>
      </div>
    </div>
  )
}


export default footer;
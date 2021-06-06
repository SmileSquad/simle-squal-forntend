import React from 'react';
import { Col, Form ,Button} from "react-bootstrap";
import email from '../../assets/email.png'
import phone from '../../assets/phone.png'
import './contact.scss';

// Home Page
// should send a message to the website email using nodemail

function contact() {
  return ( <div className="contact_1">
    <div className="contact_2">
    <div>
      <ul className="info" style={ { color: '#f5b201'}}>
        <li>
          <img src={phone} />  56412350
        </li>
        <li>
          <img src={email} />  smile squad
        </li>
        <li>
          <img src={email} />  smileSquad@squad.com
        </li>
      </ul>
    </div>

    <h2 className="contactH2"> Contact us</h2>
  
      <div style={ { position: 'absolute'},{marginTop:'300px'}}>
        <Form style={{ opacity: 0.2 ,width: "800px" ,marginLeft: '300px',marginRight: '100px'}} >
          <Form.Row>
            <Col>
              <Form.Control  className= 'input1' style={{ border: '2px solid #f5b201'}} placeholder="Your Name" />
            </Col>
            <Col>
              <Form.Control  className= 'input1' style={{ border: '2px solid #f5b201'}}  placeholder="Your Email" />
            </Col>
          </Form.Row>
          <Form style={{ marginTop: '10px' , border: '2px solid #f5b201' , height: '150px'}} >
            <Form.Control
              className= 'input1'
              as="textarea"
              placeholder="Your Message"
              style={{ height: '200px' ,  border: '1px solid #f5b201'}}
            />
          </Form>
        </Form>
      </div>
      <Button className='buttonC' variant="outline-warning">Send</Button>

    </div>
  </div>
  )
}

export default contact;

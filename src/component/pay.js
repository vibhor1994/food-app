import PropType from 'prop-types';
import React from 'react';
import { Row,Col,Panel,Image,Media,Button,Form,ControlLabel,FormGroup,FormControl,Checkbox} from 'react-bootstrap';
import {Link} from 'react-router-dom';

// import img1 from './Black(2).jpg';


const Pay = () => {
  return(

    <Row className="show-grid carousel-div">
      <Col Col lg={6} lgOffset={3}>
<h2>Enter your details</h2>
    <Form horizontal>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={2}>
      Name
    </Col>
    <Col sm={10}>
      <FormControl type="email" placeholder="Name" />
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalName">
    <Col componentClass={ControlLabel} sm={2}>
      Contact no.
    </Col>
    <Col sm={10}>
      <FormControl type="text" placeholder="Contact no." />
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontal">
    <Col componentClass={ControlLabel} sm={2}>
        Address</Col>
        <Col smOffset={2} sm={10}>
        <FormControl componentClass="textarea" placeholder="textarea" />
        </Col>
      </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Checkbox>Remember me</Checkbox>
    </Col>
  </FormGroup>

  <h2>Card details</h2>

  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={2}>
      Card no.
    </Col>
    <Col sm={10}>
      <FormControl type="email" placeholder="Card no." />
    </Col>
  </FormGroup>


  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={2}>
      Expire Date
    </Col>
    <Col sm={10}>
      <FormControl type="date" placeholder="Date" />
    </Col>
  </FormGroup>



  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={2}>
      CVV
    </Col>
    <Col sm={10}>
      <FormControl type="text" placeholder="CVV" />
    </Col>
  </FormGroup>


</Form>
<Col lg={4} lgOffset={6}>
      <Link to="/menu">
      <button type="button" className="btn btn-default">Close</button>
      </Link>
      <Link to="/success">
      <button type="button" className="btn btn-primary">Pay</button>
      </Link>
      </Col>




      </Col>
    </Row>

  );
};

export default Pay;

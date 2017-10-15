import PropType from 'prop-types';
import React from 'react';
import { Carousel,Row,Col,Jumbotron} from 'react-bootstrap';
import {Link} from 'react-router-dom';

// import img1 from './Black(2).jpg';


const Sucss = () => {
  return(

    <Row className="show-grid carousel-div">
      <Col Col xs={12}>
        <Jumbotron>
          <h1 className="text-success">Payment Successful</h1>
          <p>Your food will be delivered shortly</p>
          <Link to="/">
          <button type="button" className="btn btn-primary">Back</button>
          </Link>
        </Jumbotron>
      </Col>
    </Row>

  );
};

export default  Sucss;

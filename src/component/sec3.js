import PropType from 'prop-types';
import React from 'react';
import { Row,Col,Image} from 'react-bootstrap';




const Footr = () => {
  return(

    <Row className="show-grid carousel-div footer-div">
      <Col lg={12} className="">

        <Col lg={4} className="text-center">
          <h3><strong>LOCATION</strong></h3>
          <p>The unknown Building</p>
          <p>Some Street name,</p>
          <p>city DIstrict</p>
          <p>State 111000</p>

        </Col>

        <Col lg={4} className="text-center">
          <h3><strong>AROUND THE WEB</strong></h3>
          <div  className="sec3-img-div">
            <Col lg={3} xs={6} md={4}>
              <Image  className="sec3-web-img" src="/assets/facebook.png"  />
            </Col>
            <Col lg={3} xs={6} md={4}>
              <Image   className="sec3-web-img" src="/assets/google-plus.png" />
            </Col>
            <Col lg={3} xs={6} md={4}>
              <Image   className="sec3-web-img" src="/assets/youtube.png"  />
            </Col>
            <Col lg={3} xs={6} md={4}>
              <Image   className="sec3-web-img" src="/assets/twitter.png"  />
            </Col>
          </div>
        </Col>

        <Col lg={4} className="text-center">
          <h3><strong>CONTACT</strong></h3>
          <h5>FoOdie.com</h5>
          <p>145365 , 489559 , 145862</p>
          <p>contact-us@foodie.com</p>
        </Col>

      </Col>

      <Col lg={12} className="text-center footer-sub-div">
        <p>Copyright © FoOdie.com 2017</p>
      </Col>
    </Row>

  );
};

export default Footr;

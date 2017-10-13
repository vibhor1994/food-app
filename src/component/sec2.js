import PropType from 'prop-types';
import React from 'react';
import { Row,Col,Image} from 'react-bootstrap';




const Sec2 = () => {
  return(

    <Row className="show-grid carousel-div sec2-desc">
      <Col lg={12} className="strip strip-top">
      </Col>
      <h1></h1>
      <Col Col lg={3} className="text-center sec2-sub-div">
        <div  className="sec2-img-div"><Image src="/assets/location-user.png" rounded /></div>
        <h4>Track Your Order</h4>
      </Col>
      <Col Col lg={3} className="text-center sec2-sub-div">
        <div  className="sec2-img-div"><Image src="/assets/settings.png" rounded /></div>
        <h4>No Minimum order</h4>
      </Col>
      <Col Col lg={3} className="text-center sec2-sub-div">
        <div  className="sec2-img-div"><Image src="/assets/remote-control-hand.png" rounded /></div>
        <h4>Multiple Payment Options</h4>
      </Col>
      <Col Col lg={3} className="text-center sec2-sub-div">
        <div  className="sec2-img-div"><Image src="/assets/teapot.png" rounded /></div>
        <h4>Delievered Fresh</h4>
      </Col>
      <Col lg={12} className="strip strip-bottom">
      </Col>
      <Col Col lg={3} className="text-center sec2-sub-div">
        <div  className="sec2-img-div"><Image src="/assets/chef-hat.png" rounded /></div>
        <h4>Delicious Food</h4>
      </Col>
      <Col Col lg={3} className="text-center sec2-sub-div">
        <div  className="sec2-img-div"><Image src="/assets/book.png" rounded /></div>
        <h4>Huge Menu To Select With</h4>
      </Col>
      <Col Col lg={3} className="text-center sec2-sub-div">
        <div  className="sec2-img-div"><Image src="/assets/shopping-cart-add.png" rounded /></div>
        <h4>Order Easily</h4>
      </Col>
      <Col Col lg={3} className="text-center sec2-sub-div">
        <div  className="sec2-img-div"><Image src="/assets/clock.png" rounded /></div>
        <h4>Delievered In No Time</h4>
      </Col>
    </Row>

  );
};

export default Sec2;

import PropType from 'prop-types';
import React from 'react';
import { Carousel,Row,Col,Jumbotron} from 'react-bootstrap';
// import img1 from './Black(2).jpg';


const About_us = () => {
  return(

    <Row className="show-grid carousel-div">
      <Col Col xs={12}>
        <Jumbotron>
          <h1>FoOdie</h1>
          <p>A FoOdie we eat a lot :-) With a fast pace expansion and over-whelming response by millions across the country, FoOdie Restaurants has over 28 locations across India and is also present in the Middle East. Come to FoOdie to savour the taste of tradition.Tikka is applied on the spot between the brows which is considered the seat of latent wisdom and mental concentration and is very important for worship. This also indicates the point at which the (third) spiritual eye opens. All thoughts and actions are supposed to be governed by this spot. Putting of the third eye symbolises the quest for the 'opening' of the third eye. All rites and ceremonies of the Hindus begin with a tilak topped wit a few grains of rice placed with the index finger or the thumb.

Aarti is performed as an act of veneration and love. It is often performed as a mark of worship and to seek blessings from God, to welcome the guests, for children on their birthdays, family members on auspicious occasions or to welcome a newly wed couple. The purpose is to ward off evil effects and malefic influence of the 'evil eye'!</p>
        </Jumbotron>
      </Col>
    </Row>

  );
};

export default  About_us;

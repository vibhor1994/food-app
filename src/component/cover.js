import PropType from 'prop-types';
import React from 'react';
import { Carousel,Row,Col} from 'react-bootstrap';
// import img1 from './Black(2).jpg';


const Cover = () => {
  return(

    <Row className="show-grid carousel-div">
      <Col Col xs={12}>
        <Carousel>
          <Carousel.Item>
            <img className="carousel-img" className="carousel-img"  height={300} alt="900x500" src= {require('../../public/assets/domi.jpg')} />

          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img"  height={300} alt="900x500" src= {require('../../public/assets/sub1.jpg')} />

          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img"  height={300} alt="900x500" src= {require('../../public/assets/bgk1.jpg')} />

          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img"  height={300} alt="900x500" src={require('../../public/assets/mcd1.jpg')} />

          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img"  height={300} alt="900x500" src={require('../../public/assets/mcd2.jpg')} />

          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>

  );
};

export default Cover;

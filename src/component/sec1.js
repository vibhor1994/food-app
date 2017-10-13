import PropType from 'prop-types';
import React from 'react';
import { Row,Col,Panel,Image,Media,Button,Form,ControlLabel,FormGroup,FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';




const Sec1 = () => {
  return(

    <Row className="show-grid carousel-div">
      <Col Col lg={6}>
        <Panel className="panel-div" header={<h3>Trending tasts</h3>} bsStyle="success">
          <Col className="food-image-div" lg={3} xs={4} md={4}>
            <Image id="sec1-taste-img" src={require('../../public/assets/images.jpg')} rounded responsive />
          </Col>
          <Col className="food-image-div" lg={3}  xs={4} md={4}>
            <Image id="sec1-taste-img" src={require('../../public/assets/1382541181808.jpg')} rounded responsive />
          </Col>
          <Col className="food-image-div" lg={3}  xs={4} md={4}>
            <Image id="sec1-taste-img" src={require('../../public/assets/earls-stew.jpg')} rounded responsive />
          </Col>
          <Col className="food-image-div" lg={3}  xs={4} md={4}>
            <Image id="sec1-taste-img" src={require('../../public/assets/images (1).jpg')} rounded responsive />
          </Col>
          <Col className="food-image-div"  lg={3} xs={4} md={4}>
            <Image id="sec1-taste-img" src={require('../../public/assets/shutterstock_103781039.jpg')} rounded responsive />
          </Col>
          <Col className="food-image-div" lg={3}  xs={4} md={4}>
            <Image id="sec1-taste-img" src={require('../../public/assets/filename-img-5360-jpg.jpg')} rounded responsive />
          </Col>
          <Col className="food-image-div" lg={3}  xs={4} md={4}>
            <Image id="sec1-taste-img" src={require('../../public/assets/1411p24-pork-cutlets-squash-apple-cranberry-saute.jpg')} rounded responsive />
          </Col>
          <Col className="food-image-div" lg={3}  xs={4} md={4}>
            <Image id="sec1-taste-img" src={require('../../public/assets/recipe-image-legacy-id--338556_11.jpg')} rounded responsive />
          </Col>
          <Col className="food-image-div" lg={3}  xs={4} md={4}>
            <Image id="sec1-taste-img" src={require('../../public/assets/images (2).jpg')} rounded responsive />
          </Col>
          <Col className="food-image-div" lg={3}  xs={4} md={4}>
            <Image id="sec1-taste-img" src={require('../../public/assets/images (3).jpg')} rounded responsive />
          </Col>
          <Col className="food-image-div" lg={3}  xs={4} md={4}>
            <Image id="sec1-taste-img" src={require('../../public/assets/Food_Meat_and_barbecue_Meat_dishes_with_seafood_012278_.jpg')} rounded responsive />
          </Col>
          <Col className="food-image-div" lg={3}  xs={4} md={4}>
            <Image id="sec1-taste-img" src={require('../../public/assets/c70a4f20e5f86d3a4c10a7740e66f061--easy-side-dishes-side-dish-recipes.jpg')} rounded responsive />
          </Col>
          <Col className="food-image-div" lg={3}  xs={4} md={4}>
            <Image id="sec1-taste-img" src={require('../../public/assets/1411p24-pork-cutlets-squash-apple-cranberry-saute.jpg')} rounded responsive />
          </Col>
          <Col className="food-image-div" lg={3}  xs={4} md={4}>
            <Image id="sec1-taste-img" src={require('../../public/assets/recipe-image-legacy-id--338556_11.jpg')} rounded responsive />
          </Col>
          <Col className="food-image-div" lg={3}  xs={4} md={4}>
            <Image id="sec1-taste-img" src={require('../../public/assets/images (2).jpg')} rounded responsive />
          </Col>
          <Col className="food-image-div" lg={3}  xs={4} md={4}>
            <Image id="sec1-taste-img" src={require('../../public/assets/images (3).jpg')} rounded responsive />
          </Col>
          <Col className="food-image-div" lg={3}  xs={4} md={4}>
            <Image id="sec1-taste-img" src={require('../../public/assets/Food_Meat_and_barbecue_Meat_dishes_with_seafood_012278_.jpg')} rounded responsive />
          </Col>
          <Col className="food-image-div" lg={3}  xs={4} md={4}>
            <Image id="sec1-taste-img" src={require('../../public/assets/c70a4f20e5f86d3a4c10a7740e66f061--easy-side-dishes-side-dish-recipes.jpg')} rounded responsive />
          </Col>
          <Col className="food-image-div" lg={3}  xs={4} md={4}>
            <Image id="sec1-taste-img" src={require('../../public/assets/1411p24-pork-cutlets-squash-apple-cranberry-saute.jpg')} rounded responsive />
          </Col>
          <Col className="food-image-div" lg={3}  xs={4} md={4}>
            <Image id="sec1-taste-img" src={require('../../public/assets/recipe-image-legacy-id--338556_11.jpg')} rounded responsive />
          </Col>
          <Col className="food-image-div" lg={3}  xs={4} md={4}>
            <Image id="sec1-taste-img" src={require('../../public/assets/images (2).jpg')} rounded responsive />
          </Col>
          <Col className="food-image-div" lg={3}  xs={4} md={4}>
            <Image id="sec1-taste-img" src={require('../../public/assets/images (3).jpg')} rounded responsive />
          </Col>
          <Col className="food-image-div" lg={3}  xs={4} md={4}>
            <Image id="sec1-taste-img" src={require('../../public/assets/Food_Meat_and_barbecue_Meat_dishes_with_seafood_012278_.jpg')} rounded responsive />
          </Col>
          <Col className="food-image-div" lg={3}  xs={4} md={4}>
            <Image id="sec1-taste-img" src={require('../../public/assets/c70a4f20e5f86d3a4c10a7740e66f061--easy-side-dishes-side-dish-recipes.jpg')} rounded responsive />
          </Col>
          <Col className="food-image-div" lg={3}  xs={4} md={4}>
            <Image id="sec1-taste-img" src={require('../../public/assets/1411p24-pork-cutlets-squash-apple-cranberry-saute.jpg')} rounded responsive />
          </Col>
          <Col className="food-image-div" lg={3}  xs={4} md={4}>
            <Image id="sec1-taste-img" src={require('../../public/assets/recipe-image-legacy-id--338556_11.jpg')} rounded responsive />
          </Col>
          <Col className="food-image-div" lg={3}  xs={4} md={4}>
            <Image id="sec1-taste-img" src={require('../../public/assets/images (2).jpg')} rounded responsive />
          </Col>
          <Col className="food-image-div" lg={3}  xs={4} md={4}>
            <Image id="sec1-taste-img" src={require('../../public/assets/images (3).jpg')} rounded responsive />
          </Col>
          <Col className="food-image-div" lg={3}  xs={4} md={4}>
            <Image id="sec1-taste-img" src={require('../../public/assets/Food_Meat_and_barbecue_Meat_dishes_with_seafood_012278_.jpg')} rounded responsive />
          </Col>
          <Col className="food-image-div" lg={3}  xs={4} md={4}>
            <Image id="sec1-taste-img" src={require('../../public/assets/c70a4f20e5f86d3a4c10a7740e66f061--easy-side-dishes-side-dish-recipes.jpg')} rounded responsive />
          </Col>
        </Panel>
      </Col>
      <Col Col lg={3}>
        <Panel  className="panel-div" header={<h3>Trending places</h3>} bsStyle="info">
          <Col Col xs={12}>
            <Media>
              <Media.Left>
                <img width={64} height={64} src="/assets/chinese-restaurant-photos.png" alt="Image"/>
              </Media.Left>
              <Media.Body>
                <Media.Heading>Restaurant 1</Media.Heading>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at.</p>
              </Media.Body>
            </Media>
          </Col>
          <Col Col xs={12}>
            <Media>
              <Media.Left>
                <img width={64} height={64} src="/assets/restaurants-near-me.jpg" alt="Image"/>
              </Media.Left>
              <Media.Body>
                <Media.Heading>Restaurant 2</Media.Heading>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at</p>
              </Media.Body>
            </Media>
          </Col>
          <Col Col xs={12}>
            <Media>
              <Media.Left>
                <img width={64} height={64} src="/assets/Asian-Restaurant-near-me.jpg" alt="Image"/>
              </Media.Left>
              <Media.Body>
                <Media.Heading>Restaurant 3</Media.Heading>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at</p>
              </Media.Body>
            </Media>
          </Col>
          <Col Col xs={12}>
            <Media>
              <Media.Left>
                <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
              </Media.Left>
              <Media.Body>
                <Media.Heading>Restaurant 4</Media.Heading>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at</p>
              </Media.Body>
            </Media>
          </Col>
          <Col Col xs={12}>
            <Media>
              <Media.Left>
                <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
              </Media.Left>
              <Media.Body>
                <Media.Heading>Restaurant 5</Media.Heading>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at</p>
              </Media.Body>
            </Media>
          </Col>
        </Panel>
      </Col>
      <Col Col lg={3}>
        <Panel className="panel-div" header={<h3>Search...</h3>} bsStyle="danger">
        <LinkContainer to="/menu">
          <Button  bsStyle="info" bsSize="large" block>Bring me MENU</Button>
          </LinkContainer>
          <hr></hr>
          <h4>Not Sure??</h4>
          <p>select this,we will help you out!!</p>
          <Col Col xs={12}>
            <Form>
              <FormGroup controlId="formHorizontalEmail">
                <ControlLabel>Select</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                  <option value="select">select</option>
                  <option value="other">Cuisine Type1</option>
                  <option value="other">Cuisine Type2</option>
                  <option value="other">Cuisine Type3</option>
                </FormControl>
              </FormGroup>
              <FormGroup>
              <Button bsStyle="success" bsSize="large" block type="submit">
                  Submit
              </Button>
              </FormGroup>
            </Form>
          </Col>
        </Panel>
      </Col>
    </Row>

  );
};

export default Sec1;

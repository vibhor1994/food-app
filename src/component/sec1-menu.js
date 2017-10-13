import PropType from 'prop-types';
import React from 'react';
import { Row,Col,Panel,Image,Media,Button,Form,ControlLabel,FormGroup,FormControl} from 'react-bootstrap';




const Sec1menu = () => {
  return(

    <Row className="show-grid carousel-div">
      <Col Col lg={6}>
        <Panel className="panel-div" header={<h3>Top Searches</h3>} bsStyle="success">
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
        </Panel>
      </Col>
      <Col Col lg={3}>
        <Panel  className="panel-div" header={<h3>Search By Category</h3>} bsStyle="info">
          <Col Col xs={12}>
            <Media>
              <Media.Left>
                <img width={64} height={64} src="/assets/chinese-restaurant-photos.png" alt="Image"/>
              </Media.Left>
              <Media.Body>
                <Media.Heading>Dish Type1</Media.Heading>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel  </p>
              </Media.Body>
            </Media>
          </Col>
          <Col Col xs={12}>
            <Media>
              <Media.Left>
                <img width={64} height={64} src="/assets/restaurants-near-me.jpg" alt="Image"/>
              </Media.Left>
              <Media.Body>
                <Media.Heading>Dish Type2</Media.Heading>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel</p>
              </Media.Body>
            </Media>
          </Col>
          <Col Col xs={12}>
            <Media>
              <Media.Left>
                <img width={64} height={64} src="/assets/Asian-Restaurant-near-me.jpg" alt="Image"/>
              </Media.Left>
              <Media.Body>
                <Media.Heading>Dish Type3</Media.Heading>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel</p>
              </Media.Body>
            </Media>
          </Col>
          <Col Col xs={12}>
            <Media>
              <Media.Left>
                <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
              </Media.Left>
              <Media.Body>
                <Media.Heading>Dish Type4</Media.Heading>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus.</p>
              </Media.Body>
            </Media>
          </Col>
          <Col Col xs={12}>
            <Media>
              <Media.Left>
                <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
              </Media.Left>
              <Media.Body>
                <Media.Heading>Dish Type5</Media.Heading>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus </p>
              </Media.Body>
            </Media>
          </Col>
        </Panel>
      </Col>
      <Col Col lg={3}>
        <Panel className="panel-div" header={<h3>Your cart...</h3>} bsStyle="danger">
          <h1> Nothing to check out!!</h1>
          <hr></hr>


              <FormGroup>

                <Button bsStyle="success" bsSize="large" block type="submit" disabled>
                    Checkout
                </Button>
              </FormGroup>

        </Panel>
      </Col>
    </Row>

  );
};

export default Sec1menu;

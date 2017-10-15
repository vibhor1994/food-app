import PropType from 'prop-types';
import React from 'react';
import { Row,Col,Panel,Image,Media,Button,Form,ControlLabel,FormGroup,FormControl,Checkbox} from 'react-bootstrap';
import {Link} from 'react-router-dom';



class Sec1menu2 extends React.Component {
  constructor(props) {
   super(props);
}

render(){
  return(

    <Row className="show-grid carousel-div">
      <Col Col lg={6}>
        <Panel className="panel-div" header={<h3>Top Searches</h3>} bsStyle="success">
        <Col className="food-image-div" lg={3} xs={4} md={4}>

          <Image id="sec1-taste-img" onClick={this.props.updateParent} data-url='../../public/assets/images.jpg' data-name="dish-1" data-price="Rs-56"  src={require('../../public/assets/images.jpg')} rounded responsive />

        </Col>
        <Col className="food-image-div" lg={3}  xs={4} md={4}>
          <Image id="sec1-taste-img" onClick={this.props.updateParent} data-url='../../public/assets/1382541181808.jpg' data-name="dish-2" data-price="Rs-150"  src={require('../../public/assets/1382541181808.jpg')} rounded responsive />
        </Col>
        <Col className="food-image-div" lg={3}  xs={4} md={4}>
          <Image id="sec1-taste-img" onClick={this.props.updateParent} data-url='../../public/assets/earls-stew.jpg' data-name="dish-3" data-price="Rs-82"  src={require('../../public/assets/earls-stew.jpg')} rounded responsive />
        </Col>
        <Col className="food-image-div" lg={3}  xs={4} md={4}>
          <Image id="sec1-taste-img" onClick={this.props.updateParent} data-url='../../public/assets/images (1).jpg' data-name="dish-6" data-price="Rs-75"  src={require('../../public/assets/images (1).jpg')} rounded responsive />
        </Col>
        <Col className="food-image-div"  lg={3} xs={4} md={4}>
          <Image id="sec1-taste-img" onClick={this.props.updateParent} data-url='../../public/assets/shutterstock_103781039.jpg' data-name="dish-7" data-price="Rs-72"  src={require('../../public/assets/shutterstock_103781039.jpg')} rounded responsive />
        </Col>
        <Col className="food-image-div" lg={3}  xs={4} md={4}>
          <Image id="sec1-taste-img" onClick={this.props.updateParent} data-url='../../public/assets/filename-img-5360-jpg.jpg' data-name="dish-8" data-price="Rs-247"  src={require('../../public/assets/filename-img-5360-jpg.jpg')} rounded responsive />
        </Col>
        <Col className="food-image-div" lg={3}  xs={4} md={4}>
          <Image id="sec1-taste-img" onClick={this.props.updateParent} data-url='../../public/assets/1411p24-pork-cutlets-squash-apple-cranberry-saute.jpg' data-name="dish-9" data-price="Rs-36"  src={require('../../public/assets/1411p24-pork-cutlets-squash-apple-cranberry-saute.jpg')} rounded responsive />
        </Col>
        <Col className="food-image-div" lg={3}  xs={4} md={4}>
          <Image id="sec1-taste-img" onClick={this.props.updateParent} data-url='../../public/assets//recipe-image-legacy-id--338556_11.jpg' data-name="dish-10" data-price="Rs-96"  src={require('../../public/assets/recipe-image-legacy-id--338556_11.jpg')} rounded responsive />
        </Col>
        <Col className="food-image-div" lg={3}  xs={4} md={4}>
          <Image id="sec1-taste-img" onClick={this.props.updateParent} data-url='../../public/assets/images (2).jpg' data-name="dish-11" data-price="Rs-88"  src={require('../../public/assets/images (2).jpg')} rounded responsive />
        </Col>
        <Col className="food-image-div" lg={3}  xs={4} md={4}>
          <Image id="sec1-taste-img" onClick={this.props.updateParent} data-url='../../public/assets/images (3).jpg' data-name="dish-12" data-price="Rs-75"  src={require('../../public/assets/images (3).jpg')} rounded responsive />
        </Col>
        <Col className="food-image-div" lg={3}  xs={4} md={4}>
          <Image id="sec1-taste-img" onClick={this.props.updateParent} data-url='../../public/assets/Food_Meat_and_barbecue_Meat_dishes_with_seafood_012278_.jpg' data-name="dish-13" data-price="Rs-49"  src={require('../../public/assets/Food_Meat_and_barbecue_Meat_dishes_with_seafood_012278_.jpg')} rounded responsive />
        </Col>
        <Col className="food-image-div" lg={3}  xs={4} md={4}>
          <Image id="sec1-taste-img" onClick={this.props.updateParent} data-url='../../public/assets/c70a4f20e5f86d3a4c10a7740e66f061--easy-side-dishes-side-dish-recipes.jpg' data-name="dish-14" data-price="Rs-76"  src={require('../../public/assets/c70a4f20e5f86d3a4c10a7740e66f061--easy-side-dishes-side-dish-recipes.jpg')} rounded responsive />
        </Col>
        <Col className="food-image-div" lg={3}  xs={4} md={4}>
          <Image id="sec1-taste-img" onClick={this.props.updateParent} data-url='../../public/assets/1411p24-pork-cutlets-squash-apple-cranberry-saute.jpg' data-name="dish-15" data-price="Rs-83"  src={require('../../public/assets/1411p24-pork-cutlets-squash-apple-cranberry-saute.jpg')} rounded responsive />
        </Col>
        <Col className="food-image-div" lg={3}  xs={4} md={4}>
          <Image id="sec1-taste-img" onClick={this.props.updateParent} data-url='../../public/assets/recipe-image-legacy-id--338556_11.jpg' data-name="dish-14" data-price="Rs-21"  src={require('../../public/assets/recipe-image-legacy-id--338556_11.jpg')} rounded responsive />
        </Col>
        <Col className="food-image-div" lg={3}  xs={4} md={4}>
          <Image id="sec1-taste-img" onClick={this.props.updateParent} data-url='../../public/assets/images (2).jpg' data-name="dish-15" data-price="Rs-78"  src={require('../../public/assets/images (2).jpg')} rounded responsive />
        </Col>
        <Col className="food-image-div" lg={3}  xs={4} md={4}>
          <Image id="sec1-taste-img" onClick={this.props.updateParent} data-url='../../public/assets/images (3).jpg' data-name="dish-16" data-price="Rs-90"  src={require('../../public/assets/images (3).jpg')} rounded responsive />
        </Col>
        <Col className="food-image-div" lg={3}  xs={4} md={4}>
          <Image id="sec1-taste-img" onClick={this.props.updateParent} data-url='../../public/assets/Food_Meat_and_barbecue_Meat_dishes_with_seafood_012278_.jpg' data-name="dish-17" data-price="Rs-120"  src={require('../../public/assets/Food_Meat_and_barbecue_Meat_dishes_with_seafood_012278_.jpg')} rounded responsive />
        </Col>
        <Col className="food-image-div" lg={3}  xs={4} md={4}>
          <Image id="sec1-taste-img" onClick={this.props.updateParent} data-url='../../public/assets/c70a4f20e5f86d3a4c10a7740e66f061--easy-side-dishes-side-dish-recipes.jpg' data-name="dish-18" data-price="Rs-124"  src={require('../../public/assets/c70a4f20e5f86d3a4c10a7740e66f061--easy-side-dishes-side-dish-recipes.jpg')} rounded responsive />
        </Col>
        <Col className="food-image-div" lg={3}  xs={4} md={4}>
          <Image id="sec1-taste-img" onClick={this.props.updateParent} data-url='../../public/assets/1411p24-pork-cutlets-squash-apple-cranberry-saute.jpg' data-name="dish-19" data-price="Rs-130"  src={require('../../public/assets/1411p24-pork-cutlets-squash-apple-cranberry-saute.jpg')} rounded responsive />
        </Col>
        <Col className="food-image-div" lg={3}  xs={4} md={4}>
          <Image id="sec1-taste-img" onClick={this.props.updateParent} data-url='../../public/assets/recipe-image-legacy-id--338556_11.jpg' data-name="dish-20" data-price="Rs-45"  src={require('../../public/assets/recipe-image-legacy-id--338556_11.jpg')} rounded responsive />
        </Col>
        <Col className="food-image-div" lg={3}  xs={4} md={4}>
          <Image id="sec1-taste-img" onClick={this.props.updateParent} data-url='../../public/assets/images (2).jpg' data-name="dish-21" data-price="Rs-73"  src={require('../../public/assets/images (2).jpg')} rounded responsive />
        </Col>
        <Col className="food-image-div" lg={3}  xs={4} md={4}>
          <Image id="sec1-taste-img" onClick={this.props.updateParent} data-url='../../public/assets/images (3).jpg' data-name="dish-22" data-price="Rs-97"  src={require('../../public/assets/images (3).jpg')} rounded responsive />
        </Col>
        <Col className="food-image-div" lg={3}  xs={4} md={4}>
          <Image id="sec1-taste-img" onClick={this.props.updateParent} data-url='../../public/assets/Food_Meat_and_barbecue_Meat_dishes_with_seafood_012278_.jpg' data-name="dish-23" data-price="Rs-98"  src={require('../../public/assets/Food_Meat_and_barbecue_Meat_dishes_with_seafood_012278_.jpg')} rounded responsive />
        </Col>
        <Col className="food-image-div" lg={3}  xs={4} md={4}>
          <Image id="sec1-taste-img" onClick={this.props.updateParent} data-url='../../public/assets/c70a4f20e5f86d3a4c10a7740e66f061--easy-side-dishes-side-dish-recipes.jpg' data-name="dish-24" data-price="Rs-53"  src={require('../../public/assets/c70a4f20e5f86d3a4c10a7740e66f061--easy-side-dishes-side-dish-recipes.jpg')} rounded responsive />
        </Col>
        <Col className="food-image-div" lg={3}  xs={4} md={4}>
          <Image id="sec1-taste-img" onClick={this.props.updateParent} data-url='../../public/assets/1411p24-pork-cutlets-squash-apple-cranberry-saute.jpg' data-name="dish-25" data-price="Rs-72"  src={require('../../public/assets/1411p24-pork-cutlets-squash-apple-cranberry-saute.jpg')} rounded responsive />
        </Col>
        <Col className="food-image-div" lg={3}  xs={4} md={4}>
          <Image id="sec1-taste-img" onClick={this.props.updateParent} data-url='../../public/assets/recipe-image-legacy-id--338556_11.jpg' data-name="dish-26" data-price="Rs-37"  src={require('../../public/assets/recipe-image-legacy-id--338556_11.jpg')} rounded responsive />
        </Col>
        <Col className="food-image-div" lg={3}  xs={4} md={4}>
          <Image id="sec1-taste-img" onClick={this.props.updateParent} data-url='../../public/assets/images (2).jpg' data-name="dish-27" data-price="Rs-180"  src={require('../../public/assets/images (2).jpg')} rounded responsive />
        </Col>
        <Col className="food-image-div" lg={3}  xs={4} md={4}>
          <Image id="sec1-taste-img" onClick={this.props.updateParent} data-url='../../public/assets/images (3).jpg' data-name="dish-28" data-price="Rs-122"  src={require('../../public/assets/images (3).jpg')} rounded responsive />
        </Col>
        <Col className="food-image-div" lg={3}  xs={4} md={4}>
          <Image id="sec1-taste-img" onClick={this.props.updateParent} data-url='../../public/assets/Food_Meat_and_barbecue_Meat_dishes_with_seafood_012278_.jpg' data-name="dish-29" data-price="Rs-99"  src={require('../../public/assets/Food_Meat_and_barbecue_Meat_dishes_with_seafood_012278_.jpg')} rounded responsive />
        </Col>
        <Col className="food-image-div" lg={3}  xs={4} md={4}>
          <Image id="sec1-taste-img" onClick={this.props.updateParent} data-url='../../public/assets/c70a4f20e5f86d3a4c10a7740e66f061--easy-side-dishes-side-dish-recipes.jpg' data-name="dish-30" data-price="Rs-93"  src={require('../../public/assets/c70a4f20e5f86d3a4c10a7740e66f061--easy-side-dishes-side-dish-recipes.jpg')} rounded responsive />
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
          <h1>{this.props.name.name}</h1>
          <h3>{this.props.name.price}</h3>

          <Image id="sec1-taste-img" width={64} height={64} src={this.props.name.pic} alt=""  rounded responsive />

          <hr></hr>


              <FormGroup>
                <Link to='/payment'>
                <Button bsStyle="success" bsSize="large" block type="submit" >
                    Checkout
                </Button></Link>
              </FormGroup>

        </Panel>
      </Col>


    </Row>

  );
}
}

export default Sec1menu2;

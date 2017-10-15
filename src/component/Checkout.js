import PropType from 'prop-types';
import NavB from './nav.js';

import Sec1 from './sec1-menu2.js';
import Sec2 from './sec2.js';
import Footr from './sec3.js';
import React from 'react';

class Menu extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
    name:'nothing selected',
    price:"",
    pic:'',
    status:'disabled'
  };
   this.handleClick = this.handleClick.bind(this);
 }

handleClick = (e) => {
var dishName = e.currentTarget.dataset.name;
var dishPrice = e.currentTarget.dataset.price;
var dishPic = e.currentTarget.dataset.url;
dishPic = dishPic.slice(12);
this.setState({
  name:dishName,
  price:dishPrice,
  pic:dishPic,
  status:''
});
// console.log(dishName, dishPrice, dishPic);
// console.log(this.state);
};

  // <Banner msg = {this.state.title} />
  render(){
    return(
      <div className="Menu-div">
        <NavB />

        <Sec1 updateParent={this.handleClick} name={this.state} />
        <Footr />
      </div>
    );
  }
}


export default Menu;

import PropType from 'prop-types';
import NavB from './nav.js';
import Cover from './cover.js';
import Sec1 from './sec1.js';
import Sec2 from './sec2.js';
import Footr from './sec3.js';
import React from 'react';

class App extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
    name:0,
    price:0,
    pic:0
  };
   this.handleClick = this.handleClick.bind(this);
 }

handleClick = (e) => {
var dishName = e.currentTarget.dataset.name;
var dishPrice = e.currentTarget.dataset.price;
var dishPic = e.currentTarget.dataset.url;
this.setState({
  name:dishName,
  price:dishPrice,
  pic:dishPic
});
};


  // <Banner msg = {this.state.title} />
  render(){
    return(
      <div className="About-div">
        <NavB Cstate={this.state} />
        <div className="container-fluid"> <Cover /></div>

        <Sec1 updateParent={this.handleClick} name={this.state}/>
        <h2></h2>
        <Sec2 />
        <Footr />
      </div>
    );
  }
}


export default App;

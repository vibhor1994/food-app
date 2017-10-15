import PropType from 'prop-types';
import NavB from './nav.js';
import Cover from './Sucss.js';
import Sec2 from './sec2.js';
import Footr from './sec3.js';
import React from 'react';

class Success extends React.Component {
  state = {
    title : 'landing page main'
  };

  // <Banner msg = {this.state.title} />
  render(){
    return(
      <div className="App-div">
        <NavB />
        <div className="container-fluid"> <Cover /></div>

        <Sec2 />
        <Footr />
      </div>
    );
  }
}


export default Success;

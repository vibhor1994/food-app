import PropType from 'prop-types';
import NavB from './nav.js';

import Sec1 from './sec1-menu.js';
import Sec2 from './sec2.js';
import Footr from './sec3.js';
import React from 'react';

class Menu extends React.Component {


  // <Banner msg = {this.state.title} />
  render(){
    return(
      <div className="Menu-div">
        <NavB />

        <Sec1 />
        <Footr />
      </div>
    );
  }
}


export default Menu;

import PropType from 'prop-types';
import NavB from './nav.js';
import Cover from './cover.js';
import Sec1 from './sec1.js';
import Sec2 from './sec2.js';
import Footr from './sec3.js';
import React from 'react';

class App extends React.Component {
  state = {
    title : 'landing page main'
  };

  // <Banner msg = {this.state.title} />
  render(){
    return(
      <div className="About-div">
        <NavB />
        <div className="container-fluid"> <Cover /></div>
        <Sec1 />
        <Sec2 />
        <Footr />
      </div>
    );
  }
}


export default App;

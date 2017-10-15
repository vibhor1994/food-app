import React from 'react';
import ReactDom from 'react-dom';
import App from './component/App';
import About from './component/About';
import Payment from './component/Payment';
import Success from './component/sucs';
import Checkout from './component/Checkout';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


// console.log(data);




ReactDom.render(
  <Router>
    <Switch>
      <Route exact path="/"  component={App}/>
      <Route exact path="/about"  component={About}/>
      <Route exact path="/payment"  component={Payment}/>
      <Route exact path="/success"  component={Success}/>
      <Route exact path="/menu"  component={Checkout}/>
    </Switch>
  </Router>,
  document.getElementById('root'));

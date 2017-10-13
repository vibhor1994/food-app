import React from 'react';
import ReactDom from 'react-dom';
import App from './component/App';
import About from './component/About';
import Menu from './component/Menu';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


// console.log(data);




ReactDom.render(
  <Router>
    <Switch>
      <Route exact path="/"  component={App}/>
      <Route exact path="/about"  component={About}/>
      <Route exact path="/menu"  component={Menu}/>
    </Switch>
  </Router>,
  document.getElementById('root'));

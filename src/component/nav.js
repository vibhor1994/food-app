import PropType from 'prop-types';
import React from 'react';
import { Navbar,Nav ,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';


const NavB = () => {
  return(
    <Navbar className='nav-user' inverse collapseOnSelect fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/"><strong>FoOdie</strong></Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
        <LinkContainer to="/menu">
          <NavItem eventKey={1} href="">Menu</NavItem>
          </LinkContainer>
          <LinkContainer to="/about">
            <NavItem eventKey={2} href="">About-us</NavItem>
          </LinkContainer>
          <NavDropdown eventKey={3} title="Login/Register" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>New user</MenuItem>
            <MenuItem eventKey={3.2}>Foodei member</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Contact-Us</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavB;

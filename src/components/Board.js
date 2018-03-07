import React, { PureComponent } from 'react'
//import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
//import {guessLetter} from '../actions/action'
import './Board.css'
import { Navbar, Nav, NavItem} from 'react-bootstrap';




class Board extends PureComponent {
 render() {
 return (
   <div>

    <Navbar fixedTop className='header'>
      <Navbar.Header>
        <Navbar.Brand>
          <p1>Dinder</p1>
          <img src="../images/dog paw.jpg" width="2" height="2" alt=""/>
        </Navbar.Brand>
      </Navbar.Header>

      <Nav pullRight>
        <NavItem
          eventKey={1}
          href="#">
          Log in
        </NavItem>
      </Nav>
    </Navbar>

  <Navbar fixedBottom className='footer'>
    <Nav>
        <p>Thank you for visiting our website</p>
    </Nav>
 </Navbar>




  </div>
);
}
}
export default Board;

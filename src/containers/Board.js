import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
//import {guessLetter} from '../actions/action'
import Breed from '../components/Breed'
//import TopTen from '../components/TopTen'
import './Board.css'
import im from '../images/dogpaw.jpg'
import { Navbar, Nav, NavItem} from 'react-bootstrap';




class Board extends PureComponent {
 render() {
 return (
   <div>

    <Navbar fixedTop className='header'>
      <Navbar.Header>
        <Navbar.Brand>
          <p1>Dinder</p1>
          <img src={im} width="15px" height="15px" alt="TEST"/>
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

    <Breed/>

  <Navbar fixedBottom className='footer'>
    <Nav>
        <p>Thank you for visiting our website</p>
    </Nav>
 </Navbar>




  </div>
);
}
}
export default connect()(Board);

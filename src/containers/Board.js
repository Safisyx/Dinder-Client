import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
//import {guessLetter} from '../actions/action'
import Breed from '../components/Breed'
import TopTen from '../components/TopTen'
import './Board.css'
import im from '../images/dogpaw.jpg'
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import {Redirect } from 'react-router-dom'
import {getUsers} from '../actions/users'




class Board extends PureComponent {
  componentWillMount() {
    this.props.getUsers();
  }
 render() {
   if (!this.props.currentUser) return (
     <Redirect to="/"/>
   )
 return (

   <div>

    <Navbar fixedTop className='header'>
      <Navbar.Header>
        <Navbar.Brand>
          <h1>Dinder</h1>
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
    <TopTen/>

  <Navbar fixedBottom className='footer'>
    <Nav>
        <p>Thank you for visiting our website</p>
    </Nav>
 </Navbar>




  </div>
);
}
}
const mapStateToProps = function (state) {
  return {
    currentUser: state.currentUser,
    users: state.users
  }
}
export default connect(mapStateToProps,{getUsers})(Board);

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
//import {guessLetter} from '../actions/action'
import Breed from '../components/Breed'
import TopTen from '../components/TopTen'
import './Board.css'
// import im from '../images/dogpaw2.png'
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
   <div class='Board'>

     <div class="header">
       <div class="title">
         Dinder
       </div>
       <div class="loggedUser">
         username
       </div>
     </div>

     <div class="main">
      <div class="vote"> <Breed/> </div>
      <div class="matches">
        <div class="matchesTitle">Matches</div>
        <div class="matchesBody"> <TopTen/></div>
      </div>
     </div>

     <div class='footer'>Thank you for visiting our website</div>
  </div>
)}}

const mapStateToProps = function (state) {
  return {
    currentUser: state.currentUser,
    users: state.users
  }
}
export default connect(mapStateToProps,{getUsers})(Board);

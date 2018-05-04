import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {NavBar} from '../components/NavBar'
import SignupForm from '../components/SignupForm';
import {login} from '../actions/users'
import {signup} from '../actions/users'
import {Redirect } from 'react-router-dom'
import './HomePage.css'

class HomePage extends PureComponent {

  handleSubmit = (data) => {
		this.props.login(data.email, data.password)
	}
  handleForm = (data) => {
    this.props.postSignup(data.name, data.email, data.password, data.description)
  }

  render() {
    if (this.props.currentUser) return (
			<Redirect to="/dinder" />
		)
    if (this.props.signup.success) (
			alert('Now you can login!!')
		)
    return (
      <div className="HomePage">
      <NavBar onSubmit={this.handleSubmit}/>
      <SignupForm onSubmit={this.handleForm}/>

      { this.props.signup.error && <p style={{color:'red'}}>{ this.props.signup.error }</p>}
      </div>
    )
  }
}

const mapStateToProps = function (state) {

	return {
    signup: state.signup,
    currentUser: state.currentUser,
    error: state.login.error
    //succes: state.signup.success
	}
}

export default connect(mapStateToProps, {login,postSignup: signup})(HomePage)

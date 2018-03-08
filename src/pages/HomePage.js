import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {NavBar} from '../components/NavBar';
import {login} from '../actions/users'
import {Redirect } from 'react-router-dom'

class HomePage extends PureComponent {

  handleSubmit = (data) => {
		this.props.login(data.email, data.password)
	}

  render() {
    if (this.props.currentUser) return (
			<Redirect to="/dinder" />
		)
    return (
      <div>
      <NavBar onSubmit={this.handleSubmit}/>
      <div className="container-fluid">
        <div className="row" style={{'marginTop': '25px'}}>
          <div className="col-md-8">
            <img
              src="https://i.imgur.com/neuNNhV.jpg" alt="Can't load"
              className="img-fluid img-thumbnail"
              />
            <p>Some text about some dog shit...</p>
          </div>
          <div className="col-md-4">
            <div className="card card-body">
              <h1 className="lead">Register</h1>
              <form method="post">
                <div className="form-group">
                  <input type="text" placeholder="Name" className="form-control"/>
                </div>
                <div className="form-group">
                <select className="form-control" name="gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Tel" className="form-control"/>
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Email" className="form-control"/>
                </div>
                <div className="form-group">
                  <textarea className="form-control" rows="4" placeholder="What is you about..."></textarea>
                </div>
                <div className="form-group">
                  <button className="btn btn-primary btn-block">Register now!</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
	return {
		currentUser: state.currentUser
	}
}

export default connect(mapStateToProps, {login})(HomePage);

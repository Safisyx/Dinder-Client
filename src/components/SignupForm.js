import React, {PureComponent} from 'react';
// import LoginForm from './LoginForm';

export default class SignupForm extends PureComponent {

  state = {
    name:'',
    password:'',
    confirmPassword:'',
    email:'',
    description:'',
  }

  handleForm = (e) => {
		e.preventDefault()
    const {name,email,password,confirmPassword}=this.state
    if (name!=='' && password!=='' && email!=='' && (password===confirmPassword)){
		this.props.onSubmit(this.state)
    this.setState({
      name:'',password:'',confirmPassword:'',email:'',description:''
    })
    }
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row" style={{'marginTop': '25px'}}>
          <div className="col-md-8">
            <img
              src="https://i.imgur.com/neuNNhV.jpg" alt="Can't load"
              className="img-fluid img-thumbnail"
              />
            <p style={{fontSize:'20px', color:'white'}}>We all love dogs...</p>
          </div>
          <div className="col-md-4">
            <div className="card card-body">
              <h1 className="lead">Register</h1>
              <form method="post" onSubmit={this.handleForm}>
                <div className="form-group">
                  <input type="text"  className="form-control"
                  name="name" id="name" placeholder="Name" value={ this.state.name || ''}
                   onChange={ this.handleChange }/>
                </div>
                {/*<div className="form-group">
                <select className="form-control" name="gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                </div>*/}
                <div className="form-group">
                <input className="form-control" type="email" name="email" id="email" placeholder="Email" value={
                      this.state.email || ''} onChange={ this.handleChange } />
                </div>
                <div className="form-group">
                  <input className="form-control" type="password" name="password" id="password" placeholder="Password" aria-label="Search" value={
                      this.state.password || ''} onChange={ this.handleChange }/>
                </div>
                <div className="form-group">
                  <input className="form-control" type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" aria-label="Search" value={
                      this.state.confirmPassword || ''} onChange={ this.handleChange }/>
                </div>
                {
        					this.state.password &&
        					this.state.confirmPassword &&
        					this.state.password !== this.state.confirmPassword &&
        					<p style={{color:'red'}}>The passwords do not match!</p>
        				}
                <div className="form-group">
                  <textarea className="form-control" rows="4" placeholder="If you want, tell us more about you..." name="description"
                      id="description" value={this.state.description || ''}
                      onChange={this.handleChange}></textarea>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">Register now!</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

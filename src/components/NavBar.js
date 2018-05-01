import React, {PureComponent} from 'react';
// import LoginForm from './LoginForm';

export class NavBar extends PureComponent {

  state = {}

  handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
  <a className="navbar-brand" href="./"><span style={{fontSize:'1.2em', fontWeight:'bold'}}>Dinder</span> <small> Making friends with folks that love the same breeds as you!</small></a>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
    </ul>
    <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
      <input className="form-control mr-sm-2" type="email" name="email" id="emailLogin" placeholder="Email" value={
				    this.state.email || ''} onChange={ this.handleChange } />
      <input className="form-control mr-sm-2" type="password" name="password" id="passwordLogin" placeholder="Password" aria-label="Search" value={
						this.state.password || ''} onChange={ this.handleChange }/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
    </form>
  </div>
</nav>
    )
  }
}

export default NavBar

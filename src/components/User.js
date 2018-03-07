import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import './User.css'

class User extends PureComponent {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      tel: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
    }).isRequired
  }


  render() {
    return (
     <div class="box">
        <div className="top">
            <h2>{this.props.user.name}</h2>
            <h3>{this.props.user.gender}</h3>
            <p>{this.props.user.tel} | {this.props.user.email}</p>
        </div>

        <div className="bottom">
          <h4>Biography</h4>
          <p id="bio">{this.props.user.bio}</p>
        </div>
      </div>
    );
  }
}


export default User

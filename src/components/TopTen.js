
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './TopTen.css'

class TopTen extends PureComponent {
  static propTypes = {
    currentUser: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      breeds: PropTypes.arrayOf(PropTypes.number)
    }),
    users: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      breeds: PropTypes.arrayOf(PropTypes.number)
    }))
  }

  matchedBreed = (user) => {
    let accumulator = 0;
    for (let i=0; i<user.breeds.length; i++) {
      if (this.props.currentUser.breeds.includes(user.breeds[i]))
        accumulator+=1
    }
    return accumulator
  }
  render() {
    //const { players } = this.props

    // const userA={
    //   name:'A',
    //   breeds: [3,2,1]
    // }
    // const userB={
    //   name: 'B',
    //   breeds: [1,4,5,6]
    // }
    // //const users =[userA,userB]
    let users
    if (this.props.users)
      users = this.props.users.slice();
    else{
      users = [];
    }
    const topTen = users.sort((a,b) => this.matchedBreed(a)<this.matchedBreed(b))
                        .slice(0,9);
    if (!this.props.currentUser) return (
			<Redirect to="/" />
		)
    return (
      <div className='topTen'>
        <h2> `Hey ${this.props.currentUser.name}` </h2>
        <ul>
          {topTen.map( (user) => (
            <li>
              <h3>`${user.name}`</h3>
              <p> `${user.email}` </p>
            </li>
          )
        )}
        </ul>
      </div>
    )
  }

}

const mapStateToProps = function (state) {
  console.log(state);
  return {
    users: state.users,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(TopTen)

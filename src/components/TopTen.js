
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Redirect } from 'react-router-dom'
import {getUsers} from '../actions/users'
import './TopTen.css'

class TopTen extends PureComponent {
  // static propTypes = {
  //   currentUser: PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     name: PropTypes.string.isRequired,
  //     breeds: PropTypes.arrayOf(PropTypes.number)
  //   }),
  //   users: PropTypes.arrayOf(PropTypes.shape({
  //     name: PropTypes.string.isRequired,
  //     email: PropTypes.string.isRequired,
  //     breeds: PropTypes.arrayOf(PropTypes.number)
  //   }))
  // }

  matchedBreed = (user) => {
    console.log('######################');
    console.log(this.props.currentUser.details.preferredbreed);
    console.log(user.preferredbreed);
    let accumulator = 0;
    for (let i=0; i<user.preferredbreed.length; i++) {
      //console.log(user.preferredbreed[i]);
      //console.log(this.props.currentUser.details.preferredbreed.includes(user.preferredbreed[i]));
      if (this.props.currentUser.details.preferredbreed.includes(user.preferredbreed[i])){
        console.log('xnaojcbal');
        accumulator+=1;
      }
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
    //console.log(this.props.currentUser);
    /////////////this.props.getUsers()
    let user = {
      email:this.props.currentUser.details.email,
      name:this.props.currentUser.details.name,
      preferredbreed:this.props.currentUser.details.preferredbreed
    }
    //console.log(user);
    let users=this.props.users.slice()
    console.log('===============================');
    console.log(users);
    console.log('=============================');
    //let index
    for (let i=0; i<users.length;i++)
    {
    //  console.log(users[i].preferredbreed);
    //  console.log(user.preferredbreed);
    ///  console.log(this.matchedBreed(users[i]))
      if (users[i].email===user.email)
        users.splice(i,1);
    }


    //console.log(users);
    //console.log(this.props.users);
    const topTen = users.sort((a,b) => this.matchedBreed(a)<this.matchedBreed(b))
                        .slice(0,9);
    console.log(topTen);
    console.log('-----------------------------');
    if (!this.props.currentUser) return (
			<Redirect to="/" />
		)
    return (

      <div className='topTen'>

        <ul>
          {topTen.map( (user) => (
            (this.matchedBreed(user)!==0)&&
            <li key={topTen.indexOf(user)}>
              <h3>{`${user.name} (${this.matchedBreed(user)} dogs match)`}</h3>
              <p> {`${user.email}`} </p>
              {/*<p> {`This person likes ${this.matchedBreed(user)} among your ${this.props.currentUser.details.preferredbreed.length} preferred ones`} </p>*/}
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

export default connect(mapStateToProps,{getUsers})(TopTen)

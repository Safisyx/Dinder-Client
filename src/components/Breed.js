import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {changePicture} from '../actions/changePicture'
import {likeBreed} from '../actions/likeBreed'
import {getUsers} from '../actions/users'
import './Breed.css'

class Breed extends PureComponent {
  static propTypes = {
    // guessLetter: PropTypes.func.isRequired
    //id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
      //vote: PropTypes.number.isRequire
    image: PropTypes.string.isRequired,
    //onLike: PropTypes.func.isRequired,
    onDislike: PropTypes.func.isRequired,
  }

  onLike = (e) => {
    //let x = e.target.value.toLowerCase()
    //console.log(x)
    //CHANGE PICTURE ACTION
    //this.props.onLike(x)
    //e.target.value=''
    //console.log(this.props.breed.name);
    //console.log(this.props.currentUser.details.id);
    if (!this.props.currentUser.details.preferredbreed.includes(this.props.breed.name)){
        this.props.likeBreed(this.props.breed.name,this.props.currentUser.details.id)
      }
    this.props.getUsers()
    this.props.changePicture()
    //console.log('CHANGE PICTURE and UP VOTE');
  }
  onDislike = (e) => {
    //CHANGE PICTURE

    this.props.changePicture()
  }

  componentWillMount() {
    this.props.changePicture();
  }

  render() {
    console.log(this.props.image);
    return (
      <div className='Breed'>
        <h2> {this.props.breed.name} </h2>
        <div className='imageContainer'>
          <img src={this.props.image} alt={this.props.breed.name}/>
        </div>
        <div className='BreedFooter'>
          <button onClick={ () => this.onDislike() }>{'Dislike'}</button>
          <button onClick={ () => this.onLike() }>{'Like'}</button>
        </div>
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     guessLetter: letter => dispatch(guessLetter(letter))
//   }
// }

const mapStateToProps = (state,props) => {
  //console.log(state.breed)
  return{
    breed : state.breed,
    image : state.breed.image,
    currentUser : state.currentUser
  }
}

export default connect(mapStateToProps, {changePicture, likeBreed, getUsers})(Breed)

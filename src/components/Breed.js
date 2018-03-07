import React, { PureComponent } from 'react'
//import { connect } from 'react-redux'
import PropTypes from 'prop-types'
//import {guessLetter} from '../actions/action'
import './Breed.css'

export class Breed extends PureComponent {
   static propTypes = {
    // guessLetter: PropTypes.func.isRequired
     id: PropTypes.number.isRequired,
     name: PropTypes.string.isRequired,
     image: PropTypes.string.isRequired,
     vote: PropTypes.number.isRequired,
     onLike: PropTypes.func.isRequired,
     onDislike: PropTypes.func.isRequired,
   }

  onLike = (e) => {
    //let x = e.target.value.toLowerCase()
    //console.log(x)
    //CHANGE PICTURE ACTION
    //this.props.onLike(x)
    //e.target.value=''
    console.log('CHANGE PICTURE and UP VOTE');
  }
  onDislike = (e) => {
    //CHANGE PICTURE
    console.log('CHANGE PICTURE');
  }

  render() {
    return (
      <div className='Breed'>
        <h2> {this.props.name} </h2>
        <div className='imageContainer'>
          <img src={this.props.image} alt={this.props.name}/>
        </div>
        <div className='BreedFooter'>
          <p>Votes {this.props.vote}</p>
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



export default Breed

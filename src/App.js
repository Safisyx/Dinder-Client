import React, { Component } from 'react';
//import logo from './logo.svg';
import Breed from './components/Breed'
import Board from './components/Board'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Breed/>
        <h1> To test </h1>
        <Board/>

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
//import logo from './logo.svg';
//import TopTen from './components/TopTen'
//import Breed from './components/Breed'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
<<<<<<< HEAD
import HomePage from './pages/HomePage'
=======

>>>>>>> master
import Board from './containers/Board'
import './App.css';

class App extends Component {
<<<<<<< HEAD
 render() {
   return (
     <Router>
       <div>
         <Route exact path="/dinder" component={Board} />
         {/*<Route exact path="/products/:id" component={ProductDetails} />*/}
         <Route exact path="/" component={HomePage} />
         {/* <Route exact path="/" render={ () => <Redirect to="/dinder" /> } />*/}
       </div>
     </Router>
   );
 }
=======
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/dinder" component={Board} />
          {/*<Route exact path="/products/:id" component={ProductDetails} />*/}
          <Route exact path="/" render={ () => <Redirect to="/dinder" /> } />
        </div>
      </Router>
    );
  }
>>>>>>> master
}

export default App;

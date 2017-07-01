import React, { Component } from 'react';
import FoodContainer from './food/FoodContainer'
import './App.css';

const foodItems = [
  {
    title: "Grapes",
    picture: "https://groentefruit.files.wordpress.com/2010/04/druiven4.jpg",
    tolerated: false,
    ingredients: "Pure grapes"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <FoodContainer fooditems={ foodItems } />
      </div>
    );
  }
}

export default App;

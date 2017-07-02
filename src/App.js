import React, { Component } from 'react';
import FoodContainer from './food/FoodContainer'
import './App.css';

const foodItems = [
  {
    title: "Grapes",
    picture: "https://groentefruit.files.wordpress.com/2010/04/druiven4.jpg",
    tolerated: false,
    ingredients: "Pure grapes"
  },
  {
    title: "Oatmeal",
    picture: "http://www.prevention.com/sites/prevention.com/files/styles/article_main_image_2200px/public/shutterstock_318957629-oatmeal-oksana-mizina-opener.jpg?itok=i0uMfcgE",
    tolerated: true,
    ingredients: "Oatmeal"
  },

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

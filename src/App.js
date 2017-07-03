import React, { Component } from 'react';
import FoodContainer from './food/FoodContainer'
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        { this.props.children }
      </div>
    );
  }
}

export default App;

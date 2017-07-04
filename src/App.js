import React, { Component } from 'react';
import FoodContainer from './food/FoodContainer'
import Loading from './components/Loading'
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        { this.props.children }
        <Loading />
      </div>
    );
  }
}

export default App;

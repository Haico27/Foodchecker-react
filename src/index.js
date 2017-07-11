import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'
import './index.css';
import App from './App';
import FoodContainer from './food/FoodContainer'
import IngredientsPage from './food/IngredientsPage'
import registerServiceWorker from './registerServiceWorker';
import AboutPage from './components/AboutPage';
import SignUp from './users/SignUp'
import SignIn from './users/SignIn'

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRoute component={ FoodContainer } />
        <Route path="/fooditems/:fooditemId" component={ IngredientsPage } />
        <Route path="/about" component={ AboutPage } />
        <Route path="/sign-up" component={ SignUp } />
        <Route path="/sign-in" component={ SignIn } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

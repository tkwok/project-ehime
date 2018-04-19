import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
// middleware, need to use applyMiddleware from redux
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDOP4q1sjJUnE1ei3t9_raEd0g5aN1EiGU',
      authDomain: 'goal-coach-2c8bc.firebaseapp.com',
      databaseURL: 'https://goal-coach-2c8bc.firebaseio.com',
      projectId: 'goal-coach-2c8bc',
      storageBucket: 'goal-coach-2c8bc.appspot.com',
      messagingSenderId: '610789741786'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

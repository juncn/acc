import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import history from '../store/history';
import store from '../store';
import Dashboard from './Dashboard';
import Navigation from './Navigation';

const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        <Navigation />
        <Route exact path="/dashboard" render={() => <Dashboard />} />
      </div>
    </Provider>
  </Router>
);

export default Main;

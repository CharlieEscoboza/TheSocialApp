import React from 'react';
import {
  NativeRouter as Router,
  Route
} from 'react-router-native';

import Home from '../layouts/Home';

const routes = () => (
  <Router>
    <Route exact path="/" component={Home} />
  </Router>
);

export default routes;

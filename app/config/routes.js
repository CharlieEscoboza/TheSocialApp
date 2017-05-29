import React from 'react';
import {
  NativeRouter,
  Route
} from 'react-router-native';

import Home from '../layouts/Home';

const routes = () => (
  <NativeRouter>
    <Route exact path="/" component={Home} />
  </NativeRouter>
);

export default routes;

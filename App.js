import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './components/view/login';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login"
          component={Login}
          hideNavBar
          initial
        />
      </Scene>
    </Router>
  );
}

export default App;
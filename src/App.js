import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Provider } from "react-redux";
import configureStore from './store';
import Login from './components/view/login';

const store = configureStore();
const App = () => {
  console.log(store)
  return (
    <Provider store={store}>
      <Router>
        <Scene key="root">
          <Scene key="login"
            component={Login}
            hideNavBar
            initial
          />
        </Scene>
      </Router>
    </Provider>
  );
}

export default App;
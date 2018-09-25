import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Provider } from "react-redux";
import configureStore from './store';

import Login from './components/view/login';
import Menu from './components/view/menu';
import Cadatro from './components/view/cadastro';
import Aluno from './components/view/aluno';

const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Scene key="root">
          <Scene key="login" component={Login} hideNavBar initial/>
          <Scene key="menu" component={Menu} hideNavBar/>
          <Scene key="cadastro" component={Cadatro} hideNavBar/>
          <Scene key="aluno" component={Aluno} hideNavBar/>
        </Scene>
      </Router>
    </Provider>
  );
}

export default App;
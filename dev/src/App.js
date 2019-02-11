import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Provider } from "react-redux";
import configureStore from './store';
import { View } from "react-native";
import FlashMessage from "react-native-flash-message";

import Login from './components/view/login';
import Menu from './components/view/menu';
import Cadatro from './components/view/cadastro';
import Aluno from './components/view/aluno';
import Motorista from './components/view/motorista';
import Onibus from './components/view/onibus';

const store = configureStore();
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="login" component={Login} hideNavBar initial />
            <Scene key="menu" component={Menu} hideNavBar />
            <Scene key="cadastro" component={Cadatro} hideNavBar />
            <Scene key="aluno" component={Aluno} hideNavBar />
            <Scene key="motorista" component={Motorista} hideNavBar />
            <Scene key="onibus" component={Onibus} hideNavBar />
          </Scene>
        </Router>
      </Provider>
      <FlashMessage position="bottom" />
    </View>
  );
}

export default App;
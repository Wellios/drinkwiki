import React from 'react';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';
import { store } from './store';
import { Routes } from './routes';
import { setNavigator } from './services/navigation';
import { colors } from './style';

const App = () => (
  <Provider store={store}>
    <StatusBar backgroundColor={colors.primary} />
    <Routes ref={setNavigator} />
  </Provider>
);

export default App;

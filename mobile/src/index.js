import React from 'react';
import { View } from 'react-native';

import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import { store } from './store';
import Routes from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

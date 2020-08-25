/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { createAppContainer } from 'react-navigation'
import AppLoad from './src/route/InitialStack'

const api_key = 'AIzaSyCloemcbgQ05LeRC-ufxUvSParZ87NnSXY'

const AppContainer = createAppContainer(AppLoad)

class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

export default App;

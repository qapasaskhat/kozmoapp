
import React from 'react';
import { createAppContainer } from 'react-navigation'
import AppLoad from './src/route/InitialStack'
import { Provider } from 'react-redux'
import store from './src/redux/store'

const AppContainer = createAppContainer(AppLoad)

class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <AppContainer />
      </Provider>
    );
  }
}

export default App;

/**
 * Sample React Native Workouts  * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
} from 'react-native';


class Workouts extends React.Component {
  render() {
    return (
      <>
      <View style={{flex:1,
              backgroundColor: '#fff',
              borderBottomLeftRadius:30,
              borderBottomRightRadius:30,
              marginBottom: 5}}>
        <Text>Workouts</Text>
      </View>
      </>
    );
  }
}

export default Workouts 

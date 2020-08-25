/**
 * Sample React Native Favorites
 * https://github.com/facebook/react-native
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
  Pressable
} from 'react-native';


class Favorites extends React.Component {
  render() {
    return (
      <>
      <View style={{flex:1,
              backgroundColor: '#fff',
              borderBottomLeftRadius:30,
              borderBottomRightRadius:30,
              justifyContent:'center',
              alignItems: 'center',
              marginBottom: 5}}>
        <Text>Favorites</Text>
        <Pressable 
        onPress={()=>{alert('long')}}
        style={({pressed})=>({
          backgroundColor: pressed? 'lightskyblue' : 'white'
        })}
        >
          <Text>press</Text>
        </Pressable>
      </View>
      </>
    );
  }
}

export default Favorites;

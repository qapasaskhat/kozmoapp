import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../../components/Header';
import MapView from 'react-native-maps'

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{
          flex: 1
      }}>
          
          <MapView 
          provider="google"
          initialRegion={{
            latitude: 43.225469,
            longitude: 76.901892,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={StyleSheet.absoluteFillObject} >
          <View style={{
              position: 'absolute',
              top: 20,
              left: 20
          }}>
             <Header />
          </View>
          <View style={{
              position: 'absolute',
              width: '100%',
              height:'30%',
              bottom: 0,
              backgroundColor: '#fff',
              borderTopLeftRadius:30,
              borderTopRightRadius: 30
          }}>
              <Text>text</Text>
          </View>
          </MapView>
      </View>
    );
  }
}

export default Address;

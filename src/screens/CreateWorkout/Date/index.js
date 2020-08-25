import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars'
import Header from '../../../components/Header'
import { TextInput } from 'react-native-gesture-handler';
import { YellowBtn } from '../../../components/Button'

class Date extends Component {
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
        <Header label='Дата тренировки' />
        <View style={{
            marginHorizontal:'10%',
            marginTop:'5%'
        }}>
            <TextInput 
            value='13'
            style={{
                borderRadius: 45,
                backgroundColor: '#f3f3f3',
                height: 50,
                paddingLeft: 10
            }} />
            <Calendar />
        </View>
        <View style={{
            position: 'absolute',
            bottom: 20,
            width: '100%'
        }}>
            <YellowBtn text='Сохранить' />
        </View>
      </View>
    );
  }
}

export default Date;

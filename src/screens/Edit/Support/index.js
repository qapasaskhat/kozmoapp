import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../../../components/Header'
import { YellowBtn } from '../../../components/Button'
import { TextInput } from 'react-native-gesture-handler';

class Support extends Component {
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
        <Header />
        <View style={{
                marginHorizontal: '10%',
                marginTop: '5%',
            }}>
            <Text style={{
                    fontSize: 16,
                    fontFamily: 'SFProDisplay-Regular',
                    fontWeight: '600',
                    color: '#1F1F1F',
                    marginBottom: '8%'
                }}>Напишите нам</Text>
            <TextInput 
                placeholder='Опишите проблему'
                multiline
                style={{
                    borderWidth: 1,
                    borderColor: '#d4d4d4',
                    height: '70%',
                    padding: 9,
                    borderRadius: 7
                }}
                 />
        </View>
        <View style={{
            position: 'absolute',
            bottom: 20,
            width: '100%'
        }}>
            <YellowBtn text='Отправить' />
        </View>
      </View>
    );
  }
}

export default Support;

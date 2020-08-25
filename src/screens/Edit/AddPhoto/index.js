import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { YellowBtn } from '../../../components/Button'
import Header from '../../../components/Header'

class AddPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
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
                }}>Добавление фото</Text>
            <View style={{
                width: '100%',
                height: '60%',
                backgroundColor: '#000',
                borderRadius: 6,
                marginTop: '10%'
            }}>
                
            </View>
        </View>
        <View style={{
                position: 'absolute',
                bottom: 20,
                width:'100%',
                height: 140,
                justifyContent: 'space-between'
            }}>
                <YellowBtn text='Загрузить еще' />
                <YellowBtn text='Сохранить' />
            </View>
      </View>
    );
  }
}

export default AddPhoto;

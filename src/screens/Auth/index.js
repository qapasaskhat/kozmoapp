import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Logo from '../../components/Logo';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import {YellowBtn, GrayBtn} from '../../components/Button/index';
export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <ScrollView>
          <Logo />
          <Text
            style={{
              fontSize: 25,
              fontWeight: '800',
              color: '#ccc',
              marginLeft: '10%',
              marginTop: '5%',
              textTransform: 'uppercase'
            }}>
            <Text style={{fontWeight: 'bold', color: '#1c1c1c'}}>Leap</Text>
            {'\n'}
            ПРИСОЕДИНЯЙСЯ{'\n'}к КОМАНДЕ
          </Text>
          <View style={{marginTop: '20%'}}>
            <TextInput
              placeholder="Телефон / Email"
              placeholderTextColor="#000"
              textAlign="center"
              style={{
                borderBottomColor: '#D0D0D0',
                borderBottomWidth: 1,
                height: 40,
                width: '100%',
              }}
            />
            <TextInput
              placeholder="Пароль"
              placeholderTextColor="#000"
              textAlign="center"
              style={{
                borderBottomColor: '#D0D0D0',
                borderBottomWidth: 1,
                height: 40,
                width: '100%',
                marginTop: '10%',
              }}
            />
          </View>
          <TouchableOpacity
            onPress={()=>{
              this.props.navigation.navigate('ResetPassword')
            }}
            style={{
              borderWidth: 1,
              borderRadius: 46,
              alignSelf: 'center',
              paddingVertical: 5,
              borderColor: 'rgba(3, 3, 3, 0.28)',
              margin: '5%',
              width: '80%',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 12,}}>Забыли пароль?</Text>
          </TouchableOpacity>
        </ScrollView>
        <View
          style={{
            position: 'absolute',
            bottom: '10%',
            width: '100%',
          }}>
          <YellowBtn text="Войти" />
          <GrayBtn text="Регистрация" onPress={()=>{
            this.props.navigation.navigate('Register')
          }} />
        </View>
      </>
    );
  }
}

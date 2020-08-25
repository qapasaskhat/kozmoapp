import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Logo from '../../../components/Logo';
import {YellowBtn, GrayBtn} from '../../../components/Button';
import TextInputMask from 'react-native-text-input-mask';
import { star, workout } from '../../../assets/icons'

const PhoneNumber = ({
  onPress,
  onPressInst
}) => {
  return (
    <View style={{flex:1}}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: '800',
          color: '#ccc',
          marginLeft: '10%',
          marginTop: '5%',
          fontFamily: 'SFProDisplay-Regular',
          textTransform: 'uppercase'
        }}>
        <Text style={{fontWeight: 'bold', color: '#1c1c1c'}}>Leap</Text>
        {'\n'}
        НОМЕР ТЕЛЕФОНА{'\n'}
      </Text>
      <TextInputMask
        // refInput={(ref) => {
        //   this.input = ref;
        // }}
        onChangeText={(formatted, extracted) => {
          console.log(formatted); // +1 (123) 456-78-90
          console.log(extracted); // 1234567890
        }}
        placeholder='+7 ( _ _ _ ) _ _ _ - _ _ - _ _'
        placeholderTextColor='#000'
        mask={'+7 ([000]) [000] [00] [00]'}
        textAlign='left'
        style={{
            alignSelf: 'center',
            marginVertical: '20%',
            fontSize: 19,
          }}
      />
      <View style={{
          position: 'absolute',
          width:'100%',
          bottom: '20%'
      }}>
      <Text style={{
          fontSize: 15,
          color: '#585858',
          fontWeight: '600',
          lineHeight: 16,
          bottom: 35,
          textAlign: 'center'
      }}>Создать аккаунт</Text>
      <View style={{
          position: 'absolute',
          width:'100%',
      }}>
          <YellowBtn text='Атлета' icon iconName={workout} onPress={onPress} />
          <View style={{height:10}}/>
          <YellowBtn text='Инструктора' icon iconName={star} onPress={onPressInst}/>
      </View>
      </View>
    </View>
  );
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={{flex: 1}}>
        <Logo />
        <PhoneNumber onPress={()=>{navigation.navigate('UserRegistration')}} onPressInst={()=>{navigation.navigate('Registration')}} />
      </View>
    );
  }
}

export default Register;

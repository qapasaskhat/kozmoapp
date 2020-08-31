import React, {Component} from 'react';
import {View, Text, Alert} from 'react-native';
import Logo from '../../../components/Logo';
import {YellowBtn, GrayBtn} from '../../../components/Button';
import TextInputMask from 'react-native-text-input-mask';
import { star, workout } from '../../../assets/icons'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '77007007070'
    }
  }
  validatePhone=number=>{
    let val = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return val.test(String(number))
  }
  navigateInst=()=>{
    if(this.validatePhone(this.state.phone)){
      console.warn(this.state.phone)
      this.props.navigation.navigate('Registration',{phone: this.state.phone})
    }else{
      Alert.alert(
        "Ошибка",
        'Неверный формат телефона',
        [
          { text: "OK", onPress: () => console.log("OK Pressed"),style: "cancel" }
        ],
        { cancelable: false }
      );
    }
  }
  navigateAtlet=()=>{
    if(this.validatePhone(this.state.phone)){
      console.warn(this.state.phone)
      this.props.navigation.navigate('UserRegistration',{phone: this.state.phone})
    }else{
      Alert.alert(
        "Ошибка",
        'Неверный формат телефона',
        [
          { text: "OK", onPress: () => console.log("OK Pressed"),style: "cancel" }
        ],
        { cancelable: false }
      );
    }
  }
  PhoneNumber = ({
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
          mask={'+7[000][000][00][00]'}
          textAlign='left'
          value={this.state.phone}
          onChangeText={(text)=>{this.setState({phone: text})}}
          style={{
              alignSelf: 'center',
              marginVertical: '20%',
              fontSize: 19,
            }}/>
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


  render() {
    const { navigation } = this.props
    return (
      <View style={{flex: 1}}>
        <Logo />
        <this.PhoneNumber 
          onPress={()=>{
            this.navigateAtlet()
          }} 
          onPressInst={()=>{this.navigateInst()}} />
      </View>
    );
  }
}

export default Register;

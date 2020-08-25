import React, { Component } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import Logo from '../../../components/Logo'
import { TextInput } from 'react-native-gesture-handler';
import {YellowBtn, GrayBtn} from '../../../components/Button'
import styles from './styles'
import {email} from '../../../assets/icons'

const ResetPhone=()=>{
    return(
        <View>
            <Text style={styles.txtStyle}>Введите номер телефона</Text>
            <View style={{
                alignItems: 'center',
                marginTop: '20%'
            }}>
                <TextInput placeholder='+7 000 000 00 00' placeholderTextColor='#000' />
                <Pressable 
                style={({pressed})=>({
                backgroundColor: pressed? 'rgba(3, 3, 3, 0.28)' : 'white',
                borderWidth:1,
                borderRadius: 46,
                alignSelf: 'center',
                padding: 5,
                borderColor: 'rgba(3, 3, 3, 0.28)',
                margin:'15%',
                paddingHorizontal: '8%'
              })}>
                <Text style={{fontFamily: 'SFProDisplay-Regular'}}>У меня нет доступа к номеру</Text>
            </Pressable>
            </View>
            <YellowBtn text='Отправить' />
            <GrayBtn text='Отмена'/>
        </View>
    )
}
const ResetEmail = ()=>{
    return(
        <View>
            <Text style={styles.txtStyle}>Введите Email</Text>
            <TextInput 
                placeholder="Email" 
                placeholderTextColor='#000' 
                textAlign='center'
                style={styles.txtInput} />
            <YellowBtn text='Отправить'/>
            <GrayBtn text='Отмена'/>
        </View>
    )
}
const SuccessEmail = ()=>{
    return(
        <View style={{
            //alignItems: 'center',
            marginTop: '20%'
        }}>
            <View style={{
                width: 140,
                height: 140,
                borderRadius: 100,
                borderWidth: 1,
                borderColor: '#6FC716',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center'
            }}>
                <Image source={email} style={{width:64, height:64, resizeMode: 'contain'}}/>
            </View>
            <Text style={{
                fontFamily:'SFProDisplay-Regular',
                fontSize: 17,
                color: '#585858',
                lineHeight: 18,
                textAlign: 'center',
                marginHorizontal: '10%',
                marginVertical: '5%'
            }}>Вам было отправленно письмо с восстановлением пароля на почту</Text>
            <Text style={{
                fontFamily:'SFProDisplay-Regular',
                fontSize: 24,
                color: '#6FC716',
                lineHeight: 32,
                textAlign: 'center',
                marginBottom: '10%'
            }}>any@gmail.com</Text>
            <GrayBtn text='Отмена' />
        </View>
    )
}

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Logo />
        <Text style={{fontSize: 25,fontWeight: '800',color: '#ccc', marginLeft: '10%',marginTop:'5%', fontFamily:'SFProDisplay-Regular'}}>
            <Text style={{fontWeight: 'bold',color: '#1c1c1c',}}>Leap</Text>{'\n'}
                ВОССТАНОВЛЕНИЕ{'\n'}
                ПАРОЛЯ
        </Text>
        <SuccessEmail />
      </View>
    );
  }
}

export default ResetPassword;

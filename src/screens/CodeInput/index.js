import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Logo from '../../components/Logo';
import {YellowBtn, GrayBtn} from '../../components/Button';
import {warning,checkicon} from '../../assets/icons'
import CodeInput from 'react-native-confirmation-code-input';
import Modal from 'react-native-modal'

class CodeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Logo />
        <Text style={styles.txtStyle}>
          <Text style={styles.text}>ZFit</Text>
          {'\n'}
          ПОДТВЕРЖДЕНИЕ
        </Text>
        <View style={{
            width: 140,
            height: 140,
            borderWidth: 1,
            borderRadius: 100,
            alignSelf:'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10%',
            borderColor: '#FFF614'
        }}>
            <Image source={warning} style={{
                width: 60,
                height: 60,
                resizeMode: 'contain'
            }} />
        </View>
        <Text style={{
            fontSize: 17,
            color: '#595959',
            fontFamily: 'SFProDisplay-Bold',
            fontWeight: '600',
            textAlign: 'center',
            marginTop: '10%'
        }}>Предупреждение???</Text>
        <View style={{
            position: 'absolute',
            width: '100%',
            bottom: '10%'
        }}>
            <YellowBtn text='Согласиться' icon iconName={checkicon}/>
            <GrayBtn text='Отказаться' />
        </View>
        
      </View>
    );
  }
}

export default CodeScreen;
const styles = StyleSheet.create({
  txtStyle: {
    fontSize: 25,
    color: '#D0D0D0',
    fontWeight: '800',
    marginLeft: '10%',
    marginTop: '5%',
    fontFamily: 'SFProDisplay-Bold',
    textTransform: 'uppercase',
    lineHeight: 27,
  },
  text: {
    color: '#1c1c1c',
    fontFamily: 'SFProDisplay-Bold',
  },
  code:{
    fontSize: 15,
    lineHeight: 18,
    color: '#585858',
    marginTop: '2%',
    marginLeft:'10%',
    fontFamily: 'SFProDisplay-Bold',
    fontWeight: '500',
},
btn:{
    alignSelf:'center', 
    paddingHorizontal: '10%', 
    paddingVertical: '2%',
    borderWidth: 1,
    borderRadius: 46,
    borderColor:'rgba(3, 3, 3, 0.28)'
},
});
{/* <Text style={styles.txtStyle}>
          <Text style={styles.text}>ZFit</Text>
          {'\n'}
          ПОДТВЕРЖДЕНИЕ
        </Text>
        <Text style={styles.code}>Введите код-пароль из SMS</Text>
        <View
          style={{backgroundColor: '#fff', marginTop: '40%', height: '15%'}}>
          <CodeInput
            compareWithCode="AsDW2"
            activeColor="#000"
            inactiveColor="#000"
            className="border-b"
            autoFocus={false}
            ignoreCase={true}
            inputPosition="center"
            codeLength={4}
            size={50}
          />
        </View>
        <TouchableOpacity onPress={()=>{}} style={styles.btn}>
            <Text>Отправить заново</Text>
        </TouchableOpacity>
        <View style={{
            position: 'absolute',
            bottom: '10%',
            width: '100%'
        }}>
            <YellowBtn text='Далее' />
        </View> */}

import React, {Component} from 'react';
import {View, Text, StatusBar, SafeAreaView, StyleSheet, Image} from 'react-native';
import Logo from '../../../components/Logo';
import {balans_icon} from '../../../assets/icons'
import {YellowBtn,GrayBtn} from '../../../components/Button'

const Header = ({text}) => (
  <View>
    <Logo />
    <Text style={styles.txtStyle}>
      <Text style={styles.text}>ZFit</Text>
      {'\n'}
      {text}
    </Text>
  </View>
);

class FirstBalans extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <StatusBar />
        <SafeAreaView>
          <Header text="БАЛАНС" />
          <View style={styles.view}>
              <View style={{
                  width:140,
                  height: 140,
                  borderRadius: 100,
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: '#FFF614'
              }}>
                  <Image source={balans_icon} style={{
                      width: 64,
                      height: 64,
                      resizeMode: 'center'
                  }} />
              </View>
            <Text style={{
                textAlign:'center',
                fontSize: 15,
                color: '#595959'
            }}>
              Чтобы записаться на первую тренировку {'\n'}пополните баланс
              минимум на {'\n'}
              <Text style={{
                  fontSize: 20,
                  color: '#6FC716'
              }}>3 000 т</Text>
            </Text>
          </View>
          <View style={{
              position: 'absolute',
              bottom: 0,
              width: '100%'
          }}>
              <YellowBtn text='Пополнить баланс' />
              <GrayBtn text='Пропустить' onPress={()=>{
                  this.props.navigation.navigate('Main')
              }}/>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

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
  container: {
    flex: 1,
  },
  view:{
      justifyContent: 'center',
      alignItems: 'center',
      height: '60%'
  }
});

export default FirstBalans;

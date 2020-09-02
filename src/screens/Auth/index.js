import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import Logo from '../../components/Logo';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import {YellowBtn, GrayBtn} from '../../components/Button/index';
import axios from 'axios'
import {apiUri} from '../../api'
import Modal from 'react-native-modal'
import {connect} from 'react-redux'

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      password: '',
      loading: false
    };

  }
  _login=()=>{
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();
    data.append('phone', this.state.phone);
    data.append('password', this.state.password);
    this.setState({
      loading: true
    })
    var config = {
      method: 'post',
      url: `${apiUri}login`,
      headers: { 
        'Accept': 'application/json', 
      },
      data : data
    };

    axios(config)
    .then( (response)=> {
      console.log(JSON.stringify(response.data));
      this.setState({
        loading: false
      })
      this.props.dispatch({type: 'ACCESS_TOKEN', payload: response.data.access_token} )
      response.data.role === 'coach' && this.props.navigation.navigate('InstMain')
      response.data.role === 'athlete' && this.props.navigation.navigate('Main')
    })
    .catch( (error)=> {
      console.warn(error)
      this.setState({
        loading: false
      })
      Alert.alert(
        "Ошибка входа",
        error.message,
        [
          { text: "OK", onPress: () => console.log("OK Pressed"),style: "cancel" }
        ],
        { cancelable: false }
      );
    });

  }

  render() {
    const { phone, password, loading } = this.state
    return (
      <>
        <ScrollView>
          <Modal  
            isVisible={loading}
            backdropColor='#fff'
            backdropOpacity={0.9}>
            <ActivityIndicator />
          </Modal>
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
              value={phone}
              textAlign="center"
              onChangeText={(text)=>this.setState({
                phone: text
              })}
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
              value={password}
              onChangeText={(text)=>this.setState({
                password: text
              })}
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
          <YellowBtn text="Войти" onPress={()=>{
            this._login()
          }}/>
          <GrayBtn text="Регистрация" onPress={()=>{
            this.props.navigation.navigate('Register')
          }} />
        </View>
      </>
    );
  }
}
const mapStateToProps = (state) =>({
})
const mapDispatchToProps = (dispatch) => ({
  dispatch,
});
export default connect(mapStateToProps,mapDispatchToProps)(Auth)

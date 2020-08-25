import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Header from '../../components/Header';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {YellowBtn} from '../../components/Button'
import {basket} from '../../assets/icons'

const Card =()=>(
    <View style={{
      width: 50,
      height: 50,
      borderRadius: 30,
      backgroundColor: '#FFF529',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '10%',
      marginBottom: '5%'
    }}>
      <Image source={basket} style={{
        width: 30,
        height: 30,
        resizeMode: 'contain'
      }} />
    </View>
  )

class ProfileEdit extends Component {
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
              flexDirection: 'row',
              marginTop: '5%',
              marginHorizontal: '10%'
          }}>
              <View style={{
                  backgroundColor: '#000',
                  height: 86,
                  width: 86,
                  borderRadius: 9
              }}></View>
              <View style={{
                  borderWidth: 1,
                  width: '70%',
                 // height: '60%',
                  alignSelf: 'flex-end',
                  marginLeft: '5%',
                  borderRadius: 7,
                  borderColor: '#242424',
                  //paddingVertical:13,
                  justifyContent:'center',
                  paddingVertical: 10
              }}>
                  <Text style={{
                      textAlign:'center',
                      alignItem:'center'
                  }}>Загрузить новое фото</Text>
              </View>
          </View>
          <TextInput placeholder='phone' style={{
              marginHorizontal: '10%',
              marginTop: '6%',
              paddingHorizontal: 5,
              backgroundColor: "#fff",
              shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                borderRadius: 7,
                paddingVertical: 16
          }}/>
          <TextInput placeholder='city' style={{
              marginHorizontal: '10%',
              marginTop: '6%',
              paddingHorizontal: 5,
              backgroundColor: "#fff",
              shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                borderRadius: 7,
                paddingVertical: 16
          }}/>
          <View style={{flexDirection: 'row',marginHorizontal: '10%',marginTop: '5%'}}>
              {[{},{},{}].map(item=>(<Card />))}
            </View>
          <View style={{
              marginTop: '5%',
              marginHorizontal: '10%'
          }}>
              <Text>Изметь пароль</Text>
              <Text>Текущий пароль</Text>
              <TextInput style={{
                  width: '100%',
                  borderRadius: 11,
                  borderWidth:1,
                  borderColor: '#dadada',
                  paddingVertical: 16,
                  paddingHorizontal: 5
              }} secureTextEntry />
              <Text>Текущий пароль</Text>
              <TextInput style={{
                  width: '100%',
                  borderRadius: 11,
                  borderWidth:1,
                  borderColor: '#dadada',
                  paddingVertical: 16,
                  paddingHorizontal: 5
              }} secureTextEntry />
              <Text>Текущий пароль</Text>
              <TextInput style={{
                  width: '100%',
                  borderRadius: 11,
                  borderWidth:1,
                  borderColor: '#dadada',
                  paddingVertical: 16,
                  paddingHorizontal: 5
              }} secureTextEntry />
          </View>
          <View style={{
              marginHorizontal: '10%',
              marginTop: '8%',
          }}>
          <TouchableOpacity style={{
              borderWidth: 1,
              borderColor: '#242424',
              borderRadius: 30,
              paddingVertical: 20,
              justifyContent: 'center',
              alignItems:'center',
              marginBottom: '5%'
          }}>
              <Text>Отменить редактирование</Text>
          </TouchableOpacity>
          </View>
          <YellowBtn />
      </View>
    );
  }
}

export default ProfileEdit;

import React, { Component } from 'react';
import { View, Text,TextInput,Image } from 'react-native';
import Header from '../../components/Header'
import { ScrollView } from 'react-native-gesture-handler';
import {main_logo} from '../../assets/icons'
import { YellowBtn } from '../../components/Button'
import { BlurView, VibrancyView } from "@react-native-community/blur";

const NewHeader = ()=>(
    <View>
        <Header />
        <View style={{
            position: 'absolute',
            top: 60,
            right: 8,
            backgroundColor: '#FFF529',
            paddingHorizontal:16,
            paddingVertical: 12
        }}>
            <Text style={{
                color: '#000',
                fontSize: 16,
                fontWeight: '600',
                fontFamily: 'SFProDisplay-Regular',
            }}>
            Запрос на тренировку
            </Text>
        </View>
    </View>
)

const Input = ({price, label, text}) => (
    <View
      style={{
        marginTop: '3%',
      }}>
      <Text
        style={{
          fontSize: 11,
          fontFamily: 'SFProDisplay-Regular',
          fontWeight: '600',
          color: '#242424',
          paddingLeft: 10,
        }}>
        {label} <Text style={{fontWeight: '100', color: ''}}>{text}</Text>{' '}
      </Text>
      <TextInput
        placeholder={label}
        style={{
          width: '100%',
          height: 40,
          borderRadius: 11,
          borderColor: '#dddddd',
          borderWidth: 1,
          paddingLeft: 10,
          marginTop: 5,
          backgroundColor: price ? '#eee' : '#fff',
        }}
      />
    </View>
  );

  const Card = ({icon,label,onpress}) => (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
  
        elevation: 5,
        height: 50,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: '10%',
        width:'100%',
        paddingLeft: 20,
      }}>
      <Image source={main_logo} style={{
          width: 15,
          height: 15,
          resizeMode: 'contain',
          tintColor: '#000',
          marginRight: 20
      }}/>
      <Text style={{
          fontSize: 12,
          color: '#242424',
          fontFamily: 'SFProDisplay-Regular',
          fontWeight: '500'
      }}>{label}</Text>
    </View>
  );
  const InputMunlitine =({label,height})=>(
    <View style={{
            marginHorizontal: '10%',
            marginTop: '5%'
    }}>
        <Text style={{
            fontSize: 11,
            fontFamily: 'SFProDisplay-Regular',
            fontWeight: '600',
            color: '#242424',
            marginBottom: '2%'
        }}>{label}</Text>
        <TextInput
            style={{
                height: height,
                borderRadius: 11,
                borderColor: '#dadada',
                borderWidth: 1,
                paddingLeft: 10,
                
            }} />
    </View>
)

class RequestWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
        visible: false
    };
  }

  render() {
      const { visible}  = this.state
    return (
      <View style={{
          flex: 1
      }}>
         { visible? 
         <BlurView
         style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
          }}
         blurType="light"
         blurAmount={10}
         reducedTransparencyFallbackColor="white"
       >
         <View style={{
              position: 'absolute', 
              width: '100%', 
              height: '100%',
              justifyContent:'center',
              alignItems: 'center',
              zIndex:1111
              }}>
              <View style={{
                  backgroundColor: '#fff',
                  width:'82%',
                  height: '60%',
                  borderRadius: 8
              }}>
                  <Text>text</Text>
              </View>
          </View></BlurView> : null}
          <ScrollView>
        <NewHeader />
        <View style={{
            marginHorizontal: '10%',
            marginTop: '5%'
        }}>
            <Text style={{
                fontSize: 11,
                color: '#242424',
                fontWeight: '600',
                fontFamily: 'SFProDisplay-Regular',
            }}>Выбор профиля тренировки</Text>
            <View style={{height:120,backgroundColor: '#000',}} />
            <Input label='Название тренировки ' text='30 символов'  />
            <Input label='Стоимость тренировки' price  />
            <Card label='Время тренировки' />
              <Card label='Дата тренировки' />
              <Card label='Адрес тренировки' />
        </View>
        <InputMunlitine label='Описание тренировки' height={200}/>
        <View style={{
            marginVertical: 16
        }}>
            <YellowBtn onpress={()=>{
                this.setState({
                    visible: true
                })
            }} text='Отправить запрос' />
        </View>
        </ScrollView>
      </View>
    );
  }
}

export default RequestWorkout;

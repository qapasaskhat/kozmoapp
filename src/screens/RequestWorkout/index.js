import React, { Component } from 'react';
import { View, Text,TextInput,Image,SafeAreaView } from 'react-native';
import Header from '../../components/Header'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {main_logo,next,checkicon} from '../../assets/icons'
import { YellowBtn } from '../../components/Button'
import { BlurView, VibrancyView } from "@react-native-community/blur";
import Modal from 'react-native-modal'

const NewHeader = ({back})=>(
    <View>
        <Header back={back} />
        <View style={{
            position: 'absolute',
            top: 20,
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
        visible: false,
        modalVisible: false
    };
  }

  render() {
      const { visible,modalVisible}  = this.state
    return (
      <SafeAreaView style={{
          flex: 1,
          backgroundColor: '#fff',
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
        <NewHeader back={()=>{this.props.navigation.goBack()}}/>
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
                    //visible: true,
                    modalVisible: true
                })
            }} text='Отправить запрос' />
        </View>
        </ScrollView>
        <Modal isVisible={modalVisible} 
            backdropColor='#fff'
            backdropOpacity={0.9}>
              <View style={{
                height: '70%',
                marginHorizontal: '4%',
                shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            backgroundColor: '#fff'
              }}>
                <TouchableOpacity onPress={()=>{this.setState({modalVisible: false})}}>
                <Image source={next} style={{
                  width:24,
                  height: 16,
                  resizeMode:'contain',
                  transform: [{ rotate: '180deg' }],
                  margin: 10,
                }} />
                </TouchableOpacity>
                <View style={{
                  alignSelf:'center',
                  width: 140,
                  height:140,
                  borderWidth:1,
                  borderRadius: 100,
                  justifyContent:'center',
                  alignItems:'center',
                  marginTop: 20
                }}>
                  <Image source={checkicon} style={{
                    width:64,
                    height:64,
                    resizeMode:'contain'
                  }}/>
                </View>
                <Text style={{
                  textAlign:'center'
                }}>Спасибо!{'\n'}Ваш запрос успешно {'\n'}опубликован</Text>
                <View style={{
                  position:'absolute',
                  width:'100%',
                  bottom: 10
                }}>
                <YellowBtn text='Мои запросы' />
                </View>
              </View>
            </Modal>
      </SafeAreaView>
    );
  }
}

export default RequestWorkout;

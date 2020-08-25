import React, {Component} from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import Header from '../../../components/Header';
import MoneyCard from '../../../components/MoneyCard';
import {YellowBtn} from '../../../components/Button';
import { TextInput } from 'react-native-gesture-handler';

const Mycard =()=>(
    <View style={{
        marginHorizontal: '10%',
        marginTop: '5%',
    }}>
        <Text style={{
            fontSize: 16,
            fontFamily: 'SFProDisplay-Regular',
            fontWeight: '600',
            color: '#1F1F1F',
            marginBottom: '8%',
            marginBottom: '5%'
        }}>Мои карты</Text>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            <View style={{
                height: 40,
                width: '90%',
                borderRadius: 11,
                backgroundColor: '#fff',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                flexDirection: 'row'
            }} >
                
            </View>
            <Text style={{
                fontSize: 32,
                position: 'absolute',
                top: -10, right: 0,
                color: '#d4d4d4'
            }}>...</Text>
        </View>
        <View style={{
            height: 50,
            borderWidth: 1,
            borderColor: '#C8C8C8',
            borderRadius: 11,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10%'
        }}>
            <Text style={{
                fontSize: 13,
                color: '#1F1F1F',
                fontWeight: '500',
                fontFamily: 'SFProDisplay-Regular'
            }}>Добавить карту</Text>
        </View>
    </View>
) 
const Create = ()=>(
    <View style={{
        marginHorizontal:'10%',
        marginTop: '5%'
    }}>
        <Text style={{
            fontSize: 16,
            fontFamily: 'SFProDisplay-Regular',
            fontWeight: '600',
            color: '#1F1F1F',
            marginBottom: '8%',
            marginBottom: '5%'
        }}>Добавление новой карты</Text>
        <TextInput 
            placeholder='Номер карты' 
            style={{
                borderBottomColor: '#c8c8c8',
                borderBottomWidth: 1,
                paddingBottom: 8,
                paddingLeft: 8,
                marginTop: '15%',
            fontFamily: 'SFProDisplay-Regular',
            color: '#1F1F1F',
            fontSize: 13,
            }}
            placeholderTextColor='#000' />
        <TextInput 
            placeholder='ИМЯ ФАМИЛИЯ' 
            style={{
                borderBottomColor: '#c8c8c8',
                borderBottomWidth: 1,
                paddingBottom: 8,
                fontSize: 13,
            fontFamily: 'SFProDisplay-Regular',
            paddingLeft: 8,
            color: '#1F1F1F',
            marginTop: '10%'

            }}
            placeholderTextColor='#000' />
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            <TextInput 
                placeholder='Дата' 
                style={{
                    borderBottomColor: '#c8c8c8',
                    borderBottomWidth: 1,
                    paddingBottom: 8,
                    paddingLeft: 8,
            fontFamily: 'SFProDisplay-Regular',
            color: '#1F1F1F',
            fontSize: 13,
                marginTop: '10%',
                    width: '40%'
                }}
                placeholderTextColor='#000' />
                <TextInput 
                placeholder='CVV' 
                style={{
                    borderBottomColor: '#c8c8c8',
                    borderBottomWidth: 1,
                    paddingBottom: 8,
            fontFamily: 'SFProDisplay-Regular',
            color: '#1F1F1F',
            fontSize: 13,
                paddingLeft: 8,
                    marginTop: '10%',
                    width: '40%'

                }}
                placeholderTextColor='#000' />
        </View>
    </View>
)
class Withdraw extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'SFProDisplay-Regular',
            fontWeight: '600',
            color: '#1F1F1F',
            marginBottom: '8%',
            marginHorizontal: '10%',
            marginTop: '5%',
          }}>
          Мой баланс
        </Text>
        <MoneyCard />
        <View>
            <Text style={{
                fontSize: 16,
                fontFamily: 'SFProDisplay-Regular',
                fontWeight: '600',
                color: '#1F1F1F',
                marginBottom: '8%',
                marginHorizontal: '10%',
                marginTop: '5%',
            }}>Сумма вывода</Text>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: '10%',
                marginTop: '5%',
                backgroundColor: '#F2F2F2',
                height: 60,
                borderRadius: 11,
                paddingHorizontal: 10,
                alignItems: 'center',
            }}>
                <TextInput 
                    placeholder='1000'
                    maxLength={6}
                    style={{
                        fontSize: 20,
                        fontWeight: '200',
                        fontFamily: 'SFProDisplay-Regular',
                        fontStyle: 'normal',
                        color:'#000',
                    }}
                     />
                <Text>T</Text>
            </View>
        </View>
        <Mycard />
        <View style={{
                position: 'absolute',
                width: '100%',
                bottom: 20
            }}>
                <YellowBtn text='Подтвердить перевод'/>
            </View>
      </View>
    );
  }
}

export default Withdraw;

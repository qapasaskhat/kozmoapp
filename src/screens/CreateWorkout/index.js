import React, {Component} from 'react';
import {View, Text,Image,TouchableOpacity,SafeAreaView} from 'react-native';
import Header from '../../components/Header';
import Category from '../../components/InstCategory';
import {TextInput, FlatList} from 'react-native-gesture-handler';
import {main_logo} from '../../assets/icons'
import Invertory from '../../components/Inventory'
import { YellowBtn } from '../../components/Button'

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

const Switch = ({label, value1, value2}) => (
  <View>
    <Text
      style={{
        fontSize: 11,
        fontFamily: 'SFProDisplay-Regular',
        fontWeight: '600',
        color: '#242424',
        paddingLeft: 10,
        marginTop: '8%',
        marginBottom: '1%',
      }}>
      {label}
    </Text>
    <View
      style={{
        flexDirection: 'row',
        height: 40,
        backgroundColor: '#eeeeee',
        borderRadius: 51,
        marginBottom: '3%',
      }}>
      <View
        style={{
          width: '50%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
          borderRadius: 51,
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 12,
            fontFamily: 'SFProDisplay-Regular',
          }}>
          {value1}
        </Text>
      </View>
      <View
        style={{
          width: '50%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 51,
        }}>
        <Text
          style={{
            color: '#000',
            fontSize: 12,
            fontFamily: 'SFProDisplay-Regular',
          }}>
          {value2}
        </Text>
      </View>
    </View>
  </View>
);

const Subscription = ({onPress}) => (
  <View
    style={{
      backgroundColor: '#FFF529',
      height: 320,
      borderRadius: 7,
      marginTop: '5%',
      paddingHorizontal: '5%',
      paddingTop: '5%',
    }}>
    <Text
      style={{
        fontSize: 12,
        color: '#242424',
        fontWeight: '600',
        fontFamily: 'SFProDisplay-Regular',
        paddingLeft: '3%',
      }}>
      Создатие абонемента
    </Text>
    <Input label="Стоимость одного занятия" />
    <Input label="Количество тренировок в абонементе " text="минимум 2" />
    <Card label="Дни недели тренировок" onpress={onPress}/>
    <View
      style={{
        height: 44,
        backgroundColor: '#000',
        borderRadius: 51,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
      }}>
      <Text
        style={{
          color: '#fff',
        }}>
        Создать абонемент
      </Text>
    </View>
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

const Card = ({icon,label,onpress}) => (
  <TouchableOpacity
    onPress={onpress}
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
  </TouchableOpacity>
);

class CreateWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props
    return (
      <FlatList
        data={[{}]}
        renderItem={() => (
          <SafeAreaView style={{flex: 1, backgroundColor: '#fff',}}>
            <Header label="+ Создание тренировки" />
            <View
              style={{
                marginHorizontal: '10%',
                marginTop: '5%',
              }}>
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: 'SFProDisplay-Regular',
                  fontWeight: '500',
                  color: '#242424',
                }}>
                Выбор профиля тренировки
              </Text>
            </View>
            <Category items={[{},{}]} />
            <View
              style={{
                marginHorizontal: '10%',
                marginTop: '5%',
              }}>
              <Input label={'Название тренировки '} text={'30 символов'} />
              <Input price label="Стоимость разовой тренировки" />
              <Switch
                label="Тип тренировки"
                value1="Групповая"
                value2="Индивидуальная"
              />
              <Input
                label="Количество человек в группе "
                text="не более 30 человек"
              />
              <Switch
                label="Периодичность тренировки"
                value1="Разовая"
                value2="Постоянная"
              />
              <Subscription onPress={()=>{ navigation.navigate('Week') }} />
              <Card label='Время тренировки' onpress={()=>{navigation.navigate('Time')}} />
              <Card label='Дата тренировки' onpress={()=>{navigation.navigate('Date')}}/>
              <Card label='Адрес тренировки' onpress={()=>{navigation.navigate('Address')}}/>
            </View>
            <Invertory onPress={()=>{navigation.navigate('Invertory')}}/>
            <Invertory text='Инвентарь необходимый атлету' onPress={()=>{navigation.navigate('Invertory')}}/>
            <InputMunlitine label='Дополнительный инвентарь атлета' height={100}/>
            <InputMunlitine label='Описание тренировки' height={200}/>
            <View style={{
                marginHorizontal: '10%',
                marginTop: '5%',
                marginBottom: '5%'
            }}>
                <Text style={{
                    fontSize: 11,
                    fontFamily: 'SFProDisplay-Regular',
                    fontWeight: '600',
                    color: '#242424',
                    marginBottom: '2%'
                }}>Загрузить фото места {'\n'}и процесса проведения тренировки</Text>
                <View style={{
                    width: 86,
                    height: 86,
                    borderRadius: 9,
                    borderWidth: 1,
                    borderColor: '#C8C8C8',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        color: '#dadada',
                        fontSize: 32
                    }}>+</Text>
                </View>
            </View>
          </SafeAreaView>
        )}
        ListFooterComponent={
            <YellowBtn text='Создать тренировку'/>
        }
        ListFooterComponentStyle={
            {
                paddingBottom: '5%',
                backgroundColor: '#fff',
            }
        }
      />
    );
  }
}

export default CreateWorkout;
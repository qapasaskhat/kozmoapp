import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../../../components/Header'
import { YellowBtn } from '../../../components/Button';

const WeekDay = ({label,value})=>(
    <View style={{
        width: '100%',
        height: 50,
        borderRadius: 7,
        backgroundColor: value?'#242424':'#fff',
        marginVertical: 5,
        justifyContent:'center',
        paddingLeft: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    }}>
        <Text style={{
            color:value?'#fff':'#242424'
        }}>{label}</Text>
    </View>
)

class Week extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex: 1,}}>
          <Header label={`Многократные\n тренировки`} />
          <View style={{
              marginHorizontal: '10%',
              marginTop: '5%'
          }}>
              <Text style={{
                  fontSize: 11,
                  fontFamily: 'SFProDisplay-Regular',
                  fontWeight: '600',
                  color: '#242424',
                  marginBottom: '3%'
              }}>Дата начала тренировок</Text>
              <View style={{
                  borderRadius: 45,
                  backgroundColor: '#f3f3f3',
                  height: 50,
                  paddingLeft: 10,
                  justifyContent: 'center',
                  paddingLeft: 20
              }}>
                  <Text>13 июля</Text>
              </View>
              <Text style={{
                  fontSize: 11,
                  fontFamily: 'SFProDisplay-Regular',
                  fontWeight: '600',
                  color: '#242424',
                  marginBottom: '3%',
                  marginTop: '10%'
              }}>Повторение тренировок в</Text>
              <WeekDay label='Понедельник' value/>
              <WeekDay label='Второник' />
              <WeekDay label='Среду' value/>
              <WeekDay label='Четверг' />
              <WeekDay label='Пятницу' value/>
              <WeekDay label='Субботу' />
              <WeekDay label='Воскресенье' />
          </View>
          <View style={{
              position: 'absolute',
              width: '100%',
              bottom: 20
          }}>
              <YellowBtn text='Сохранить' />
          </View>
      </View>
    );
  }
}

export default Week;

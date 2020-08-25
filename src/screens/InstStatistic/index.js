import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Header from '../../components/Header'
import {favorite} from '../../assets/icons'

const Cmpnt = ()=>(
    <View style={{
        marginTop: 30
    }}>
        <Text style={{
            fontSize: 60,
            color: '#040404',
            textAlign: 'center',
            fontWeight: '200',
            fontFamily: 'SFProDisplay-Regular',
        }}>24</Text>
        <Text style={{
            fontSize: 16,
            textAlign: 'center',
            fontWeight: '600',
            color: '#1f1f1f',
            fontFamily: 'SFProDisplay-Regular',
        }}>Всего тренировок проведено</Text>
    </View>
)

class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
          <View style={{
              height: '20%',
              width: '100%',
              backgroundColor: '#FFC531',
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
          }}>
              <Header />
              <Text style={{
                  fontSize: 16,
                  fontFamily: 'SFProDisplay-Regular',
                  fontWeight: '600',
                  color: '#1F1F1F',
                  marginBottom: '8%',
                  marginHorizontal: '10%',
                  marginTop: '5%',
              }}>Моя статистика</Text>
          </View>
          
        <View style={{
            marginHorizontal: '10%',
            marginTop: '5%',
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 16,
                    fontFamily: 'SFProDisplay-Regular',
                    fontWeight: '600',
                    color: '#1F1F1F',
                }}>Мой рейтинг</Text>
                <View style={{
                    backgroundColor: '#181818',
                    justifyContent:'center',
                    width: 77,
                    height: 35, borderRadius:11,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Image source={favorite} style={{
                        width: 12,
                        height: 12,
                        resizeMode: 'contain',
                        tintColor: '#FFF614'
                    }}/>
                    <Text style={{
                        color: '#fff',
                        fontSize: 14,
                        fontWeight: '500',
                    fontFamily: 'SFProDisplay-Regular',
                    marginLeft: 5,
                    }}>9.1</Text>
                </View>
            </View>
            <View style={{
                width: '100%',
                height: 100,
                backgroundColor: '#fff',
                borderRadius: 7,
                marginTop: '8%',
                paddingHorizontal: '10%',
                paddingTop: '5%',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
            }}>
                <Text style={{
                    fontSize: 16,
                    fontFamily: 'SFProDisplay-Regular',
                    fontWeight: '600',
                    color: '#1F1F1F',
                    
                }}>Всего заработано </Text>
                <Text style={{
                    fontSize: 25,
                    color: '#6FC716',
                    marginTop: 10
                }}>3 000 т</Text>
            </View>
            <Cmpnt />
        </View>
      </View>
    );
  }
}

export default Statistics;

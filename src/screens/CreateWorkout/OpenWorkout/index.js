import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import Header from '../../../components/Header';
import Photos from '../../../components/MyPhotos';
import {workout,profile} from '../../../assets/icons';
import {FlatList} from 'react-native-gesture-handler';
import {YellowBtn} from '../../../components/Button';

const UserList = () =>(
    <View style={{
        flexDirection: 'row',
        marginHorizontal: '10%',
        alignItems:'center',
        marginTop: '5%',
        borderBottomColor: '#d4d4d4',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom:'2%'
    }}>
        <View style={{
            width: 40,
            height: 40,
            justifyContent:'center',
            alignItems: 'center',
            borderRadius: 40,
            borderWidth: 1,
            borderColor: '#d4d4d4',
            marginRight: 10,
        }}>
            <Image source={profile} style={{
                width:39,
                height: 39,
                resizeMode: 'contain',
                tintColor: '#d4d4d4',
                borderRadius: 40,
            }} />
        </View>
        <Text style={{
            fontSize: 13,
            color: '#262626',
            fontFamily: 'SFProDisplay-Regular',
        }}>Мирас {'\n'}Каирлеевич</Text>
    </View>
)

class OpenWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <FlatList
        data={[{}]}
        renderItem={() => (
          <View
            style={{
              flex: 1,
            }}>
            <Header />
            <View
              style={{
                marginHorizontal: '10%',
                marginTop: '5%',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'SFProDisplay-Regular',
                  color: '#1F1F1F',
                  fontWeight: '600',
                  marginBottom: '2%',
                }}>
                Велотренировка
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: '#262626',
                  fontFamily: 'SFProDisplay-Regular',
                }}>
                Сегодня
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: '5%',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'SFProDisplay-Regular',
                  }}>
                  08:00
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#6FC716',
                    fontFamily: 'SFProDisplay-Regular',
                  }}>
                  2 000
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  height: 50,
                  borderRadius: 7,
                  backgroundColor: '#fff',
                  marginVertical: 5,
                  justifyContent: 'flex-start',
                  paddingLeft: 20,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.41,

                  elevation: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#242424',
                  }}>
                  {'ул.Габдуллина, д. 132'}
                </Text>
              </View>
              <Text style={styles.title}>Мое снаряжение</Text>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 7,
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.41,

                  elevation: 2,
                  backgroundColor: '#fff',
                }}>
                <Image
                  source={workout}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: 'contain',
                    tintColor: '#000',
                  }}
                />
              </View>
              <Text style={styles.title}>Снаряжение необходимое атлету</Text>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 7,
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.41,

                  elevation: 2,
                  backgroundColor: '#fff',
                }}>
                <Image
                  source={workout}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: 'contain',
                    tintColor: '#000',
                  }}
                />
              </View>

              <Text style={styles.title}>Дополнительное снаряжение</Text>
              <Text style={styles.description}>
                По желанию для дополнительной нагрузки можно использовать
                утяжелители для ног и спины
              </Text>
              <Text style={styles.title}>Описание тренировки</Text>
              <Text style={styles.description}>
                Cycle – идеальная вело-тренировка для всех, кто хочет
                скорректировать вес тела и поработать над кардио и мышечной
                выносливостью. Урок наполнен энергичной музыкой, сменяющейся
                таким образом, что Вы будете заряжаться хорошим настроением на
                протяжении всей тренировки.
              </Text>
            </View>
            <Photos value />
            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: '#d4d4d4',
                marginVertical: '5%',
              }}
            />
            <View style={{
                flexDirection: 'row', 
                justifyContent: 'space-between', 
                alignItems:'center',
                marginHorizontal: '10%'
                }}>
                <Text style={styles.title}>Человек записалось на тренировку</Text>
                <View style={{
                    flexDirection: 'row',
                    alignItems:'center'
                }}>
                    <Text>9/10</Text>
                    <Image source={profile} style={{
                        width: 10,
                        height: 10,
                        resizeMode: 'contain',
                        tintColor: '#242424',
                        marginLeft:6
                    }} />
                </View>
            </View>
            {
                [{},{}].map(()=>{
                    return(
                       <UserList />
                    )
                })
            }
          </View>
        )}
        ListFooterComponent={
          <View>
              <Pressable style={{
                  height:60,
                  marginHorizontal: '7%',
                  borderWidth: 1,
                  borderColor: 'rgba(3, 3, 3, 0.28)',
                  justifyContent:'center',
                  alignItems:'center',
                  borderRadius: 46,
                  marginBottom: 10
              }}>
                  <Text>Список всех атлетов</Text>
              </Pressable>
            <YellowBtn text="Начать тренировку" />
          </View>
        }
        ListFooterComponentStyle={{
          marginBottom: 20,
          marginTop: 10
        }}
      />
    );
  }
}

export default OpenWorkout;
const styles = StyleSheet.create({
  title: {
    fontSize: 11,
    fontFamily: 'SFProDisplay-Regular',
    fontWeight: '600',
    color: '#242424',
    marginTop: '5%',
    marginBottom: '3%',
  },
  description: {
    fontSize: 13,
    color: '#929292',
    fontFamily: 'SFProDisplay-Regular',
    fontWeight: 'normal',
  },
});

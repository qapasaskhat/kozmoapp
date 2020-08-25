import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Header from '../../components/Header';
import InstCategory from '../../components/InstCategory';
import Myphotos from '../../components/MyPhotos';
import {ScrollView, TextInput, FlatList} from 'react-native-gesture-handler';
import Inventary from '../../components/Inventory'
import { YellowBtn, GrayBtn } from '../../components/Button';
import { checkicon } from '../../assets/icons'

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        visible: false
    };
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={{flex: 1, backgroundColor: '#000',}}>
        <ScrollView style={{
          backgroundColor: '#fff',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30
        }}>
          <Header back={()=>{navigation.goBack()}} valueEdit  />
          <View
            style={{
              marginHorizontal: '10%',
              marginTop: '5%',
              flexDirection: 'row',
              justifyContent:'space-between'
            }}>
            <View
              style={{
                width: 86,
                height: 86,
                borderRadius: 9,
                backgroundColor: '#000',
                marginHorizontal: 3,
              }}
            />
            <View
              style={{
                //width: 86,
                height: 46,
                borderRadius: 9,
                backgroundColor: '#fff',
                borderWidth: 1,
                borderColor: '#c8c8c8',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'flex-end',
                paddingHorizontal:10
              }}>
              <Text>Загрузить новое фото</Text>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: '10%',
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
              height: 60,
              borderRadius: 7,
              alignItems: 'center',
              marginTop: '10%',
              paddingLeft: '10%'
            }}>
            <Text>+7 (777) 762 - 72 -92</Text>
          </View>
          <View
            style={{
              marginHorizontal: '10%',
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
              height: 60,
              borderRadius: 7,
              alignItems: 'center',
              marginTop: '5%',
              paddingLeft: '10%'
            }}>
            <Text>Almaty</Text>
          </View>
          <InstCategory add={()=>{
              this.setState({
                  visible: true
              })

          }} />
          <Myphotos />
          <View style={{
              marginHorizontal: '10%',
              marginTop: '5%'
          }}>
              <Text style={{
                     color: '#242424',
                     fontSize: 11,
                     fontWeight: '600',
                     fontFamily: 'SFProDisplay-Regular'
                 }}>Мои достижения</Text>
              <TextInput 
                placeholder='Мои достижения' 
                value='Биография тренера, дополнительная информация. Вы будете заряжаться хорошим настроением на протяжении всей тренировки'
                style={{
                    width: '100%',
                    height: 120,
                    borderWidth: 1,
                    borderRadius: 7,
                    borderColor: '#d5d5d5',
                    paddingHorizontal: 8,
                    fontSize: 13,
                    paddingTop: 10,
                    marginTop: 5,
                    color: '#929292'
                }}
                multiline
                 />
          </View>
          <View style={{
              marginHorizontal: '10%',
              marginTop: '5%'
          }}>
              <Text style={{
                     color: '#242424',
                     fontSize: 11,
                     fontWeight: '600',

                 }}>О себе</Text>
              <TextInput 
                placeholder='О себе' 
                value='Биография тренера, дополнительная информация. Вы будете заряжаться хорошим настроением на протяжении всей тренировки'
                style={{
                    width: '100%',
                    height: 120,
                    borderWidth: 1,
                    borderRadius: 7,
                    borderColor: '#d5d5d5',
                    paddingHorizontal: 8,
                    fontSize: 13,
                    paddingTop: 10,
                    marginTop: 5,
                    color: '#929292'
                }}
                multiline
                 />
          </View>
          <Inventary />
          <View style={{
            marginBottom: '8%'
             }}>
                 <GrayBtn text='Отменить' />
                 <View style={{height: 10}} />
                 <YellowBtn text='Сохранить' icon iconName={checkicon} />
             </View>
        </ScrollView>
      </View>
    );
  }
}

export default EditProfile;

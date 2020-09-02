import React, {Component} from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import Header from '../../components/Header';
import InstCategory from '../../components/InstCategory';
import Myphotos from '../../components/MyPhotos';
import {ScrollView, TextInput, FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Inventary from '../../components/Inventory'
import { YellowBtn, GrayBtn } from '../../components/Button';
import { checkicon } from '../../assets/icons'

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        visible: false,
        user: [],
        coach: {},
        phone: '',
        city: '',
        about: ''
    };
  }
  componentDidMount=()=>{
    this.getUserInformation()
  }
  getUserInformation=()=>{
    var axios = require('axios');
    var config = {
      method: 'get',
      url: 'https://lepapp.com/api/coach/profile',
      headers: { 
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZWY5OWJiYzRmOWZmODQ4NGYyNTFhNWQ2OGM2NzkwODBmYjhlOThiMmU1ODIwYzFkN2E4MjJkNGRiZmE2NWU0NWM5ODVkMDBmNzlkZTQ0ZjMiLCJpYXQiOjE1OTg5MTkwNjIsIm5iZiI6MTU5ODkxOTA2MiwiZXhwIjoxNjMwNDU1MDYyLCJzdWIiOiIxMTkiLCJzY29wZXMiOltdfQ.A1devvhuuzUtr54daEUQmoS4JKfj3-uu8-EtifR-gi6xdsP6ThU2EMPuAGtoewYs1HxSV3Y4Tq05XvHGybAJh265PCERI2_2UWGulLN07qBIwtPLtqE0O5mDZiuWhJzyS-ZXnq6LM8-sBAtxnOVh3XpI_4qRTqUXUD9AHc4QvDx54ohv_V3NpWavWtTcjn3juOlGrFvbII0MPPYIf7bWiHiDY04ln9P3AeugLeYnsS28S31NFxRBb-_hxxIyqhcJRRCufV-DP7BaWpxhysHVT3_44dfxfT_q90CIUCEPtPE7BmQVPyZyC6hOawMhmdt7oi8QxRwMGDDeTlvwnFUCUdA1TbDtlMYthzee_T3xy1hatpUl1LrvZ5ftA8WsjItO8rxIyjv_s9FULUI5KpgKWdV0Tgyvkh4yxzWEBpftfiQgWoaTsNUnw_YF8Oo7ypbEmKSoOE8y9NE2VEmRmPhaxPagyXWgWUkHodms3ieIfg05vwH_eBfvVupzRgXzIXyAMBfCK1z3hXVIh6wGs_-4wY4Nnwg5NmBCvXbjKschldu4aKsy4Cjo0cak9ksDfMoGWCEP-YXYJslP8MjO1FZ4W3sM8zepW2zmpMUPNjBfmnhmJLuRlozVyQEDXuPklgpEXdIVfIeYiM959pus_ZwAspi3OeC2DGnMGRYQ317xMCo'
      }
    };
    
    axios(config)
    .then( (response)=> {
      this.setState({
        user: response.data,
        coach: response.data.coach,
        about: response.data.about
      })
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const { navigation } = this.props
    const {user, coach} = this.state
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#000',}}>
        <ScrollView style={{
          backgroundColor: '#fff',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30
        }}>
          <TouchableOpacity style={{
            position:'absolute',
            top: 20,
            right: 10,
            borderWidth: 1,
            paddingHorizontal: 40,
            paddingVertical: 10,
            borderColor: '#c8c8c8',
            borderRadius: 9,
          }}>
            <Text>Выйти</Text>
          </TouchableOpacity>
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
                backgroundColor: '#fff',
                marginHorizontal: 3,
              }}
            >
              <Image source={{uri: `https://lepapp.com/storage/${user.avatar}`}} style={{width: 86,
                height: 86,
                borderRadius: 9,}}/>
            </View>
            <View
              style={{
                //width: 86,
                height: 46,
                borderRadius: 9,
                backgroundColor: '#fff',
                borderWidth: 1,
                borderColor: '#242424',
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
              marginTop: '5%',
              paddingLeft: '10%'
            }}>
            <Text>{user.city && user.city.name}</Text>
          </View>
          <InstCategory items={coach.training_types} add={()=>{
              this.setState({
                  visible: true
              })

          }} />
          <Myphotos main onPress={()=>{navigation.navigate('Photo')}} />
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
                value={this.state.about}
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
      </SafeAreaView>
    );
  }
}

export default EditProfile;

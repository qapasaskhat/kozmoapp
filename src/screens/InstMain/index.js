import React, {Component} from 'react';
import {SafeAreaView, Text, StyleSheet, Image, Pressable, StatusBar,View} from 'react-native';
import Header from '../../components/Header';
import {basket,velo,kovrik,gantel,next} from '../../assets/icons';
import {FlatList, ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {workout,star} from '../../assets/icons';
import {YellowBtn, GrayBtn} from '../../components/Button';
import InstCategory from '../../components/InstCategory';
import Myphotos from '../../components/MyPhotos';
import Inventary from '../../components/Inventory';
import MoneyCard from '../../components/MoneyCard';
import axios from 'axios'
import CustomCalendar from '../Calendar'
import { connect } from 'react-redux'

class InstMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      coach:{},
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZWY5OWJiYzRmOWZmODQ4NGYyNTFhNWQ2OGM2NzkwODBmYjhlOThiMmU1ODIwYzFkN2E4MjJkNGRiZmE2NWU0NWM5ODVkMDBmNzlkZTQ0ZjMiLCJpYXQiOjE1OTg5MTkwNjIsIm5iZiI6MTU5ODkxOTA2MiwiZXhwIjoxNjMwNDU1MDYyLCJzdWIiOiIxMTkiLCJzY29wZXMiOltdfQ.A1devvhuuzUtr54daEUQmoS4JKfj3-uu8-EtifR-gi6xdsP6ThU2EMPuAGtoewYs1HxSV3Y4Tq05XvHGybAJh265PCERI2_2UWGulLN07qBIwtPLtqE0O5mDZiuWhJzyS-ZXnq6LM8-sBAtxnOVh3XpI_4qRTqUXUD9AHc4QvDx54ohv_V3NpWavWtTcjn3juOlGrFvbII0MPPYIf7bWiHiDY04ln9P3AeugLeYnsS28S31NFxRBb-_hxxIyqhcJRRCufV-DP7BaWpxhysHVT3_44dfxfT_q90CIUCEPtPE7BmQVPyZyC6hOawMhmdt7oi8QxRwMGDDeTlvwnFUCUdA1TbDtlMYthzee_T3xy1hatpUl1LrvZ5ftA8WsjItO8rxIyjv_s9FULUI5KpgKWdV0Tgyvkh4yxzWEBpftfiQgWoaTsNUnw_YF8Oo7ypbEmKSoOE8y9NE2VEmRmPhaxPagyXWgWUkHodms3ieIfg05vwH_eBfvVupzRgXzIXyAMBfCK1z3hXVIh6wGs_-4wY4Nnwg5NmBCvXbjKschldu4aKsy4Cjo0cak9ksDfMoGWCEP-YXYJslP8MjO1FZ4W3sM8zepW2zmpMUPNjBfmnhmJLuRlozVyQEDXuPklgpEXdIVfIeYiM959pus_ZwAspi3OeC2DGnMGRYQ317xMCo'
    };
  }
  componentDidMount=()=>{
    console.warn(this.props.token)
    this.getUserInformation()
    this.getCalendar()
  }
  getUserInformation=()=>{
    var config = {
      method: 'get',
      url: 'https://lepapp.com/api/coach/profile',
      headers: { 
        'Authorization': `Bearer ${this.props.token}`
      }
    };
    
    axios(config)
    .then( (response)=> {
      this.setState({
        user: response.data,
        coach: response.data.coach
      })
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  getCalendar=()=>{
    var config = {
      method: 'get',
      url: 'https://lepapp.com/api/coach/calendars?start_date=2020-09-04&end_date=2020-09-05',
      headers: { 
        'Accept': 'application/json', 
        'Authorization': `Bearer ${this.props.token}`
      }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
      const { navigation } = this.props
      const { user, coach } = this.state
    return (
      <>
      <StatusBar barStyle='light-content' />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#000',
        }}>
        <View style={styles.container}>
          <ScrollView>
            <View>
              <View />
            </View>
            <Header
              edit={() => {
                navigation.navigate('InstEditProfile')
              }}
              right
            />
            <View style={styles.card}>
              <View style={styles.imgAva} >
                <Image source={{uri: `https://lepapp.com/storage/${user.avatar}`}} style={{resizeMode:'cover',width:'100%',height:'100%',borderRadius:9}}/>
              </View>
              <View style={styles.aboutme}>
                <Text style={styles.text}>
                  {user.last_name}{'\n'}{user.name}{'\n'}{user.middle_name}
                </Text>
                <View style={styles.rating}>
                  <Image source={star} style={{
                    width:14,height:14,resizeMode: 'contain',tintColor:'#FFF529'
                  }}/>
                  <Text style={{color: '#fff', fontWeight: 'bold'}}>9.0</Text>
                </View>
              </View>
            </View>
            <InstCategory items={coach.training_types} add={()=>{navigation.navigate('Skills')}}/>
            <MoneyCard balans={user.balance} onPress={()=>{navigation.navigate('Withdraw')}} />
            <TouchableOpacity
            onPress={()=>navigation.navigate('InstStatistic')}
              style={{
                width: '100%',
                height: 80,
                backgroundColor: '#F2F2F2',
                paddingHorizontal: '10%',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  fontStyle: 'normal',
                  color: '#1f1f1f',
                }}>
                Статистика моих тренировок{' '}
              </Text>
            </TouchableOpacity>
            <View style={{marginVertical: '4%'}}>
              <YellowBtn text={`Запросы на тренировку    ${23}`} />
            </View>
            <CustomCalendar day={3} />
            {/* <View style={{height: 15,}} /> */}
            <Myphotos value items={user.media} onPress={()=>navigation.navigate('Photo')} />
            <View
              style={{
                marginHorizontal: '10%',
                marginTop: '0%',
              }}>
              <Text
                style={{
                  color: '#242424',
                  fontSize: 11,
                  fontWeight: '600',
                }}>
                Мои достижения
              </Text>
              <View
                style={{
                  paddingHorizontal: '3%',
                  paddingVertical: '5%',
                  backgroundColor: '#fff',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.15,
                  shadowRadius: 1.84,

                  elevation: 5,
                  borderRadius: 11,
                  marginTop: '3%',
                }}>
                <Text style={{fontSize: 13, color: '#929292'}}>
                  КМС по плаванию на длинные дистанции,5 лет работы
                  фитнес-тренером{' '}
                </Text>
              </View>
            </View>
            <View
              style={{
                marginHorizontal: '10%',
                marginTop: '5%',
              }}>
              <Text
                style={{
                  color: '#242424',
                  fontSize: 11,
                  fontWeight: '600',
                  marginBottom: '3%',
                }}>
                О себе
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: '#929292',
                }}>
                {user.about}
              </Text>
            </View>
            <Inventary items={this.state.invent} onPress={()=>{navigation.navigate('Invertory')}}/>
            <TouchableOpacity
              onPress={()=>{
                navigation.navigate('FAQ')
              }}
              style={{
                width: '100%',
                height: 60,
                borderTopColor: '#D4D4D4',
                borderTopWidth: 1,
                justifyContent: 'center',
                marginTop: '5%',
                paddingHorizontal: '10%',
              }}>
              <Text>
                <Text style={{color: '#c4c4c4', fontWeight: 'bold'}}>
                  ?{'\t'}
                </Text>
                FAQ
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>{ 
                alert('nooo')
                }}
              style={{
                width: '100%',
                height: 60,
                borderTopColor: '#D4D4D4',
                borderTopWidth: 1,
                justifyContent: 'center',
                borderBottomColor: '#D4D4D4',
                borderBottomWidth: 1,
                paddingHorizontal: '10%',
              }}>
              <Text>
                <Text style={{color: '#c4c4c4', fontWeight: 'bold'}}>
                  !{'\t'}
                </Text>
                Пользовательское соглашение
              </Text>
            </TouchableOpacity>
            <View
              style={{
                justifyContent: 'space-between',
                height: 160,
                marginBottom: 70,
              }}>
              <GrayBtn text="Изметь пароль" onPress={()=>{}}/>
              <GrayBtn 
                text="Напишите нам" 
                icon iconName={next}
                onPress={()=>{navigation.navigate('Support')}}/>
              <View style={{height: 10,}}/>
              <YellowBtn text="Создать тренировку" onPress={()=>{navigation.navigate('CreateWorkout')}}/>
              <View style={{height: 10,}}/>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
      </>
    );
  }
}
const mapStateToProps = (state) =>({
  token: state.appReducer.token,
})
export default connect(mapStateToProps) (InstMain);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  card: {
    marginHorizontal: '10%',
    marginTop: '5%',
    flexDirection: 'row',
  },
  imgAva: {
    width: 86,
    height: 86,
    borderRadius: 9,
    backgroundColor: '#fff',
  },
  aboutme: {
    marginLeft: '5%',
  },
  text: {
    fontSize: 16,
    color: '#1F1F1F',
    fontFamily: 'SFProDisplay-Regular',
    fontWeight: '500',
    fontStyle: 'normal',
  },
  rating: {
    width: 54,
    height: 20,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    marginTop: 5,
    flexDirection: 'row'
  },
  interest: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF529',
    marginHorizontal: 20,
  },
  img: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  flatlist: {
    // marginHorizontal: '10%',
    marginVertical: '5%',
    width: '75%',
    //backgroundColor: '#000',
  },
});

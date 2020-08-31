import React, {Component} from 'react';
import {View, Text, StatusBar, SafeAreaView , StyleSheet, Image, Pressable, TouchableOpacity, Alert, ScrollView} from 'react-native';
import Logo from '../../components/Logo'
import { YellowBtn, GrayBtn } from '../../components/Button'
import { TextInput, FlatList } from 'react-native-gesture-handler'
import Modal from 'react-native-modal'
import { basket,warning,checkicon,location_map,search, next } from '../../assets/icons'
import Swiper from 'react-native-swiper'
import CodeInput from 'react-native-confirmation-code-input'
import axios from 'axios'

const array = [
    {
        id: 1,
        name: 'Январь'
    },
    {
        id: 2,
        name: 'Февраль'
    },
    {
        id: 3,
        name: 'Март'
    },
    {
        id: 4,
        name: 'Апрель'
    },
    {
        id: 5,
        name: 'Май'
    },
    {
        id: 6,
        name: 'Июнь'
    },
    {
        id: 7,
        name: 'Июль'
    },
    {
        id: 8,
        name: 'Август'
    },
    {
        id: 9,
        name: 'Сентябрь'
    },
    {
        id: 10,
        name: 'Октябрь'
    },
    {
        id: 11,
        name: 'Ноябрь'
    },
    {
        id: 12,
        name: 'Декабрь'
    },
]

const Header = ({text})=>(
  <View>
      <Logo/>
      <Text style={styles.txtStyle}><Text style={styles.text}>Leap</Text>{'\n'}
          {text}</Text>
  </View>
)

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={[styles.paginationText,{ color: '#ececec' }]}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  )
}
class UserRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
        phone: '',
        cities: [],
        city_selection: false,
        city: '',
        password: {
            value: '',
            confirmation :''
        },
        user:{
            name: '',
            surname: '',
            patronymic: ''
        },
        date:{
            day: null,
            month: null,
            year: null
        },
        gender: 'M',
        trainingType: [],
        visible: false
    };
  }
  componentDidMount=()=>{
    console.warn(this.props.navigation.getParam('phone'))
    this.setState({
        phone: this.props.navigation.getParam('phone')
    })
    this.getCities()
    this.getTraningTypes()
  }
  getCities=()=>{
    var config = {
        method: 'get',
        url: 'https://lepapp.com/api/cities',
        headers: { }
      };
      
      axios(config)
      .then( (response) => {
        this.setState({
            cities: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });
}
getTraningTypes=()=>{
    var config = {
        method: 'get',
        url: 'https://lepapp.com/api/training-types',
        headers: { }
      };
      
      axios(config)
      .then( (response) => {
          this.setState({
              trainingType: response.data.map(i=>
                i.id === i.id ?
                {...i,selected: false}:
                i)
          })
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
}
_start=()=>{
    const {user,phone, password,date,city, gender} = this.state
    var FormData = require('form-data');
    var data = new FormData();
    data.append('name', user.name);
    data.append('last_name', user.surname);
    data.append('middle_name', user.patronymic);
    data.append('password', password.value);
    data.append('password_confirmation', password.confirmation);
    data.append('phone', phone);
    data.append('city_id', '4');
    data.append('gender', gender);
    data.append('birthday', `${date.day}-06-${date.year}`);
    data.append('training_types[]', '2');

    var config = {
    method: 'post',
    url: 'https://lepapp.com/api/register/athlete',
    headers: { 
        'Accept': 'application/json', 
    },
    data : data
    };

    axios(config)
    .then( (response)=> {
        this.changeIndex()
        console.log(JSON.stringify(response.data));
    })
    .catch( (error)=> {
    console.log(error);
    });
}
  changeIndex=()=>{
    this.refs.swiper.scrollBy(1)
}
 CreatePassword = ({onpress})=>(
    <View style={styles.container}>
        <Header text='СОЗДАНИЕ ПАРОЛЯ' />
        <View style={{
            marginTop:'35%'
        }}>
        <TextInput 
            placeholder='Пароль '
            placeholderTextColor='#000'
            textAlign='center'
            value={this.state.password.value}
            onChangeText={(text)=>{
                this.setState({
                    password: {
                        ...this.state.password,
                        value: text
                    }
                })
            }}
            style={{
                borderBottomColor:'#D0D0D0',
                borderBottomWidth: 1,
                fontSize: 16,
                paddingBottom: '2%',
                marginVertical:'8%'
            }}
        />
        <TextInput 
            placeholder='Повторить пароль'
            placeholderTextColor='#000'
            value={this.state.password.confirmation}
            onChangeText={(text)=>{
                this.setState({
                    password: {
                        ...this.state.password,
                        confirmation: text
                    }
                })
            }}
            textAlign='center'
            style={{
                borderBottomColor:'#D0D0D0',
                borderBottomWidth: 1,
                fontSize: 16,
                paddingBottom: '2%'
            }}
        />
        </View>
        <View style={{
            position: 'absolute',
            width: '100%',
            bottom: '10%'
        }}>
        <YellowBtn text='Далее' onPress={onpress} icon iconName={next} />
        </View>
    </View>
  )
   City = ({onpress})=>(
    <View style={styles.container}>
        <Header text='ВЫБОР ГОРОДА' />
        { this.state.city_selection===false ? <View>
        <View style={{
              width: 140,
              height: 140,
              borderWidth: 1,
              borderRadius: 100,
              alignSelf:'center',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '20%',
              borderColor: '#CFF2AC'
          }}>
              <Image source={location_map} style={{width:64,height:64,resizeMode:'contain'}} />
          </View>
          <Text style={{
              fontSize: 15,
              color: '#595959',
              textAlign: 'center'
          }}>Ваш город</Text>
          <Text style={{
              fontSize: 20,
              color: '#6FC716',
              textAlign: 'center'
          }}>Алматы ?</Text>
          <TouchableOpacity onPress={()=>{
              this.setState({
                  city_selection: true
              })
          }}>
          <Text style={{
              fontSize: 15,
              textAlign: 'center',
              marginTop: '10%'
          }}>Выбрать город</Text>
          </TouchableOpacity>
          </View>:
          <View>
          <View style={{
              flexDirection: 'row',
              backgroundColor: '#F3F3F3',
              marginHorizontal: '8%',
              height: 50,
              borderRadius: 45,
              alignItems: 'center',
              justifyContent:'space-between',
              paddingHorizontal: 20,
              marginTop: '5%'
          }}>
              <TextInput placeholder='Almaty' />
              <Image source={search} style={{width:24,height: 24, resizeMode: 'center', tintColor:'#cacaca'}} />
          </View>
          <View style={{
              backgroundColor: '#fff',
              marginHorizontal: '10%',
              height: 350,
              shadowColor: "#000",
              shadowOffset: {
                  width: 0,
                  height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              marginTop: '5%',
              borderRadius: 11
          }}>
              <ScrollView>
              {
                  this.state.cities.map(item=>(
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        justifyContent:'space-between',
                        paddingHorizontal: 20,
                        paddingVertical:10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#dadada'
                    }}>
                        <Text style={{
                            fontSize: 15,
                            fontWeight: '600',
                        }}>{item.name}</Text>
                        <Image source={checkicon} style={{width: 20, height: 20, resizeMode:'contain', tintColor:'#6FC716'}} />
                    </TouchableOpacity>
                  ))
              }
             </ScrollView>
          </View>
          </View>}
        <View style={{
            position: 'absolute',
            bottom: '10%',
            width: '100%'
        }}>
            <YellowBtn text='Подтвердить' onPress={onpress} icon iconName={next}/>
        </View>
    </View>
  )
   PersonalName = ({onpress})=>(
    <View style={[styles.container,{backgroundColor: '#fff'}]}>
        <Header text='ЛИЧНЫЕ ДАННЫЕ'/>
        <View style={{
            marginTop: '20%'
        }}>
        <TextInput 
            placeholder='Фамилия '
            placeholderTextColor='#000'
            value={this.state.user.surname}
            onChangeText={(text)=>{
                this.setState({
                    user:{
                        ...this.state.user,
                        surname: text
                    }
                })
            }}
            textAlign='center'
            style={{
                borderBottomColor:'#D0D0D0',
                borderBottomWidth: 1,
                fontSize: 16,
                paddingBottom: '2%',
                marginVertical:'6%'
            }}
        />
        <TextInput 
            placeholder='Имя '
            placeholderTextColor='#000'
            value={this.state.user.name}
            onChangeText={(text)=>{
                this.setState({
                    user:{
                        ...this.state.user,
                        name: text
                    }
                })
            }}
            textAlign='center'
            style={{
                borderBottomColor:'#D0D0D0',
                borderBottomWidth: 1,
                fontSize: 16,
                paddingBottom: '2%',
                marginVertical:'6%'
            }}
        />
        <TextInput 
            placeholder='Отчество '
            placeholderTextColor='#000'
            value={this.state.user.patronymic}
            onChangeText={(text)=>{
                this.setState({
                    user:{
                        ...this.state.user,
                        patronymic: text
                    }
                })
            }}
            textAlign='center'
            style={{
                borderBottomColor:'#D0D0D0',
                borderBottomWidth: 1,
                fontSize: 16,
                paddingBottom: '2%',
                marginVertical:'6%'
            }}
        />
        </View>
        <View style={{
            position: 'absolute',
            bottom: '10%',
            width: '100%'
        }}>
            <YellowBtn text='Далее' onPress={onpress} icon iconName={next}/>
        </View>
    </View>
  )
   PersonalDate = ({changeMounth,visible,onpress})=>(
    <View style={{flex: 1}}>
        <Header text='ЛИЧНЫЕ ДАННЫЕ' />
        <Text style={{
            marginLeft: '10%',
            fontSize: 14,
            color: '#585858',
            fontWeight: '600',
            marginTop: '40%'
        }}>Дата рождения</Text>
        <View style={{
            marginHorizontal: '10%',
            backgroundColor: '#fff',
            height: 60,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            borderRadius: 11,
            marginTop: '5%',
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center'
        }}>
            <View style={{
                  height: 60,
                  justifyContent:'center',
                  borderRightWidth: 1,
                  width:'30%',
                  borderRightColor: '#dadada',
                  alignItems:'center'
              }}>
                  <TextInput 
                      style={styles.txt} 
                      placeholder='День'
                      value={this.state.date.day}
                      onChangeText={(text)=>{
                          this.setState({
                              date:
                              {...this.state.date,
                              day: text}
                          })
                      }}
                      maxLength={2}
                      keyboardType='number-pad'
                      placeholderTextColor='#000' />
              </View>
              <TouchableOpacity 
                  onPress={changeMounth}
                  style={{
                      height: 60,
                      justifyContent:'center',
                      borderRightWidth: 1,
                      borderRightColor: '#dadada',
                      width:'30%',
                      alignItems:'center'
                  }}>
                  <Text style={styles.txt}>{
                        this.state.date.month ? this.state.date.month : 'Месяц'
                    }</Text>
              </TouchableOpacity>
              <View style={{
                  height: 60,
                  justifyContent:'center',
                  borderRightWidth: 0,
                  width:'30%',
                  alignItems:'center'
              }}>
                  <TextInput 
                      style={styles.txt} 
                      maxLength={4}
                      placeholder='Год' 
                      value={this.state.date.year}
                      onChangeText={(text)=>{
                          this.setState({
                              date:
                             { ...this.state.date,
                              year: text}
                          })
                      }}
                      keyboardType='number-pad'
                      placeholderTextColor='#000' />
              </View>
        </View>
        <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop: '10%',
            height: '8%',
            marginHorizontal: '10%'
        }}>
            <Pressable onPress={()=>{
                this.setState({
                    gender: 'M'
                })
            }} style={{
                width:'44%',
                height:50,
                backgroundColor: this.state.gender==='M'? '#000':'#fff',
                borderRadius: 11,
                justifyContent:'center',
                alignItems:'center',
                shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            }}>
                <Text style={{color: this.state.gender==='M'? '#fff':'#000'}}>Мужчина</Text></Pressable>
            <Pressable onPress={()=>{
                this.setState({
                    gender: 'F'
                })
            }} style={{
                width:'44%',
                height:50,
                backgroundColor: this.state.gender === 'M'? '#fff': '#000',
                borderRadius: 11,
                justifyContent:'center',
                alignItems:'center',
                shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            }}>
                <Text style={{color: this.state.gender === 'M'? '#000':'#FFF'}}>Женщина</Text></Pressable>
        </View>
        <Modal isVisible={visible}
           style={{
              backgroundColor: 'transparent',
          }}>
              <View style={{
                  backgroundColor: '#fff',
                  height: '50%',
                  borderRadius: 11
              }}>
                  {
                      array.map(item=>(
                        <TouchableOpacity 
                        onPress={()=>
                            {this.setState({
                                visible: false})
                                array.map(i=> {if(i.id===item.id){
                                    this.setState({
                                        date: {
                                            ...this.state.date,
                                            month: i.name
                                        }
                                    })
                                } })}
                            }
                         style={{
                            borderBottomWidth: 1,
                            borderBottomColor: '#dadada',
                            paddingVertical: 10
                        }}>
                            <Text style={{textAlign: 'center'}}>{item.name}</Text>
                        </TouchableOpacity>
                      ))
                  }
                  
              </View>
          </Modal>
        <View style={{
            position: 'absolute',
            bottom: '10%',
            width: '100%'
        }}>
            <YellowBtn text='Далее' onPress={onpress} icon iconName={next}/>
        </View>
    </View>
  )
   Skils= ({onPress,onpress})=>(
    <View style={styles.container}>
        <Header text='МОИ ИНТЕРЕСЫ' />
        <View style={{
            height: '60%'
        }}>
        <FlatList 
            data={this.state.trainingType}
            style={{
                marginHorizontal: '10%',
                marginTop: '10%',
            }}
            numColumns={4}
            renderItem={({item})=>(
                <TouchableOpacity 
                onPress={()=>{
                    this.setState({
                        trainingType: this.state.trainingType.map(i=>
                            i.id === item.id ?
                            {...i,selected: !item.selected}:
                            i)
                    })
                }}
                 style={{
                    alignItems:'center',
                    marginVertical: '4%'
                }}>
                    <View style={{
                        width:54,
                        height:54,
                        borderRadius: 30,
                        backgroundColor: '#F2F2F2',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical: '4%',
                        marginHorizontal: '4%',
                        borderWidth: item.selected? 4: 0,
                        borderColor: '#FFF529'
                    }}>
                        <Image source={{uri: item.icon}} style={{width:26, height: 26}} />
                    </View>
                    <Text>{item.title}</Text>
                </TouchableOpacity>
            )}
         />
         </View>
         <View style={{
             position: 'absolute',
             width: '100%',
             bottom: '10%'
         }}>
            <YellowBtn text='Начать тренировки' onPress={onPress} icon iconName={next} />
         </View>
    </View>
  )
   CodeInputSlider = ({onpress})=>(//ПОДТВЕРЖДЕНИЕ
      <View style={styles.container}>
          <Header text='ПОДТВЕРЖДЕНИЕ'/>
          <View style={{flex:0.7,justifyContent:'center', alignItems: 'center'}}>
              <View style={{
                  height: 60, backgroundColor: '#fff',
              }}>
              <CodeInput 
                  activeColor='rgba(0, 0, 0, 1)'
                  inactiveColor='rgba(0, 0, 0, 1)'
                  autoFocus={false}
                  ignoreCase={true}
                  codeLength={4}
                  className={'border-b'}
                  inputPosition='center'
                  size={40}
                  onFulfill={(isValid) => this._onFinishCheckingCode1(isValid)}
                  //containerStyle={{ marginTop: 30 }}
                 // codeInputStyle={{ borderWidth: 1 }}
               />
               </View>
              <TouchableOpacity
              onPress={()=>{
                this.props.navigation.navigate('ResetPassword')
              }}
              style={{
                borderWidth: 1,
                borderRadius: 46,
                alignSelf: 'center',
                paddingVertical: 5,
                borderColor: 'rgba(3, 3, 3, 0.28)',
                margin: '5%',
                width: '80%',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 12,}}>Отправить заново</Text>
            </TouchableOpacity>
          </View>
          <YellowBtn text='Завершить регистрацию' icon iconName={next} onPress={onpress}/>
      </View>
  )
  Allert=(text)=>{
    Alert.alert(
        "Ошибка",
        text,
        [
          { text: "OK", onPress: () => console.log("OK Pressed"),style: "cancel" }
        ],
        { cancelable: false }
      );
}
  render() {
    return (
      <>
        <StatusBar />
        <SafeAreaView style={{flex: 1}}>
        <Swiper    
            renderPagination={renderPagination} 
            ref='swiper'
            loop={false} >
            <this.CreatePassword 
                onpress={()=>{
                    if(this.state.password.value.length > 7 && this.state.password.confirmation > 7 && this.state.password.confirmation === this.state.password.value)
                        this.changeIndex()
                    else{
                        this.Allert('Введите пароль')
                    }
                    }} />
            <this.City onpress={()=>{this.changeIndex()}}/>
            <this.PersonalName 
                onpress={()=>{
                    if(this.state.user.name.length > 3 && this.state.user.surname.length>3 )
                            {this.changeIndex()}
                        else{
                            this.Allert('Введите данные')
                        }
                    }}/>
            <this.PersonalDate 
            visible={this.state.visible}
            changeMounth={()=>{
                this.setState({
                    visible: true
                })
            }}
            onpress={()=>{
                if(this.state.date.day > 0 )
                this.changeIndex()
                else{
                    this.Allert('Выберите дату рождение')
                }
                }}/>
            <this.Skils onPress={()=>{this._start()}} />
            <this.CodeInputSlider onpress={()=>{this.props.navigation.navigate('FirstBalans')}} />
        </Swiper>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  txtStyle:{
    fontSize: 25,
    color: '#D0D0D0',
    fontWeight: '800',
    marginLeft: '10%',
    marginTop: '5%',
    fontFamily: 'SFProDisplay-Bold',
    textTransform:'uppercase',
    lineHeight: 27
},
text:{
    color: '#1c1c1c',
    fontFamily: 'SFProDisplay-Bold'
},
container:{
  flex: 1,
  backgroundColor: '#fff'
},
paginationStyle: {
  position: 'absolute',
  bottom: '5%',
  left: '10%'
},
paginationText: {
  color: '#585858',
  fontSize: 25
}
})

export default UserRegister;

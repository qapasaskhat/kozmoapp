import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Image,
    TouchableOpacity,
    Alert,
    ScrollView
} from 'react-native'
import Swiper from 'react-native-swiper'
import CodeInput from 'react-native-confirmation-code-input'
import Logo from '../../components/Logo'
import { YellowBtn, GrayBtn } from '../../components/Button'
import { TextInput, FlatList } from 'react-native-gesture-handler'
import Modal from 'react-native-modal'
import { basket,warning,checkicon,next,pasport,camera,selfi,profile_icon, location_map, search, velo } from '../../assets/icons'
import Geolocation from '@react-native-community/geolocation';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios'
import { apiUri } from '../../api'

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

const options = {
    title: 'Select Photo',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

const Header = ({text})=>(
    <View>
        <Logo/>
        <Text style={styles.txtStyle}><Text style={styles.text}>Leap</Text>{'\n'}
            {text}</Text>
    </View>
)
Check = ({text,onpressCheck})=>(
    <View>
                <View style={{
                width: 140,
                height: 140,
                borderWidth: 1,
                borderRadius: 100,
                alignSelf:'center',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '30%',
                borderColor: '#CFF2AC'
            }}>
                <Image source={checkicon} style={{width:64,height:64,resizeMode:'contain',tintColor: '#6FC716'}} />
            </View>
            <Text style={{
                fontSize: 17,
                color: '#595959',
                fontFamily: 'SFProDisplay-Bold',
                fontWeight: '600',
                textAlign: 'center',
                marginTop: '10%',
                marginBottom: '10%'
            }}>{text}</Text>
            <YellowBtn text='Далее' onPress={onpressCheck} />
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
class RegistrationSlider extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            visible:false,
            index: 0,
            newIndex: 0,
            value: false,
            agree: false,
            password: {
                value: '',
                confirmation: ''
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
            email: null,
            photoSelfi: {
                uri: null,
                check: false
            },
            photoUds: {
                uri: null,
                check: false
            },
            avatar: {
                uri: null,
                check: false
            },
            photo: [],
            about: '',
            check:false,
            cities: [],
            city: '',
            city_selection: false,
            trainingType: []
        }
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
    changeIndex=(id)=>{
        this.refs.swiper.scrollBy(1)
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
    componentDidMount=()=>{
        console.warn(this.props.navigation.getParam('phone'))
        this.setState({
            phone: this.props.navigation.getParam('phone')
        })
        Geolocation.getCurrentPosition((info) => {
            console.log(info);
          });
        this.getCities()
        this.getTraningTypes()
    }
    takePhotoPasport=()=>{
        ImagePicker.launchImageLibrary(options,(response)=>{
            console.log('takePhotoPasport', response.uri)
            if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
              } else {
                const source = { uri: response.uri };
                this.setState({
                    photoUds:{
                        uri: response.uri,
                        check: true
                    },
                })
              }
        })
    }
    shotPhotoPassport=()=>{
        ImagePicker.launchCamera(options,(response)=>{
            console.log('shotPhotoPassport', response.uri)
            if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
              } else {
                const source = { uri: response.uri };
                this.setState({
                    photoUds:{
                        uri: response.uri,
                        check: true
                    },
                })
              }
        })
    }
    takePhotoSelfi=()=>{
        ImagePicker.launchImageLibrary(options,(response)=>{
            console.log('takePhotoPasport', response.uri)
            if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
              } else {
                const source = { uri: response.uri };
                this.setState({
                    photoSelfi:{
                        uri: response.uri,
                        check: true
                    },
                })
              }
        })
    }
    shotPhotoSelfi=()=>{
        ImagePicker.launchCamera(options,(response)=>{
            console.log('shotPhotoPassport', response.uri)
            if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
              } else {
                const source = { uri: response.uri };
                this.setState({
                    photoSelfi:{
                        uri: response.uri,
                        check: true
                    },
                })
              }
        })
    }
    takePhoto=()=>{
        ImagePicker.launchImageLibrary(options,(response)=>{
            console.log('takePhotoPasport', response.uri)
            if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
              } else {
                const source = { uri: response.uri };
                let arr = this.state.photo
                let obj = {
                    uri: response.uri
                }
                arr.push(obj)
                this.setState({
                    photo: arr
                })
              }
        })
    }
    shotPhoto=()=>{
        ImagePicker.launchCamera(options,(response)=>{
            console.log('shotPhotoPassport', response.uri)
            if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
              } else {
                const source = { uri: response.uri };
                let arr = this.state.photo
                let obj = {
                    uri: response.uri
                }
                arr.push(obj)
                this.setState({
                    photo: arr
                })
              }
        })
    }
    takeAvatar=()=>{
        ImagePicker.launchImageLibrary(options,(response)=>{
            console.log('takePhotoPasport', response.uri)
            if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
              } else {
                const source = { uri: response.uri };
                this.setState({
                    avatar: {
                        uri: response.uri,
                        check: true
                    }
                })
              }
        })
    }
    shotAvatar=()=>{

        ImagePicker.launchCamera(options,(response)=>{
            console.log('shotPhotoPassport', response.uri)
            if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
              } else {
                const source = { uri: response.uri };
                this.setState({
                    avatar: {
                        uri: response.uri,
                        check: true
                    }
                })
              }
        })
    }

     Email = ({onpress})=>(//Привязать EMAIL
        <View style={styles.container}>
            <Header text='Привязать EMAIL' />
            <View style={{
                flex: 0.7,
                justifyContent:'center',
                
            }}>
            <TextInput 
                placeholder='Введите Email'
                placeholderTextColor='#000'
                textAlign='center'
                value={this.state.email}
                onChangeText={(text)=>{
                    this.setState({
                        email: text
                    })
                }}
                style={{
                    borderBottomColor:'#D0D0D0',
                    borderBottomWidth: 1,
                    fontSize: 16,
                    paddingBottom: '2%',
                }}
            />
            </View>
            
            <View style={{
                position:'absolute',
                width:'100%',
                bottom: '10%'
            }}>
                <YellowBtn onPress={onpress} text='Далее'/>
            </View>
        </View>
    )
     Slide2=({onpress,refuse})=>(//ПРЕДУПРЕЖДЕНИЕ
        <View style={styles.container}>
            <Header text='ПРЕДУПРЕЖДЕНИЕ'/>
            <View style={{
                justifyContent:'center',
                alignItems:'center',
                flex:0.5
            }}>
                <View style={{
                    width: 140,
                    height: 140,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: '#FFF614',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Image source={warning} style={{
                        width: 64,
                        height: 64,
                        resizeMode: 'contain'
                    }} />
                </View>
                <Text style={{
                    fontSize:17,
                    fontWeight: '500',
                    fontFamily: 'SFProDisplay-Regular',
                    textAlign:'center',
                    color: '#595959',
                    marginTop: 20
                    }}>Предупреждение {'\n'}???</Text>
    
            </View>
            <View style={{
                position: 'absolute',
                bottom: '10%',
                width: '100%'
            }}>
                <YellowBtn text='Согласиться' icon iconName={checkicon} onPress={onpress}/>
                <GrayBtn onPress={refuse} text='Отказаться' />
            </View>
        </View>
    )
     Slide3 = ({onpress})=>(//СОЗДАНИЕ ПАРОЛЯ
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
                        password:{
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
                textAlign='center'
                value={this.state.password.confirmation}
                onChangeText={(text)=>{
                    this.setState({
                        password:{
                            ...this.state.password,
                            confirmation: text
                        }
                    })
                }}
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
            <YellowBtn text='Далее' onPress={onpress} icon iconName ={next}/>
            </View>
        </View>
    )
     Slide4 = ({onpress})=>(//ВЫБОР ГОРОДА
        <View style={styles.container}>
            <Header text='ВЫБОР ГОРОДА' />
            { this.state.city_selection === false ? <View>
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
</View>
:
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
                height: 400,
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
                <ScrollView>{
                this.state.cities.map(item=>(
                    <TouchableOpacity onPress={()=>{}} style={{
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
            }</ScrollView>
            </View>
            </View>}
            <View style={{
                position: 'absolute',
                bottom: '10%',
                width: '100%'
            }}>
                <YellowBtn text='Подтвердить' onPress={onpress} icon iconName ={next}/>
            </View>
        </View>
    )
     Slide5 = ({onpress})=>( //ЛИЧНЫЕ ДАННЫЕ
        <View style={[styles.container,{backgroundColor: '#fff'}]}>
            <Header text='ЛИЧНЫЕ ДАННЫЕ'/>
            <View style={{
                marginTop: '25%'
            }}>
            <TextInput 
                placeholder='Фамилия '
                placeholderTextColor='#000'
                textAlign='center'
                value={this.state.user.surname}
                onChangeText={(text)=>{
                    this.setState({
                        user:{
                            ...this.state.user,
                            surname: text
                        }
                    })
                }}
                style={{
                    borderBottomColor:'#D0D0D0',
                    borderBottomWidth: 1,
                    fontSize: 16,
                    paddingBottom: '2%',
                    marginVertical:'5%'
                }}
            />
            <TextInput 
                placeholder='Имя '
                placeholderTextColor='#000'
                textAlign='center'
                value={this.state.user.name}
                onChangeText={(text)=>{
                    this.setState({
                        user:{
                            ...this.state.user,
                            name: text
                        }
                    })
                }}
                style={{
                    borderBottomColor:'#D0D0D0',
                    borderBottomWidth: 1,
                    fontSize: 16,
                    paddingBottom: '2%',
                    marginVertical:'5%'
                }}
            />
            <TextInput 
                placeholder='Отчество '
                placeholderTextColor='#000'
                textAlign='center'
                value={this.state.user.patronymic}
                onChangeText={(text)=>{
                    this.setState({
                        user:{
                            ...this.state.user,
                            patronymic: text
                        }
                    })
                }}
                style={{
                    borderBottomColor:'#D0D0D0',
                    borderBottomWidth: 1,
                    fontSize: 16,
                    paddingBottom: '2%',
                    marginVertical:'5%'
                }}
            />
            </View>
            <View style={{
                position: 'absolute',
                bottom: '10%',
                width: '100%'
            }}>
                <YellowBtn text='Далее' onPress={onpress} icon iconName ={next}/>
            </View>
        </View>
    )
     Slide6 = ({changeMounth,visible,onpress})=>(//ЛИЧНЫЕ ДАННЫЕ
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
                                date:{
                                    ...this.state.date,
                                    day: text
                                }
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
                                date:{
                                    ...this.state.date,
                                    year: text
                                }
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
                <Pressable 
                onPress={()=>{
                    this.setState({
                        gender: 'M'
                    })
                }} style={{
                    width:'44%',
                    height:'100%',
                    backgroundColor: this.state.gender === 'M'? '#000' :'#fff',
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
                height:50
                }}>
                    <Text style={{color: this.state.gender === 'M'? '#fff':'#000'}}>Мужчина</Text></Pressable>
                <Pressable 
                onPress={()=>{
                    this.setState({
                        gender: 'F'
                    })
                }} style={{
                    width:'44%',
                    height:'100%',
                    backgroundColor: this.state.gender === 'F'? '#000' :'#fff',
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
                height:50,
                elevation: 5,
                }}>
                    <Text style={{color: this.state.gender === 'F'? '#fff':'#000'}}>Женщина</Text></Pressable>
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
                            <TouchableOpacity onPress={()=>{
                                this.setState({
                                    visible: false
                                })
                                array.map(i=> {if(i.id===item.id){
                                    this.setState({
                                        date: {
                                            ...this.state.date,
                                            month: i.name
                                        }
                                    })
                                } })
                            }} style={{
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
                <YellowBtn text='Далее' onPress={onpress} icon iconName ={next}/>
            </View>
        </View>
    )
     Slider7= ({onpress})=>(//МОИ Навыки
        <View style={styles.container}>
            <Header text='МОИ Навыки' />
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
                keyExtractor={(item) => item.id}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>{
                        this.setState({
                            trainingType: this.state.trainingType.map(i=>
                                i.id === item.id ?
                                {...i,selected: !item.selected}:
                                i)
                        })
                    }} style={{
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
                            borderColor: '#FFF529',
                            borderWidth: item.selected?4:0
                        }}>
                            <Image source={{uri: item.icon}} style={{width:26, height: 26, resizeMode: 'contain'}} />
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
                <YellowBtn text='Далее' onPress={onpress} icon iconName ={next} />
             </View>
        </View>
    )
     
     Slider8= ({onpress,check,takePhotoPasport,shotPhotoPassport})=>(//УДОСТОВЕРЕНИЕ
        <View style={styles.container}>
            <Header text='УДОСТОВЕРЕНИЕ' />
            {check?
            <Check text={`Фото вашего удостоверения \nуспешно загружено`} onpressCheck={onpress} />
    
    :            <View>
            <View style={{
                width: 140,
                height: 140,
                borderWidth: 1,
                borderRadius: 100,
                alignSelf:'center',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20%',
                borderColor: '#FFF614'
            }}>
                <Image source={pasport} style={{width:64,height:64,resizeMode:'contain'}} />
            </View>
            <Text style={{
                fontSize: 17,
                color: '#595959',
                fontFamily: 'SFProDisplay-Bold',
                fontWeight: '600',
                textAlign: 'center',
                marginTop: '10%'
            }}>Сфотографируйте{'\n'}
            удостоверение личности</Text>
            <View style={{
                 //position: 'absolute',
                 width: '100%',
                 //bottom: '10%',
                 flexDirection: 'row',
                 height:60,
                 alignItems:'center',
                 marginTop: 10
             }}>
                 <View style={{
                     width: '75%',
                 }}>
                    <YellowBtn text='Загрузить фото' onPress={takePhotoPasport} />
                 </View>
                <TouchableOpacity onPress={shotPhotoPassport} style={{
                    borderRadius: 100,
                    backgroundColor: '#FFF529',
                    width:50,
                    height: 50,
                    justifyContent:'center',
                    alignItems: 'center'
                }}>
                    <Image source={camera} style={{width:24,height:24,resizeMode:'contain'}}/>
                </TouchableOpacity>
             </View>
             </View>}
        </View>
    )
     Slider9= ({onpress,check,onpressCheck,takePhotoSelfi,shotPhotoSelfi})=>(//СЕЛФИ
        <View style={styles.container}>
            <Header text='СЕЛФИ' />
            { check? 
            <Check text={`Фото вашего селфи \nс удостоверением \nуспешно загружено`} onpressCheck={onpressCheck} />
            :<View>
            <View style={{
                width: 140,
                height: 140,
                borderWidth: 1,
                borderRadius: 100,
                alignSelf:'center',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20%',
                borderColor: '#FFF614'
            }}>
                <Image source={selfi} style={{
                    width: 64,
                    height: 64,
                    resizeMode: 'contain',
                    marginRight:-10
                }}/>
            </View>
            <Text style={{
                fontSize: 17,
                color: '#595959',
                fontFamily: 'SFProDisplay-Bold',
                fontWeight: '600',
                textAlign: 'center',
                marginTop: '10%',
                marginBottom: '10%'
            }}>Сделайте селфи {'\n'}
            с удостоверением личности</Text>
            <View style={{
                // position: 'absolute',
                 width: '100%',
                 //bottom: '10%',
                 flexDirection: 'row',
             }}>
                 <View style={{
                     width: '75%',
                 }}>
                    <YellowBtn text='Загрузить фото' onPress={takePhotoSelfi} />
                 </View>
                <TouchableOpacity onPress={shotPhotoSelfi} style={{
                    borderRadius: 100,
                    backgroundColor: '#FFF614',
                    width:50,
                    height: 50,
                    justifyContent:'center',
                    alignItems: 'center',
                }}>
                    <Image source={camera} style={{width:20,height:20,resizeMode:'contain'}}/>
                </TouchableOpacity>
             </View>
             </View>}
        </View>
    )
     Slider10= ({onpress})=>(//О СЕБЕ
        <View style={styles.container}>
            <Header text='О СЕБЕ' />
            <Text style={{
                marginLeft: '10%',
                marginTop: '5%',
                fontSize: 16,
                lineHeight: 18,
                color: '#585858',
                fontFamily: 'SFProDisplay-Bold',
            }}>Расскажите {'\n'}
            о себе и своем опыте</Text>
            <TextInput 
                placeholder='text'
                multiline
                value={this.state.about}
                onChangeText={(text)=>{
                    this.setState({
                        about: text
                    })
                }}
                style={{
                    margin: '10%',
                    borderWidth: 1,
                    borderRadius: 11,
                    borderColor: '#D5D5D5',
                    height: '40%',
                    padding: '5%'
                }}
                 />
                 <View style={{
                 position: 'absolute',
                 width: '100%',
                 bottom: '10%'
             }}>
                <YellowBtn text='Далее' onPress={onpress} icon iconName ={next}/>
             </View>
        </View>
    )
     Slider11= ({onpress,onpressNext, takePhoto, shotPhoto, sendPhoto})=>(//СЕРТИФИКАТЫ
        <View style={styles.container}>
            <Header text='СЕРТИФИКАТЫ' />
            <Text style={{
                marginLeft: '10%',
                marginTop: '5%',
                fontSize: 16,
                lineHeight: 18,
                color: '#585858',
                fontFamily: 'SFProDisplay-Bold',
            }}>
                Загрузите свои{'\n'}профессиональные сертификаты </Text>
                {
                    this.state.photo.map(item=>(
                        <View style={{
                            flexDirection:'row', 
                            marginHorizontal: '10%', 
                            marginTop: '5%',
                            justifyContent: 'space-between',
                            height: '8%',
                            alignItems: 'center'
                            }} >
                            <View style={{
                                width: '80%',
                                height: '100%',
                                backgroundColor: '#fff',
                                borderRadius: 9,
                                borderWidth: 1,
                                borderColor: '#D6D6D6'
                            }}>
                                <Image source={{uri: item.uri}} style={{
                                    height: '100%',
                                    width: '100%',
                                    resizeMode: 'cover'
                                }} />
                            </View>
                            <TouchableOpacity onPress={()=>{
                                this.setState({
                                    photo: this.state.photo.filter(i=>i.uri!==item.uri)
                                })
                            }} style={{
                                width: 34,
                                height: 34,
                                borderRadius: 20,
                                backgroundColor: '#fff',
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
            
                                elevation: 5,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }} >
                                <Text>del</Text>
                            </TouchableOpacity>
                        </View>
                    ))
                }
                
                 <View style={{
                 position: 'absolute',
                 width: '100%',
                 bottom: '10%',
             }}>
                  <View style={{
                 //position: 'absolute',
                 width: '100%',
                 //bottom: '10%',
                 flexDirection: 'row',
                 height:60,
                 alignItems:'center',
                 marginTop: 10
             }}>
                 <View style={{
                     width: '80%',
                 }}>
                    <YellowBtn text='Загрузить фото' onPress={takePhoto} />
                 </View>
                <TouchableOpacity onPress={shotPhoto} style={{
                    borderRadius: 100,
                    backgroundColor: '#FFF529',
                    width:50,
                    height: 50,
                    justifyContent:'center',
                    alignItems: 'center'
                }}>
                    <Image source={camera} style={{width:24,height:24,resizeMode:'contain'}}/>
                </TouchableOpacity>
             </View>
             <View style={{
                 //position: 'absolute',
                 width: '100%',
                 //bottom: '10%',
                 flexDirection: 'row',
                 height:60,
                 alignItems:'center',
                 marginTop: 10
             }}>
             <View style={{width:'80%'}}>
                <YellowBtn text='Отправить' onPress={sendPhoto}/>
             </View>
             <TouchableOpacity onPress={onpressNext} style={{
                    borderRadius: 100,
                    backgroundColor: '#dadada',
                    width:50,
                    height: 50,
                    justifyContent:'center',
                    alignItems: 'center'
                }}>
                    <Image source={next} style={{width:24,height:24,resizeMode:'contain'}}/>
                </TouchableOpacity>
                </View>
             </View>
        </View>
    )
     Slider12 = ({onpress,check,takeAvatar, shotAvatar})=>(//Аватар профиля
        <View style={styles.container}>
            <Header text='Аватар профиля' />
            {check?
            <Check text={`success`} onpressCheck={onpress}/>
            :<View>
            <Text style={{
                marginLeft: '10%',
                marginTop: '5%',
                fontSize: 16,
                lineHeight: 18,
                color: '#585858',
                fontFamily: 'SFProDisplay-Bold',
            }}>
                Загрузите аватар профиля</Text>
            <View style={{
                width: 200,
                height: 200,
                borderWidth: 1,
                borderRadius: 200,
                alignSelf:'center',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20%',
                borderColor: '#FFF614'
            }}>
                <Image source={profile_icon} style={{
                    width:160,
                    height:160,
                    resizeMode:'contain',
                }} />
            </View>
            <View style={{
                 //position: 'absolute',
                 width: '100%',
                 top: '10%',
                 flexDirection: 'row'
             }}>
                 <View style={{
                     width: '75%'
                 }}>
                    <YellowBtn text='Загрузить фото' onPress={takeAvatar} />
                 </View>
                 <TouchableOpacity onPress={shotAvatar} style={{
                    borderRadius: 100,
                    backgroundColor: '#FFF529',
                    width:50,
                    height: 50,
                    justifyContent:'center',
                    alignItems: 'center'
                }}>
                    <Image source={camera} style={{width:24,height:24,resizeMode:'contain'}}/>
                </TouchableOpacity>
             </View>
             </View>}
        </View>
    )
     Slider13 = ({onpress, start, value})=>(//Пользовательское соглашение
        <View style={styles.container}>
            <ScrollView>
            <Text style={{
                marginHorizontal: '10%',
                marginTop: '15%',
                fontSize: 16,
                color: '#1F1F1F',
                fontFamily: 'SFProDisplay-Bold',
                fontWeight: '600',
                marginBottom: '5%'
            }}>Пользовательское соглашение</Text>
            <Text style={{
                marginHorizontal:'10%',
                textAlign: 'justify',
                fontSize: 13,
                color: '#929292'
            }}>Доступ к отдельным Сервисам может быть обусловлен необходимостью регистрации и/или авторизации Пользователя на Сайте. В этом случае Пользователь должен зарегистрироваться и/или авторизоваться в соответствии с указаниями Администрации на Сайте.{'\n\n'}
    
    4.2 При регистрации на Сайте, а также позднее при изменении и (или) дополнении таких данных, Пользователь обязуется предоставить достоверные и актуальные Регистрационные данные, в том числе заполнив регистрационные формы.{'\n\n'}
    
    4.3 Администрация вправе по своему усмотрению устанавливать ограничения для регистрации Пользователя на Сайте в том или ином статусе, а также в использовании Сервисов.{'\n\n'}
    
    4.4 Администрация вправе проверять информацию, предоставляемую Пользователями при пользовании Сайтом. Администрация вправе по собственному усмотрению отказать в регистрации и/или авторизации Пользователя на Сайте и/или запретить Пользователю использование Сайта.{'\n\n'}
    </Text>
    <View style={{flexDirection: 'row',marginHorizontal: '10%',alignItems: 'center',marginBottom: '3%'}}>
        <TouchableOpacity 
        onPress={start}
         style={{
            width:20,
            height: 20,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: '#dadada',
            justifyContent:'center',
            alignItems: 'center'
        }} >
            <View style={{
                width:14,
                height:14,
                borderRadius:10,
                backgroundColor: value?'#FFF614':'#fff'
            }} />
        </TouchableOpacity>
        <Text style={{
            fontSize: 11,
            color: '#585858',
            marginLeft:5
        }}>Согласиться на обработку личных данных</Text>
    </View>
    <View style={{
                 //position: 'absolute',
                 width: '100%',
                 bottom: '10%'
             }}></View>
                <YellowBtn text='Согласиться и начать' onPress={onpress}/>
             </ScrollView>
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
            <YellowBtn text='Завершить регистрацию' icon iconName={next} onPress={onpress} />
            <Modal 
                isVisible={false} 
                backdropColor='#fff'
                backdropOpacity={0.9}
                >
                <View style={{
                    backgroundColor: '#fff',
                    height: '70%',
                    borderRadius: 8,
                    padding: 8,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    alignItems: 'center',
                    justifyContent: 'space-around'
                }}>
                    <View style={{
                        width: 140,
                        height: 140,
                        borderRadius: 100,
                        borderWidth:1,
                        justifyContent:'center',
                        alignItems:'center',
                        borderColor: '#CFF2AC'
                    }}>
                        <Image source={checkicon} style={{
                            width:64,
                            height: 64,
                            resizeMode: 'center',
                            tintColor: '#6FC716'
                        }}/>
                    </View>
                    <Text style={{
                        fontSize: 17,
                        lineHeight: 18,
                        textAlign: 'center',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontFamily: 'SFProDisplay-Bold'
                    }}>Поздравляем!{'\n'}Регистрация успешно пройдена</Text>
                    <Text style={{
                        fontSize: 15,
                        lineHeight: 18,
                        fontFamily: 'SFProDisplay-Bold',
                        color: '#585858',
                        textAlign: 'center'
                    }}>Верификация аккаунта займет {'\n'}не более 24 часов</Text>
                    <View style={{
                        width: '100%'
                    }}>
                        <YellowBtn onPress={()=>{}} text='Личный кабинет' />
                    </View>
                </View>
            </Modal>
        </View>
    )
    _finishRegistration=()=>{
        this.changeIndex(1) 
    }
    goTo=()=>{
        this.state.value ? 
        this._finishRegistration():
        Alert.alert(
            "Ошибка",
            'Согласиться на обработку личных данных',
            [
              { text: "OK", onPress: () => console.log("OK Pressed"),style: "cancel" }
            ],
            { cancelable: false }
          );
    }
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
    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    render(){
        const {index,agree} = this.state
        return(
        <View style={[styles.container,{backgroundColor: '#fff'}]}>
            {
                agree?
                <Swiper 
                    renderPagination={renderPagination} 
                    ref='swiper'
                    loop={false} 
                    index={0}
                    yourNewPageIndex={this.state.newIndex} 
                    onIndexChanged={(index)=>{
                    console.log(index)
                }}>
                <this.Slide3 onpress={()=>{
                    if(this.state.password.value.length > 7 && this.state.password.confirmation > 7 && this.state.password.confirmation === this.state.password.value)
                        {this.changeIndex()}
                    else{
                        this.Allert('Введите пароль')
                    }
                }}
                />
                <this.Slide4 onpress={()=>{this.changeIndex(1)}}/>
                <this.Slide5 
                    onpress={()=>{
                        if(this.state.user.name.length > 3 && this.state.user.surname.length>3 )
                            {this.changeIndex(1)}
                        else{
                            this.Allert('Введите данные')
                        }
                    }}
                />
                <this.Slide6 
                    onpress={()=>{
                        if(this.state.date.day > 0 && this.state.date.year>1960 && this.state.date.year<2022)
                        this.changeIndex(1)
                        else{
                            this.Allert('Выберите дату рождение')
                        }
                    }} 
                    visible={this.state.visible} 
                    changeMounth={()=>{this.setState({visible: true})}}
                    closeModal={()=>{this.setState({visible: false})}}/>
                <this.Email onpress={()=>{
                    this.validateEmail(this.state.email)?this.changeIndex(1):this.Allert('Введите Email')
                    }}/>
                <this.Slider7 onpress={()=>{this.changeIndex(1)}} />
                <this.Slider8 
                    onpress={()=>{this.changeIndex(1)}} 
                    check={this.state.photoUds.check}
                    takePhotoPasport={()=>{this.takePhotoPasport()}}
                    shotPhotoPassport={()=>{this.shotPhotoPassport()}}
                    />
                <this.Slider9 
                    onpressCheck={()=>{this.changeIndex(1)}}
                    check={this.state.photoSelfi.check}
                    takePhotoSelfi={()=>this.takePhotoSelfi()}
                    shotPhotoSelfi={()=>this.shotPhotoSelfi()}
                />
                <this.Slider10 
                onpress={()=>{
                    this.state.about.length > 2 ?
                    this.changeIndex(1): this.Allert('О себе')
                }} />
                <this.Slider11 
                    onpressNext={()=>{this.changeIndex(1)}}
                    takePhoto={()=>{this.takePhoto()}}
                    shotPhoto={()=>{this.shotPhoto()}}
                     />
                <this.Slider12 
                    onpress={()=>{this.changeIndex(1)}}
                    takeAvatar={()=>{this.takeAvatar()}}
                    shotAvatar={()=>{this.shotAvatar()}}
                    check={this.state.avatar.check}
                     />
                <this.Slider13 
                onpress={()=>{this.goTo()}}
                    start={()=>{
                    this.setState({
                        value: true
                    })
                }} value={this.state.value} />
                <this.CodeInputSlider onpress={()=>this.props.navigation.navigate('InstMain')} />
            </Swiper>
                :<this.Slide2 onpress={()=>{
                    this.setState({
                        agree: true
                    })
                }}
                refuse={()=>{
                    this.props.navigation.goBack()
                }} />
            }
            
           
        </View>
        )
    }
}
export default RegistrationSlider

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
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
    code:{
        fontSize: 15,
        lineHeight: 18,
        color: '#585858',
        marginTop: '2%',
        marginLeft:'10%',
        fontFamily: 'SFProDisplay-Bold',
        fontWeight: '500',
    },
    btn:{
        alignSelf:'center', 
        paddingHorizontal: '10%', 
        paddingVertical: '2%',
        borderWidth: 1,
        borderRadius: 46,
        borderColor:'rgba(3, 3, 3, 0.28)'
    },
    txt:{
        fontSize: 16,
        lineHeight: 18,
        fontFamily: 'SFProDisplay-Bold',
        color: '#000',
        fontWeight: 'normal',
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
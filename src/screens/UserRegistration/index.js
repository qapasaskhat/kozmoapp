import React, {Component} from 'react';
import {View, Text, StatusBar, SafeAreaView , StyleSheet, Image, Pressable, TouchableOpacity} from 'react-native';
import Logo from '../../components/Logo'
import { YellowBtn, GrayBtn } from '../../components/Button'
import { TextInput, FlatList } from 'react-native-gesture-handler'
import Modal from 'react-native-modal'
import { basket,warning,checkicon,location_map,search, next } from '../../assets/icons'
import Swiper from 'react-native-swiper'
import CodeInput from 'react-native-confirmation-code-input'

const Header = ({text})=>(
  <View>
      <Logo/>
      <Text style={styles.txtStyle}><Text style={styles.text}>Leap</Text>{'\n'}
          {text}</Text>
  </View>
)
const CreatePassword = ({onpress})=>(
  <View style={styles.container}>
      <Header text='СОЗДАНИЕ ПАРОЛЯ' />
      <View style={{
          marginTop:'35%'
      }}>
      <TextInput 
          placeholder='Пароль '
          placeholderTextColor='#000'
          textAlign='center'
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
const City = ({onpress})=>(
  <View style={styles.container}>
      <Header text='ВЫБОР ГОРОДА' />
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
        <Text style={{
            fontSize: 15,
            textAlign: 'center',
            marginTop: '10%'
        }}>Выбрать город</Text>
        {/* <View style={{
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
            height: '40%',
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
           <View style={{
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
               }}>Almaty</Text>
               <Image source={checkicon} style={{width: 20, height: 20, resizeMode:'contain', tintColor:'#6FC716'}} />
           </View>
           <View style={{
               flexDirection: 'row',
               justifyContent:'space-between',
               paddingHorizontal: 20,
               paddingVertical:10,
               borderBottomWidth: 1,
               borderBottomColor: '#dadada'
           }}>
               <Text style={{
                   fontSize: 15,
                   fontWeight: 'normal',
                   color: '#858585'
               }}>Nur-Sultan</Text>
               <Image source={{}} style={{width: 20, height: 20, resizeMode:'contain', tintColor:'#6FC716'}} />
           </View>
        </View> */}
      <View style={{
          position: 'absolute',
          bottom: '10%',
          width: '100%'
      }}>
          <YellowBtn text='Подтвердить' onPress={onpress} icon iconName={next}/>
      </View>
  </View>
)
const PersonalName = ({onpress})=>(
  <View style={[styles.container,{backgroundColor: '#fff'}]}>
      <Header text='ЛИЧНЫЕ ДАННЫЕ'/>
      <View style={{
          marginTop: '20%'
      }}>
      <TextInput 
          placeholder='Фамилия '
          placeholderTextColor='#000'
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
const PersonalDate = ({changeMounth,visible,onpress})=>(
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
                <Text style={styles.txt}>Месяц</Text>
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
          <Pressable style={{
              width:'44%',
              height:50,
              backgroundColor: '#000',
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
              <Text style={{color: '#fff'}}>Мужчина</Text></Pressable>
          <Pressable style={{
              width:'44%',
              height:50,
              backgroundColor: '#fff',
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
              <Text>Женщина</Text></Pressable>
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
                <TouchableOpacity style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#dadada',
                    paddingVertical: 10
                }}>
                    <Text style={{textAlign: 'center'}}>Январь</Text>
                </TouchableOpacity>
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
const Skils= ({onPress,onpress})=>(
  <View style={styles.container}>
      <Header text='МОИ ИНТЕРЕСЫ' />
      <View style={{
          height: '60%'
      }}>
      <FlatList 
          data={[{},{},{},{},{},{},{},{},{},]}
          style={{
              marginHorizontal: '10%',
              marginTop: '10%',
          }}
          numColumns={4}
          renderItem={()=>(
              <View style={{
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
                      marginHorizontal: '4%'
                  }}>
                      <Image source={basket} style={{width:26, height: 26}} />
                  </View>
                  <Text>text</Text>
              </View>
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
const CodeInputSlider = ({onpress})=>(//ПОДТВЕРЖДЕНИЕ
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
    this.state = {};
  }
  changeIndex=()=>{
    this.refs.swiper.scrollBy(1)
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
          <CreatePassword onpress={()=>{this.changeIndex()}} />
          <City onpress={()=>{this.changeIndex()}}/>
          <PersonalName onpress={()=>{this.changeIndex()}}/>
          <PersonalDate onpress={()=>{this.changeIndex()}}/>
          <Skils onPress={()=>{this.changeIndex()}} />
          <CodeInputSlider onpress={()=>{this.props.navigation.navigate('FirstBalans')}} />
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

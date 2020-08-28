import React, { Component } from 'react';
import { View, Text,Image,StyleSheet,Dimensions,TouchableOpacity } from 'react-native';
import Header from '../../../components/Header'
import {avatar} from '../../../assets/img'
import Modal from 'react-native-modal'
import { ScrollView } from 'react-native-gesture-handler';

const {width,height} = Dimensions.get('screen')

class UserFaq extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modalvisible: false
    };
  }

  render() {
      const {navigation} =this.props
      const {modalvisible} = this.state
    return (
      <View style={{flex:1}}>
          <View
            style={styles.view}>
            <Header back={()=>{navigation.goBack()}} />
          </View>
          <Image source={avatar} style={styles.imgStyle} />
          <View style={styles.container}>
            <Text style={styles.h2}>FAQ</Text>
          </View>
          <TouchableOpacity
            onPress={()=>{  }}
            style={{
                borderBottomColor: '#D4D4D4',
                borderBottomWidth: 1,
                paddingLeft: '10%',
                height: '7%',
                justifyContent: 'center',
                borderTopColor:'#D4D4D4',
                borderTopWidth: 1
            }}>
            <Text
                style={{
                fontSize: 13,
                color: '#1F1F1F',
                fontWeight: '400',
                fontFamily: 'SFProDisplay-Regular',
                }}>
                ? Использование приложения 
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{this.setState({modalvisible: true})}}
            style={{
                borderBottomColor: '#D4D4D4',
                borderBottomWidth: 1,
                paddingLeft: '10%',
                height: '7%',
                justifyContent: 'center',
            }}>
            <Text
                style={{
                fontSize: 13,
                color: '#1F1F1F',
                fontWeight: '400',
                fontFamily: 'SFProDisplay-Regular',
                }}>
                ? Информация о тренировках
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{}}
            style={{
                borderBottomColor: '#D4D4D4',
                borderBottomWidth: 1,
                paddingLeft: '10%',
                height: '7%',
                justifyContent: 'center',
            }}>
            <Text
                style={{
                fontSize: 13,
                color: '#1F1F1F',
                fontWeight: '400',
                fontFamily: 'SFProDisplay-Regular',
                }}>
                ? Форс-мажор
            </Text>
            </TouchableOpacity>
            <Modal isVisible={modalvisible} 
            backdropColor='#fff'
            backdropOpacity={0.9}>
                <View style={styles.modalView}>
                    <Text style={styles.h4}>Информация о тренировках</Text>
                    <ScrollView>
                        <Text>{text}</Text>
                    </ScrollView>
                </View>
                <TouchableOpacity onPress={()=>{this.setState({
                    modalvisible: false
                })}} style={styles.modalBtn}>
                    <Text>close</Text>
                </TouchableOpacity>
            </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    view:{
        position: 'absolute',
        width: '100%',
        zIndex: 111,
        top: '5%',
      },
    imgStyle:{
        width: width,
        height: height*0.3
    },
    h2:{
        fontSize: 14,
        fontWeight: '600',
        fontStyle:'normal',
        fontFamily: 'SFProDisplay-Regular'
    },
    container:{
        marginHorizontal: '10%',
        backgroundColor: '#FFF529',
        borderRadius: 11,
        paddingVertical: 20,
        marginTop:-20,
        paddingHorizontal: 20,
        marginBottom: 10
        },
        modalView:{
            height:'70%', 
            paddingTop: '4%',
            paddingHorizontal: '5%',
            marginHorizontal:'5%',
            backgroundColor:'#fff', 
            borderRadius: 11, 
            borderWidth: 0, 
            marginBottom: 10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            },
            modalBtn:{
                width:46,
                height: 46,
                borderRadius: 50,
                borderWidth:0,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#fff',
                alignSelf:'center',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
            },
            h4:{
                fontSize: 16,
                fontStyle: 'normal',
                fontFamily: 'SFProDisplay-Regular',
                fontWeight: '600',
                color:'#1f1f1f',
                textAlign:'center'
            }
})

export default UserFaq;
const text = `Доступ к отдельным Сервисам может быть обусловлен необходимостью регистрации и/или авторизации Пользователя на Сайте. В этом случае Пользователь должен зарегистрироваться и/или авторизоваться в соответствии с указаниями Администрации на Сайте.

4.2 При регистрации на Сайте, а также позднее при изменении и (или) дополнении таких данных, Пользователь обязуется предоставить достоверные и актуальные Регистрационные данные, в том числе заполнив регистрационные формы.

4.3 Администрация вправе по своему усмотрению устанавливать ограничения для регистрации Пользователя на Сайте в том или ином статусе, а также в использовании Сервисов.

4.4 Администрация вправе проверять информацию, предоставляемую Пользователями при пользовании Сайтом. Администрация вправе по собственному усмотрению отказать в регистрации и/или авторизации Пользователя на Сайте и/или запретить Пользователю использование Сайта.

4.5 При прохождении процедуры регистрации, Пользователю присваивается выбранный им логин и пароль, которые используются `

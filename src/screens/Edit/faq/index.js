import React, { Component } from 'react';
import { View, Text, StatusBar, SafeAreaView ,TouchableOpacity} from 'react-native';
import Header from '../../../components/Header'

const Information = ()=>(
    <View style={{
        marginHorizontal: '10%',
    }}>
        <Text style={{
            fontSize: 16,
            fontFamily: 'SFProDisplay-Regular',
            fontWeight: '600',
            color: '#1F1F1F',
            marginBottom: '5%'
        }}>Информация о тренировках</Text>
        <Text style={{
            fontSize: 13,
            color: '#929292'
        }}>Доступ к отдельным Сервисам может быть обусловлен необходимостью регистрации и/или авторизации Пользователя на Сайте. В этом случае Пользователь должен зарегистрироваться и/или авторизоваться в соответствии с указаниями Администрации на Сайте.{'\n'}{'\n'}

4.2 При регистрации на Сайте, а также позднее при изменении и (или) дополнении таких данных, Пользователь обязуется предоставить достоверные и актуальные Регистрационные данные, в том числе заполнив регистрационные формы.{'\n'}{'\n'}

4.3 Администрация вправе по своему усмотрению устанавливать ограничения для регистрации Пользователя на Сайте в том или ином статусе, а также в использовании Сервисов.{'\n'}{'\n'}

4.4 Администрация вправе проверять информацию, предоставляемую Пользователями при пользовании Сайтом. Администрация вправе по собственному усмотрению отказать в регистрации и/или авторизации Пользователя на Сайте и/или запретить Пользователю использование </Text>
    </View>
)

class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const {navigation} = this.props
    return (
        <>
        <StatusBar />
      <SafeAreaView style={{flex: 1,backgroundColor: '#fff',}}>
          <Header back={()=>navigation.goBack()} />
            <Text style={{
                    fontSize: 16,
                    fontFamily: 'SFProDisplay-Regular',
                    fontWeight: '600',
                    color: '#1F1F1F',
                    marginBottom: '8%',
                    marginHorizontal: '10%',
                marginTop: '5%',
                }}>FAQ</Text>
            <TouchableOpacity 
                onPress={()=>{}}
                style={{
                 width: '100%',
                 height: 60,
                 borderTopColor: '#D4D4D4',
                 borderTopWidth: 1,
                 justifyContent: 'center',
                 borderBottomColor: '#D4D4D4',
                 borderBottomWidth: 1,
                 paddingHorizontal: '10%'
             }}>
                 <Text><Text style={{color: '#c4c4c4', fontWeight: 'bold'}}>?{'\t'}</Text>Использование приложения </Text>
             </TouchableOpacity>
             <TouchableOpacity style={{
                 width: '100%',
                 height: 60,
                 borderTopColor: '#D4D4D4',
                 //borderTopWidth: 1,
                 justifyContent: 'center',
                 borderBottomColor: '#D4D4D4',
                 borderBottomWidth: 1,
                 paddingHorizontal: '10%'
             }}>
                 <Text><Text style={{color: '#c4c4c4', fontWeight: 'bold'}}>!{'\t'}</Text>Информация о тренировках </Text>
             </TouchableOpacity>
             <TouchableOpacity style={{
                 width: '100%',
                 height: 60,
                 borderTopColor: '#D4D4D4',
                 //borderTopWidth: 1,
                 justifyContent: 'center',
                 borderBottomColor: '#D4D4D4',
                 borderBottomWidth: 1,
                 paddingHorizontal: '10%'
             }}>
                 <Text><Text style={{color: '#c4c4c4', fontWeight: 'bold'}}>!{'\t'}</Text>Форс-мажор</Text>
             </TouchableOpacity>
             <View style={{
                 justifyContent: 'center',
                 borderWidth: 1,
                 alignItems: 'center',
                 height: 60,
                 borderColor: '#242424',
                 marginHorizontal:'10%',
                 borderRadius: 31,
                 position: 'absolute',
                 width: '80%',
                 bottom: 20
             }}>
                 <Text>Напишите нам</Text>
             </View>
      </SafeAreaView>
      </>
    );
  }
}

export default Faq;

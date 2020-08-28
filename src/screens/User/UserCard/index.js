import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions,Image,TextInput, TouchableOpacity } from 'react-native';
import Header from '../../../components/Header'
import {avatar} from '../../../assets/img'
import {mastercard,visa,checkicon, trash} from '../../../assets/icons'
import {YellowBtn} from '../../../components/Button'
import Modal, {ModalContent, ModalTitle} from 'react-native-modals';

const {
    width,
    height
} = Dimensions.get('screen')

const CardItem = ({onpress,number,type,value})=>(
    <View style={{
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingHorizontal:'10%'
    }}>
        <View style={{
            height: 40,
            backgroundColor: '#fff',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            borderRadius:7,
            width: '87%',
            marginVertical:4,
            flexDirection:'row',
            justifyContent: 'space-between',
            paddingHorizontal: 17,
            alignItems: 'center'
        }}>
            <View style={{flexDirection:'row'}}>
            <View style={{width: 15,height: 15, backgroundColor:value?'#ececec':'#fff',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                <View style={{width:8,height:8, borderRadius: 8, backgroundColor: value? '#000': '#ececec'}} />
            </View>
            <Image source={type} style={{
                width:25,
                height: 15,
                resizeMode: 'contain',
                marginLeft:6
            }} />
            </View>
        <Text>{number}</Text>
        </View>
        <TouchableOpacity onPress={onpress}>
            <Text style={{fontSize: 32,color:'#c4c4c4'}}>...</Text>
        </TouchableOpacity>
    </View>
)
class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cards:[{
            id: 1,
            number:'8345 **** **** 4322',
            img: mastercard,
            value: true
        },{
            id: 2,
            number:'3064 **** **** 6793',
            img: visa,
            value: false
        }],
        bottomModalAndTitle: false
    };
  }

  render() {
      const { navigation } = this.props
      const { cards } = this.state
    return (
      <View style={{flex: 1,backgroundColor: '#fff'}}>
          <View
            style={styles.container}>
            <Header back={()=>{navigation.goBack()}}/>
          </View>
          <Image source={avatar} style={styles.imgStyle} />
        <View style={{
            marginHorizontal: '10%',
            backgroundColor: '#FFF529',
            borderRadius: 11,
            paddingVertical: 20,
            marginTop:-20,
            paddingHorizontal: 20,
            marginBottom: 10
            }}>
            <Text style={styles.h2}>Пополнение баланса</Text>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 0,
              marginTop: 10
            }}>
              <View>
                <Text style={styles.h1}>15000 т</Text>
                <Text style={styles.h3}>Мой баланс</Text>
              </View>
              <View style={{
                paddingVertical: 5,
                backgroundColor: '#fff',
                width: 90,
                flexDirection: 'row',
                justifyContent:'space-between',
                paddingHorizontal:5,
                borderRadius: 11,
                alignItems:'center'
              }}>
                  <TextInput placeholder='+' />
                <Text>т</Text>
              </View>
            </View>
          </View>
          {
              cards.map(item=>(
                  <CardItem 
                    number={item.number} 
                    type={item.img} 
                    value={item.value} 
                    onpress={()=>{
                        this.setState({
                            bottomModalAndTitle: true
                        })
                    }} />
              ))
          }
          <TouchableOpacity style={styles.addBtn}>
              <Text style={{
                  fontSize: 24,
                  position:'absolute',
                  left: 20
              }}>+</Text>
              <Text style={styles.btnTxt}>Добавить карту</Text>
          </TouchableOpacity>
          <Modal.BottomModal
            visible={this.state.bottomModalAndTitle}
            onTouchOutside={() =>
              this.setState({bottomModalAndTitle: false, show: true})
            }
            onSwipeOut={() =>
              this.setState({bottomModalAndTitle: false, show: true})
            }
            width={1}
            height={0.2}
            modalTitle={
              <View style={{
                width:50,
                height:6,
                backgroundColor: '#fff',
                alignSelf:'center',
                borderRadius: 3,
                marginBottom: 20,
                marginTop: 10
              }} />
            }>
            <ModalContent
              style={{
                flex: 1,
                backgroundColor: '#fff',
                paddingLeft: 24,
                justifyContent: 'space-between',
              }}>
                  <TouchableOpacity style={{flexDirection:'row',paddingLeft: 14,alignItems:'center'}}>
                    <Image source={trash} style={{width:24,height:24,resizeMode:'contain',marginRight: 12}} />
                    <Text style={styles.btnTxt}>Удалить карту</Text>
                  </TouchableOpacity>
                  <View style={{width: width,height:2,backgroundColor:'#ededed', marginVertical:20}}/>
                  <TouchableOpacity style={{flexDirection: 'row',paddingLeft: 14,alignItems:'center'}}>
                    <Image source={checkicon} style={{width:24,height:24,resizeMode:'contain',marginRight: 12}} />
                      <Text style={styles.btnTxt}>Отмена</Text>
                  </TouchableOpacity>
            </ModalContent>
          </Modal.BottomModal>
          <View style={{
              position:'absolute',
              width:'100%',
              bottom: '5%'
          }}>
              <YellowBtn text='Пополнить баланс' icon iconName={checkicon} />
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
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
    h1:{
        fontSize: 20,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontFamily: 'SFProDisplay-Regular',
        color: '#242424'
    },
    h3:{
        fontSize: 10,
        fontFamily: 'SFProDisplay-Regular',
        fontWeight: '600',
        color: '#242424'
    },
    addBtn:{
        borderWidth:1,
        borderColor:'#C8C8C8',
        marginHorizontal: '10%',
        height:45,
        justifyContent:'center',
        alignItems:'center',
        marginTop: '4%',
        borderRadius: 11
    },
    btnTxt:{
        fontSize: 13,
        fontStyle: 'normal',
        fontFamily: 'SFProDisplay-Regular',
        fontWeight: '500',
        color:'#1f1f1f'
    }
})

export default UserCard;

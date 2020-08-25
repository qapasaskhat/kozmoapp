import React, { Component } from 'react';
import { View, Text,FlatList, Image, TouchableOpacity, StatusBar,SafeAreaView } from 'react-native';
import {basket} from '../../../assets/icons'
import { YellowBtn, GrayBtn } from '../../../components/Button'
import Header from '../../../components/Header'
import {image} from '../../../assets/img'
import ImagePicker from 'react-native-image-picker';
import Modal from 'react-native-modal'


class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        items:[
            {
                id:1,
                image: image
            },{
                id:2,
                image: image
            },{
                id:3,
                image: image
            },{
                id:4,
                image: image
            },{
                id:5,
                image: image
            },{
                id:6,
                image: image
            },
        ],
        modalVisible: false,
        photoUri: null
    };
  }

  componentDidMount=()=>{}

  takePhoto=()=>{
    const options = {
        title: 'Select Photo',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
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
                modalVisible: true,
                photoUri: response.uri
            })
          }
    })
  }

  render() {
      const {items, modalVisible, photoUri} = this.state
      const {navigation} = this.props
    return (
        <>
        <StatusBar />
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#fff',
            borderRadius: 30
        }}>
            <Header back={()=>{
                navigation.goBack()
            }} />
            <View style={{
                marginHorizontal: '10%',
                marginTop: '5%'
            }}>
                <Text style={{
                    fontSize: 16,
                    fontFamily: 'SFProDisplay-Regular',
                    fontWeight: '600',
                    color: '#1F1F1F',
                    marginBottom: '8%'
                }}>Редактирование моих фото</Text>
                <FlatList data={items} numColumns={4} renderItem={({item})=>(
                    <View style={{
                        width: 74,
                        height: 74,
                        borderRadius: 7,
                        backgroundColor: '#F2F2F2',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '1%',
                        alignSelf :'center',
                        backgroundColor: '#000',
                    }}>
                        <TouchableOpacity onPress={()=>{alert(item.id)}} style={{
                            width: 26,
                            height: 26,
                            borderRadius: 7,
                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                            position: 'absolute',
                            top:2,
                            right: 2,
                            justifyContent:'center',
                            alignItems:'center',
                            zIndex: 1111,
                        }}>
                            <Text>x</Text>
                        </TouchableOpacity>
                        <Image source={item.image} style={{
                            width:74,
                            height: 74,
                            resizeMode: 'cover'
                        }} />
                    </View>
                    
                )} />
            </View>
            <Modal isVisible={modalVisible} 
            backdropColor='#fff'
            backdropOpacity={0.9}>
                <View style={{
                    marginHorizontal: '10%'
                }}>
                    <Image source={{uri: photoUri}} style={{
                        width: 300,
                        height: 300,
                        resizeMode: 'cover',
                        borderRadius: 9,
                        marginBottom: 10
                    }} />
                    <YellowBtn text='Сохранить' onPress={()=>{
                        this.setState({
                            modalVisible: false
                        })
                    }} />
                    <GrayBtn text='Отмена' onPress={()=>{}} />
                </View>
            </Modal>
            <View style={{
                position:'absolute',
                width: '100%',
                bottom: 20
            }}>
                <YellowBtn text='Добавить' onPress={()=>{this.takePhoto()}} />
            </View>
        </SafeAreaView>
        </>
    );
  }
}

export default Photo;

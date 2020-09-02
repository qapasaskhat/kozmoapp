import React, { Component } from 'react';
import { View, Text,FlatList, Image, TouchableOpacity, StatusBar,SafeAreaView } from 'react-native';
import {basket} from '../../../assets/icons'
import { YellowBtn, GrayBtn } from '../../../components/Button'
import Header from '../../../components/Header'
import {image} from '../../../assets/img'
import ImagePicker from 'react-native-image-picker';
import Modal from 'react-native-modal'
import { connect } from 'react-redux'


class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        items:[],
        modalVisible: false,
        photoUri: null
    };
  }

  componentDidMount=()=>{
      this.getMedia()
  }
  getMedia=()=>{
    var axios = require('axios');
    var config = {
      method: 'get',
      url: 'https://lepapp.com/api/coach/media',
      headers: { 
        'Authorization': `Bearer ${this.props.token}`, 
      },
    };
    
    axios(config)
    .then( (response)=> {
        this.setState({
            items: response.data
        })
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });    
  }
  addMedia=()=>{
    var axios = require('axios');
    var FormData = require('form-data');
    let file = {}
    file.name = 'media1.jpeg'
    file.type = 'image/jpeg'
    file.uri = this.state.photoUri
    var data = new FormData();
    data.append('image', file);
    
    var config = {
      method: 'post',
      url: 'https://lepapp.com/api/coach/media',
      headers: { 
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMTcyMzlhZTNiNGFmYzAzOTEzOTAzMTIyNzA5YzBhMWJiOWRhMTI4ODg0ZTQwZDVmODY4YmRmNjgwOWNiYzI1ZGZlNjViZGQ2Nzc3OWMwNzQiLCJpYXQiOjE1OTg5NjIwNTMsIm5iZiI6MTU5ODk2MjA1MywiZXhwIjoxNjMwNDk4MDUzLCJzdWIiOiIxMTkiLCJzY29wZXMiOltdfQ.VepHLwYwQrjB8r3Zum9v_N9R18pc95A42fvq5kvx3eblBGT11ryTIzQRa6vuOVyAI9HSfisfgmg8z5U5tcKFt2bECGwyVMtYSsVxz1qFIJocXqyVPT06ChclL44L09cgd_1n0RzIIIQdaoTjhi9vVN1x_XJhfem0BmsMoiTSYRxQnkCf7k_zMq5OGYr665j5QYSbH6oTRsTzONpGZT3Xtq1wZd24p6Il8k5vRy39oYyT1ZzUTh82L0a9ZHcRrBBvwHjHNxKqr_FZvLPy-Sg1TJ4BvnePXQpsjXv9l_lX7owaHgT_kAMK9hsDX4kFzGKJMORcWP6-BaWAobs3NLWAhAlIUw0dmCUbZUJc5oSDI76lMQszBm6mQ6YLCBs-swo_q8tBaSVxfn8AdKTNoyUVZZsLzcF-muncDdo5u4TNmPYblxkSXmCkLh4jMhb4e7CScQ97AdZQFyr1M_O_S71lOhMla6o27e336wPGzXecBtXUKk1nm2glIrW5eu2h4hvxvO3hw__OCJckUbvOXpchJZ0u5qF0m4fjLTEc3XKDDhteEiyoAmuRtEhIUw7d4Tk-wc0-xDWsRK286w_cXak8WTkc8K8HsAo6gaHD3zYBjGQVPUYAI0r4OTUdhUTa7bX3MYUg7wx64F36BcrE6JyquWxtOv8BEFHwtb7ZpIczpsA', 
      },
      data : data
    };
    
    axios(config)
    .then( (response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

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
            let arr = this.state.items
            let obj = {
                uri: response.uri
            }
            arr.push(obj)
            this.setState({
                //modalVisible: true,
                photoUri: response.uri,
                items: arr
            })
            this.addMedia()
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
                        backgroundColor: '#fff',
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
                        <Image source={{uri: `https://lepapp.com/storage/${item.image}`}} style={{
                            width:74,
                            height: 74,
                            resizeMode: 'cover',
                            borderRadius: 7,
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
const mapStateToProps = (state) =>({
    token: state.appReducer.token,
  })
export default connect(mapStateToProps) (Photo);

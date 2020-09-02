import React, { Component } from 'react';
import { View, Text,FlatList, Image,StatusBar,SafeAreaView } from 'react-native';
import {gantel,checkicon,kovrik} from '../../../assets/icons'
import { YellowBtn } from '../../../components/Button'
import Header from '../../../components/Header'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux'

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
        invent:[]
    };
  }
  componentDidMount=()=>{
      this.getInventory()
  }
  getInventory=()=>{
    var axios = require('axios');
    var config = {
      method: 'get',
      url: 'https://lepapp.com/api/inventories',
      headers: { }
    };
    
    axios(config)
    .then( (response) => {
        this.setState({
            invent: response.data.map(i=>
                i.id === i.id ?
                {...i,select: false}:
                i)
        })
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }
  add=(token)=>{
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();
    this.state.invent.map(item=>{
        item.select && data.append('inventories[]', item.id);
    })
    
    var config = {
      method: 'post',
      url: 'https://lepapp.com/api/coach/inventories',
      headers: { 
        'Accept': 'application/json', 
        'Authorization': `Bearer ${this.props.token}`, 
      },
      data : data
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
      const { invent } = this.state
      const { navigation } = this.props
    return (
        <>
        <StatusBar />
        <SafeAreaView style={{
            flex:1,
            backgroundColor: '#fff',
            borderRadius: 30
        }}>
            <Header  back={()=>{
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
                }}>Мой инвентарь</Text>
                <FlatList data={invent} numColumns={4} renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>{
                        this.setState({
                            invent: this.state.invent.map(i=>
                                i.id === item.id ?
                                {...i,select: !item.select}:
                                i)
                        })
                    }}>
                    <View style={{
                        width: 54,
                        height: 54,
                        borderRadius: 7,
                        backgroundColor: '#fff',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '3%',
                        alignSelf :'center',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 1.84,
                        elevation: 5,
                        borderWidth: item.select?5:0,
                        borderColor:'#FFF529'
                    }}>
                        <Image source={{uri: item.icon}} style={{
                            width:25,
                            height: 25,
                            resizeMode: 'contain'
                        }} />
                    </View>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 12,
                        color: '#404040',
                        fontFamily: 'SFProDisplay-Regular',
                        fontWeight: '300'
                    }}>{item.title}</Text>
                    </TouchableOpacity>
                )} />
            </View>
            <View style={{
                position:'absolute',
                width: '100%',
                bottom: 20
            }}>
                <YellowBtn text='Сохранить' icon iconName={checkicon} onPress={()=>{
                    this.add()
                }} />
            </View>
        </SafeAreaView>
        </>
    );
  }
}
const mapStateToProps = (state) =>({
    token: state.appReducer.token,
  })
export default connect(mapStateToProps) (Skills);

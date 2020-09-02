import React, { Component } from 'react';
import { View, Text,FlatList, Image,StatusBar,SafeAreaView } from 'react-native';
import {basket,velo} from '../../../assets/icons'
import { YellowBtn } from '../../../components/Button'
import Header from '../../../components/Header'
import { TouchableOpacity } from 'react-native-gesture-handler';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
        scillsItems:[]
    };
  }
  componentDidMount=()=>{
      this.get()
  }
  get=()=>{
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://lepapp.com/api/training-types',
      headers: { }
    };
    
    axios(config)
    .then( (response)=> {
        this.setState({
            scillsItems: response.data.map(i=>
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
  add=()=>{
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();
    this.state.scillsItems.map(item=>{
        item.selected && data.append('training_types[]', item.id);
    })
    
    var config = {
      method: 'post',
      url: 'https://lepapp.com/api/coach/training-types',
      headers: { 
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMTcyMzlhZTNiNGFmYzAzOTEzOTAzMTIyNzA5YzBhMWJiOWRhMTI4ODg0ZTQwZDVmODY4YmRmNjgwOWNiYzI1ZGZlNjViZGQ2Nzc3OWMwNzQiLCJpYXQiOjE1OTg5NjIwNTMsIm5iZiI6MTU5ODk2MjA1MywiZXhwIjoxNjMwNDk4MDUzLCJzdWIiOiIxMTkiLCJzY29wZXMiOltdfQ.VepHLwYwQrjB8r3Zum9v_N9R18pc95A42fvq5kvx3eblBGT11ryTIzQRa6vuOVyAI9HSfisfgmg8z5U5tcKFt2bECGwyVMtYSsVxz1qFIJocXqyVPT06ChclL44L09cgd_1n0RzIIIQdaoTjhi9vVN1x_XJhfem0BmsMoiTSYRxQnkCf7k_zMq5OGYr665j5QYSbH6oTRsTzONpGZT3Xtq1wZd24p6Il8k5vRy39oYyT1ZzUTh82L0a9ZHcRrBBvwHjHNxKqr_FZvLPy-Sg1TJ4BvnePXQpsjXv9l_lX7owaHgT_kAMK9hsDX4kFzGKJMORcWP6-BaWAobs3NLWAhAlIUw0dmCUbZUJc5oSDI76lMQszBm6mQ6YLCBs-swo_q8tBaSVxfn8AdKTNoyUVZZsLzcF-muncDdo5u4TNmPYblxkSXmCkLh4jMhb4e7CScQ97AdZQFyr1M_O_S71lOhMla6o27e336wPGzXecBtXUKk1nm2glIrW5eu2h4hvxvO3hw__OCJckUbvOXpchJZ0u5qF0m4fjLTEc3XKDDhteEiyoAmuRtEhIUw7d4Tk-wc0-xDWsRK286w_cXak8WTkc8K8HsAo6gaHD3zYBjGQVPUYAI0r4OTUdhUTa7bX3MYUg7wx64F36BcrE6JyquWxtOv8BEFHwtb7ZpIczpsA', 
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
      const { scillsItems } = this.state
      const { navigation } = this.props
    return (
        <>
        <StatusBar />
        <SafeAreaView style={{
            flex: 1,
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
                }}>Мои навыки</Text>
                <FlatList data={scillsItems} numColumns={4} renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>{
                        this.setState({
                            scillsItems: this.state.scillsItems.map(i=>
                                i.id === item.id ?
                                {...i,selected: !item.selected}:
                                i)
                        })
                    }}>
                    <View style={{
                        width: 54,
                        height: 54,
                        borderRadius: 50,
                        backgroundColor: '#F2F2F2',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '3%',
                        alignSelf :'center',
                        borderWidth: item.selected? 4:0,
                        borderColor: '#FFF529'
                    }}>
                        <Image source={{uri: item.icon}} style={{
                            width:25,
                            height: 25,
                            resizeMode: 'contain'
                        }} />
                    </View>
                    <Text style={{
                        fontSize: 12,
                        color: '#404040',
                        textAlign: 'center'
                    }}>{item.title}</Text>
                    </TouchableOpacity>
                )} />
            </View>
            <View style={{
                position:'absolute',
                width: '100%',
                bottom: 20
            }}>
                <YellowBtn text='Сохранить' onPress={()=>this.add()}/>
            </View>
        </SafeAreaView>
        </>
    );
  }
}

export default Skills;

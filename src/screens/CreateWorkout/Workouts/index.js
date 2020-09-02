import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity,SafeAreaView } from 'react-native';
import Header from '../../../components/Header'
import { FlatList } from 'react-native-gesture-handler';
import { YellowBtn } from '../../../components/Button'
import {basket,edit,profile} from '../../../assets/icons'
import { connect } from 'react-redux'

class Workout extends Component {
  constructor(props) {
    super(props);
    this.state = {
        trainings:[]
    };
  }
  componentDidMount=()=>{
      this.getTrainigs()
  }
  getTrainigs =()=>{
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://lepapp.com/api/coach/trainings',
      headers: { 
        'Authorization': `Bearer ${this.props.token}`
      }
    };
    
    axios(config)
    .then( (response)=> {
        this.setState({
            trainings: response.data
        })
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
      const { navigation } = this.props
      const { trainings } = this.state
    return (
      <SafeAreaView style={{
          flex: 1
      }}>
          <Header right />
          <FlatList 
            data={trainings}
            style={{
                marginHorizontal: '10%',
                marginTop: '5%',
                marginBottom: '20%'
            }}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
                <Text style={{
                    fontSize: 16,
                    color: '#1f1f1f',
                    fontWeight: '600',
                    marginBottom: '5%',
                    fontFamily: 'SFProDisplay-Regular',
                }}>Мой предстоящие тренировки</Text>
            }
            renderItem={({item})=>(
                <TouchableOpacity 
                    onPress={()=>{navigation.navigate('OpenWorkout')}}
                    style={{
                        height: 100,
                        width:'100%',
                        backgroundColor: '#fff',
                        marginVertical: 3,
                        borderBottomColor: '#d4d4d4',
                        borderBottomWidth: 1,
                        flexDirection: 'row',
                        justifyContent:'space-around',
                        alignItems: 'center'
                    }}>
                    <View style={{
                        width:60,
                        height: 60,
                        borderRadius: 30,
                        borderColor:'#FFF529',
                        borderWidth: 2,
                        justifyContent:'center',
                        alignItems: 'center'
                    }}>
                        <Image source={{uri: item.training_type.icon}} style={{
                            width: 25,
                            height: 25,
                            resizeMode: 'contain',
                        }} />
                    </View>
                    <View>
                        <Text style={{
                            fontSize: 15,
                            color: '#242424',
                            fontFamily: 'SFProDisplay-Regular',
                        }}>08:00 {'\t'}<Text style={{
                            fontSize: 11,
                            color: '#4f4f4f'
                        }}>сегодня</Text></Text>
                        <Text style={{
                            fontSize: 13,
                            color: '#000',
                            fontFamily: 'SFProDisplay-Regular',
                        }}>{item.title}</Text>
                        <Text style={{
                            fontSize: 11,
                            color: '#4f4f4f',
                            fontFamily: 'SFProDisplay-Regular',
                        }}>{item.address}</Text>
                        <Text style={{
                            fontSize: 15,
                            color: '#6FC716',
                            fontFamily: 'SFProDisplay-Regular',
                            marginTop: 5
                        }}>{item.price} т</Text>
                    </View>
                    <View style={{
                        justifyContent: 'space-around'
                    }}>
                        <Image source={edit} style={{
                            width: 16,
                            height: 16,
                            resizeMode: 'contain',
                        }} />
                        <View style={{
                            flexDirection: 'row',
                            marginTop:20,
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                fontSize: 11,
                                marginRight: 5,
                                fontFamily: 'SFProDisplay-Regular',
                            }}>{item.subscriptions_count}/{item.athletes_count}</Text>
                            <Image source={profile} style={{
                                width:8,
                                height:8,
                                resizeMode: 'contain',
                                tintColor: '#989898'
                            }}/>
                        </View>
                    </View>
                </TouchableOpacity>
            )}
             />
             <View style={{
                 position: 'absolute',
                 bottom: 20,
                 width: '100%'
             }}>
                 <YellowBtn text='Создать тренировку' onPress={()=>{navigation.navigate('CreateWorkout')}} />
             </View>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state) =>({
    token: state.appReducer.token,
  })
export default connect(mapStateToProps)(Workout);

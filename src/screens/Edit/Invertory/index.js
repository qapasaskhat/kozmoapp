import React, { Component } from 'react';
import { View, Text,FlatList, Image,StatusBar,SafeAreaView } from 'react-native';
import {gantel,checkicon,kovrik} from '../../../assets/icons'
import { YellowBtn } from '../../../components/Button'
import Header from '../../../components/Header'

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
        invent:[
            {
                id: 1,
                img: gantel,
                name: 'Гантеля',
                select: true
            },{
                id: 3,
                img: kovrik,
                name: 'Коврик',
                select: false
            },{
                id: 4,
                img: gantel,
                name: 'Гантеля',
                select: false
            },
        ]
    };
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
                    <View>
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
                        <Image source={item.img} style={{
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
                    }}>{item.name}</Text>
                    </View>
                )} />
            </View>
            <View style={{
                position:'absolute',
                width: '100%',
                bottom: 20
            }}>
                <YellowBtn text='Сохранить' icon iconName={checkicon} />
            </View>
        </SafeAreaView>
        </>
    );
  }
}

export default Skills;

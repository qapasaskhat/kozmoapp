import React, { Component } from 'react';
import { View, Text,FlatList, Image,StatusBar,SafeAreaView } from 'react-native';
import {basket,velo} from '../../../assets/icons'
import { YellowBtn } from '../../../components/Button'
import Header from '../../../components/Header'

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
        scillsItems:[
            {
                id: 1,
                img: basket,
                text: 'basket',
                selected: false
            },
            {
                id: 2,
                img: velo,
                text: 'velo',
                selected: true
            },
            {
                id: 3,
                img: basket,
                text: 'basket',
                selected: false
            },
        ]
    };
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
                    <View>
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
                        <Image source={item.img} style={{
                            width:25,
                            height: 25,
                            resizeMode: 'contain'
                        }} />
                    </View>
                    <Text style={{
                        fontSize: 12,
                        color: '#404040',
                        textAlign: 'center'
                    }}>{item.text}</Text>
                    </View>
                )} />
            </View>
            <View style={{
                position:'absolute',
                width: '100%',
                bottom: 20
            }}>
                <YellowBtn text='Сохранить' />
            </View>
        </SafeAreaView>
        </>
    );
  }
}

export default Skills;

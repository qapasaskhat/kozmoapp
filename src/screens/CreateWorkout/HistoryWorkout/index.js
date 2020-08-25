import React, { Component } from 'react';
import { View, Text,Image, FlatList } from 'react-native';
import {edit,basket,profile} from '../../../assets/icons'
import Header from '../../../components/Header'

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <FlatList data={[{}]}
        ListHeaderComponent={
            <>
            <Header />
            <Text style={{
                fontSize: 16,
                color: '#242424',
                fontFamily: 'SFProDisplay-Regular',
                fontWeight: '600',
                marginTop: '5%',
                marginHorizontal: '10%'
            }}>История моих тренировок</Text>
            </>
        }
            renderItem={()=>(
                <View style={{
                    height: 100,
                    // width:'100%',
                    backgroundColor: '#fff',
                    marginVertical: 3,
                    borderBottomColor: '#d4d4d4',
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    justifyContent:'space-around',
                    alignItems: 'center',
                    marginHorizontal:'10%'

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
                        <Image source={basket} style={{
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
                        }}>Велотренировка</Text>
                        <Text style={{
                            fontSize: 11,
                            color: '#4f4f4f',
                            fontFamily: 'SFProDisplay-Regular',
                        }}>ул.Габдуллина, д. 132</Text>
                        <Text style={{
                            fontSize: 15,
                            color: '#6FC716',
                            fontFamily: 'SFProDisplay-Regular',
                            marginTop: 5
                        }}>2000 т</Text>
                    </View>
                    <View style={{
                        justifyContent: 'space-around'
                    }}>
                        
                    </View>
                </View>
            )} />
        
    );
  }
}

export default index;

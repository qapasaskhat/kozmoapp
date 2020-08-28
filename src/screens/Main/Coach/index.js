import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import {img_ava,image} from '../../../assets/img'
import {velo,star} from '../../../assets/icons'

class Coach extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}> Инструктор </Text>
        <View style={styles.rating}>
            <Image source={star} style={[styles.ratingIcon,{resizeMode:'contain'}]} />
            <Text style={{color: '#fff'}}>9.1</Text>
        </View>
        <View style={styles.cart}>
            <Image style={img_ava} style={styles.imgAva} />
            <Text style={styles.h1}>Таёкина {'\n'}
                    Алина {'\n'}
                    Сергеевна</Text>
            <Text style={[styles.h1,{color: '#838383'}]}>27 лет</Text>
        </View>
        <View>
            <Image source={image} style={styles.img} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    h1:{
        fontSize: 16,
        fontStyle: 'normal',
        fontFamily: 'SFProDisplay-Regular',
        fontWeight: '500',
        color: '#1f1f1f'
    },
    ratingIcon:{
        width:16,
        height:16
    },
    rating:{
        width: 40,
        height:20,
        position:'absolute',
        top: 4,
        right: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:16
    },
    cart:{
        flexDirection:'row',
    },
    imgAva:{
        height: 86,
        width:86,
        borderRadius: 9,
        resizeMode:'cover'
    },
    img: {
        height:76,
        width:76,
        borderRadius: 6,
        resizeMode: 'contain'
    }
})

export default Coach;

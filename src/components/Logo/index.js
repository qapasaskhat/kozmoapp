import React, { Component } from 'react';
import { Image } from 'react-native';
import {main_logo} from '../../assets/icons'
const index = ()=>{
    return(
        <Image source={main_logo} style={{
            width: 64,
            height: 64,
            resizeMode: 'contain',
            tintColor: '#000',
            marginTop: '15%',
            marginLeft: '10%'
        }} />
    )
}

export default index;

import React from 'react';
import {View, Text, TouchableOpacity, Image,TextInput, Dimensions} from 'react-native';
//import styles from './styles';
import { search, basket, } from '../../assets/icons'

const {
    width
} = Dimensions.get('screen')

const SearchInput = ({value,searchPress}) => {
  return (
    <View style={{flex: 1,paddingHorizontal:12, }}>
        <View style={{
            flexDirection: 'row',
            height: 60,
            justifyContent: 'space-between', 
            alignItems: 'center', 
            backgroundColor: '#eee', 
            width: width*0.85,
            borderRadius: 30,
            paddingHorizontal:12,
            
            }}>
            <TextInput placeholder={'Search'} />
            <Image source={search} style={{width: 24, height: 24, resizeMode: 'contain',tintColor:'#000'}} />
        </View>
        <View>
            <View style ={{
                width: 54, 
                height: 54, 
                borderWidth: 2, 
                borderRadius: 54, 
                justifyContent: 'center', 
                alignItems: 'center', 
                borderColor: '#FFF529',
                marginTop: 16
                }}>
                <Image source={basket} style={{width: 24, height: 24, resizeMode: 'center', tintColor: '#000'}} />
            </View>
        </View>
    </View>
  );
};
export default SearchInput;

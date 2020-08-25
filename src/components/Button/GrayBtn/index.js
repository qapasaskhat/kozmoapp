import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import {workout} from '../../../assets/icons'

const GrayBtn = ({
  text,
  icon,
  iconName,
  onPress
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#D6D6D6',
        height: 50,
        borderRadius: 68,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3%',
        marginHorizontal: '10%',
      }}>
      <Text>{text}</Text>
      {icon && <Image source={iconName} style={{
          width: 20,
          height: 20,
          resizeMode: 'contain',
          position: 'absolute',
          tintColor: '#242424',
          right: '10%'
      }} />}
    </TouchableOpacity>
  );
};
export default GrayBtn;

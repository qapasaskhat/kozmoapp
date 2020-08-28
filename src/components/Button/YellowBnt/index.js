import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';

const YellowBtn = ({text, onPress, icon, iconName,}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#FFF529',
        height: 50,
        borderRadius: 68,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '10%',
        marginTop: 0
      }}>
      {icon && (
        <Image
          source={iconName}
          style={{
            width: 20,
            height: 20,
            resizeMode: 'center',
            position: 'absolute',
            right: '10%',
            tintColor: '#242424',
            fontFamily: 'SFProDisplay-Regular',
          }}
        />
      )}
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};
export default YellowBtn;

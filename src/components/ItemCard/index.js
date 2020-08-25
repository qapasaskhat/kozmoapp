import React from 'react';
import {TouchableOpacity, Text, Image,View} from 'react-native';
import {basket,dotLocation} from '../../assets/icons/index';
import styles from './styles'

const Item = ({
    onPressItem
}) => {
  return (
    <View style={{width:24,height: 24, borderRadius: 15, backgroundColor: 'rgba(255, 248, 77, 0.64)',justifyContent:'center',alignItems:'center'}}>
      <Image source={dotLocation} style={{width:12, height: 12, resizeMode: 'contain'}} />
    </View>
    // <TouchableOpacity
    //   onPress={onPressItem}
    //   style={styles.container}>
    //   <Image
    //     source={basket}
    //     style={styles.icon}
    //   />
    //   <Text>title</Text>
    //   <Text>basketball</Text>
    // </TouchableOpacity>
  );
};
export default Item;

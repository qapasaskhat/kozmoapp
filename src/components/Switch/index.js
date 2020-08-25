import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

const Switch = ({text, text_2}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.active_btn}>
        <Text style={styles.active_txt}>{text}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.txt}>{text_2}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Switch;

import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import { profile } from '../../assets/icons'

const Profile = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={profile} style={styles.icon}/>
    </TouchableOpacity>
  );
};
export default Profile;

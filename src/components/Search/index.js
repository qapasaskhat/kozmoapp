import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import { search } from '../../assets/icons'

const Search = ({value,searchPress}) => {
  return (
    <TouchableOpacity onPress={searchPress} style={[styles.container,{bottom: value? '56%':10,}]}>
      <Image source={search} style={styles.icon}/>
    </TouchableOpacity>
  );
};
export default Search;

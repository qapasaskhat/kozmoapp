import React from 'react';
import {Text, View, FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {basket} from '../../assets/icons';

const InstCategory = ({params, add,items}) => (
  <View
    style={{
      flexDirection: 'row',
      marginHorizontal: '10%',
      alignItems: 'center',
    }}>
    <FlatList
      style={styles.flatlist}
      horizontal
      data={items}
      renderItem={({item}) => (
        <View style={styles.interest}>
          <Image source={item.img} style={styles.img} />
        </View>
      )}
    />
    <TouchableOpacity
      onPress={add}
      style={[
        styles.rating,
        {height: 50, borderRadius: 30, width: 50, backgroundColor: '#F2F2F2'},
      ]}>
      <Text style={{color:'#000', fontSize: 20,}}>+</Text>
    </TouchableOpacity>
  </View>
);

export default InstCategory;
const styles = StyleSheet.create({
  interest: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF529',
    marginHorizontal: 20,
  },
  img: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  flatlist: {
    // marginHorizontal: '10%',
    marginVertical: '5%',
    width: '75%',
    //backgroundColor: '#000',
  },
  rating: {
    width: 54,
    height: 20,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    marginTop: 5,
  },
});

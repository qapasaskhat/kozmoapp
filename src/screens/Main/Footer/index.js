import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';
import { workout,main_logo,star } from '../../../assets/icons'

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {favoritePress,mainPress,workoutPress} = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={favoritePress}>
          <Image source={star} style={styles.img}/>
          <Text style={styles.h2}>Избранное</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={mainPress}>
          <Image source={main_logo} style={styles.img}/>
          <Text style={styles.h2}>Главная</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={workoutPress}>
          <Image source={workout} style={styles.img}/>
          <Text style={styles.h2}>Тренировки</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        height: 60,
        width:'100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#000',
        zIndex: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'center'
    },
    img:{
      width: 20,
      height: 20,
      tintColor: '#fff',
      resizeMode: 'contain',
      alignSelf:'center'
    },
    h2:{
      color: '#fff',
      textAlign: 'center',
      fontSize: 12,
    }
})

export default Footer;

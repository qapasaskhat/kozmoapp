import React from 'react'
import { View, Text, StyleSheet,Image,TextInput,TouchableOpacity } from 'react-native'
import {star,next} from '../../../assets/icons'
import {YellowBtn} from '../../../components/Button'
const FeedBack = ({}) =>(
    <View style={styles.container}>
        <Text style={styles.h1}>Оставьте отзыв о тренировке</Text>
        <View style={styles.rating}>
            <Text>Ваша оценка</Text>
            <Image source={star} style={styles.ratingImg} />
        </View>
        <TextInput multiline placeholder ='отзыв'/>
        <View style={styles.footer}>
            <TouchableOpacity style={styles.backBtn}>
                <Image source={next} style={styles.backIcon} />
            </TouchableOpacity>
            <YellowBtn text='Опубликовать' />
        </View>
    </View>
)
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    h1:{
        fontSize: 10,
        fontFamily: 'SFProDisplay-Regular',
        color:'#242424'
    },
    input:{},
    rating:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    ratingImg:{
        width:20,
        height:24,
        resizeMode:'contain'
    },
    backIcon:{
        width: 20,
        height: 20,
        resizeMode:'contain'
    },
    footer:{
        position:'absolute',
        width:'100%',
        flexDirection: 'row',
    },
    backBtn:{
        width:50,
        height: 50,
        borderRadius: 40,
        backgroundColor:'#ececec',
        justifyContent:'center',
        alignItems:'center'
    }
})
export default FeedBack
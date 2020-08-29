import React from 'react'
import { View, Text, StyleSheet,Image,TextInput,TouchableOpacity, Dimensions } from 'react-native'
import {star,next} from '../../../assets/icons'
import {YellowBtn} from '../../../components/Button'
const width = Dimensions.get('screen').width

const FeedBack = ({}) =>(
    <View style={styles.container}>
        <Text style={styles.h1}>Оставьте отзыв о тренировке</Text>
        <View style={styles.rating}>
            <Text style={styles.h1}>Ваша оценка</Text>
            <Image source={star} style={styles.ratingImg} />
        </View>
        <TextInput multiline placeholder ='отзыв' style={styles.input}/>
        <View style={styles.footer}>
            <TouchableOpacity style={styles.backBtn}>
                <Image source={next} style={styles.backIcon} />
            </TouchableOpacity>
            <View style={{width: '90%',}}>
                <YellowBtn text='Опубликовать' />
            </View>
        </View>
    </View>
)
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    h1:{
        marginTop: 10,
        marginLeft:10,
        fontSize: 13,
        fontFamily: 'SFProDisplay-Regular',
        color:'#242424'
    },
    input:{
        borderRadius:9,
        margin: 10,
        borderWidth:1,
        borderColor: '#dadada',
        padding:8,
        height:'40%'
    },
    rating:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginRight:10
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
        //width:300,
        flexDirection: 'row',
        bottom: 10
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
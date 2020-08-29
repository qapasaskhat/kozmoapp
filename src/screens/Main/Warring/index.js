import React from 'react'
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native'
import {warning} from '../../../assets/icons'
import {YellowBtn} from '../../../components/Button'

const Warring = ({cancel, notCancel})=>(
    <View style={styles.container}>
        <View/>
        <View>
        <View style={styles.warring}>
            <Image source={warning} style={styles.warringImg} />
        </View>
        <Text style={{
            textAlign:'center'
        }}>Предупреждение об отмене {'\n'}тренировки</Text>
        </View>
        <View>
        <TouchableOpacity style={{
            borderWidth:1,
            alignItems:'center',
            marginHorizontal:'10%',
            height:50,
            justifyContent:'center',
            borderRadius: 30,
            marginBottom:10
            }} onPress={notCancel}>
            <Text>Не отменять</Text>
        </TouchableOpacity>
        <YellowBtn text='Отменить тренировку' onPress={cancel} />
        </View>
    </View>
)
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        justifyContent:'space-between'
    },
    warring:{
        width:140,
        height:140,
        alignItems: 'center',
        alignSelf:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius: 100,
        borderColor:'#FFF614'
    },
    warringImg:{
        width:80,
        height:80,
        resizeMode:'contain',
    }
})
export default Warring
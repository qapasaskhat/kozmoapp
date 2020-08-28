import React from 'react'
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native'
import {warning} from '../../../assets/icons'
import {YellowBtn} from '../../../components/Button'

const Warring = ({cancel, notCancel})=>(
    <View style={styles.container}>
        <View style={styles.warring}>
            <Image source={warning} style={styles.warringImg} />
        </View>
        <Text>Предупреждение об отмене {'\n'}тренировки</Text>
        <TouchableOpacity onPress={notCancel}>
            <Text>Не отменять</Text>
        </TouchableOpacity>
        <YellowBtn text='Отменить тренировку' onPress={cancel} />
    </View>
)
const styles = StyleSheet.create({
    container:{
        flex:1,
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
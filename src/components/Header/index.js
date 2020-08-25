import React from 'react'
import {
    View,
    Text,
    Pressable,
    StatusBar,
    Image
} from 'react-native'
import {back_icon, edit_icon} from '../../assets/icons'

const Header = ({
    edit,
    valueEdit,
    back,
    right,
    label
})=>(
    <>
    <StatusBar />
    <View style={{
        marginTop:'5%',
        marginHorizontal: '10%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center'
    }}>
        <Pressable onPress={back} style={{
            width: 46,
            height: 46,
            borderRadius: 7,
            backgroundColor: '#fff',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            justifyContent: 'center',
            alignItems: 'center'
        }} >
            <Image source={back_icon} style={{
                width: 20,
                height: 20,
                resizeMode: 'contain'
            }}/>
        </Pressable>
        {label && <Text style={{
            fontSize: 16,
            fontWeight: '600',
            color: '#1f1f1f'
        }}>{label}</Text>}
        { right ?
        <Pressable onPress={edit} style={{
            width: 46,
            height: 46,
            borderRadius: 40,
            backgroundColor: valueEdit?'#000' :'#fff',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            justifyContent:'center',
            alignItems: 'center'
        }} >
            <Image source={edit_icon} style={{
                width:20,
                height: 20,
                resizeMode: 'center'
            }} />
        </Pressable>
        :<View/>}
    </View>
    </>
)
export default Header
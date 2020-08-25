import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        right: '5%',
        bottom: '20%',
        height: 40,
        width: 40,
        borderRadius: 11,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor:'#fff',
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon:{
        height: 24,
        width: 24,
        resizeMode: 'contain'
    }
})
export default styles
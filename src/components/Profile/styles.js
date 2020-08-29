import {
    StyleSheet,
    Dimensions
} from 'react-native'

const {
    width,
    height
} = Dimensions.get('screen')

const styles = StyleSheet.create({
    container:{
        height: 40,
        width: 40,
        position: 'absolute',
        backgroundColor: '#000',
        top: 20,
        left: 20,
        borderRadius: 7,
        justifyContent:'center',
        alignItems: 'center',
    },
    icon:{
        width: 16,
        height: 16,
        resizeMode: 'contain',
        tintColor: '#fff'
    }
})
export default styles
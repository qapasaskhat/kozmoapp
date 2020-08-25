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
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        backgroundColor: '#242424',
        //bottom: 10,
        right: 20
    },
    icon:{
        width: 20,
        height: 20,
        resizeMode: 'contain'
    }

})
export default styles
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
        width: '60%',
        height: '5%',
        backgroundColor: '#eee',
        flexDirection: 'row',
        borderRadius: 60,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        right: 20,
        top: 20
    },
    active_btn:{
        backgroundColor: '#000',
        height: '100%',
        //width: '100%',
        justifyContent: 'center',
        borderRadius: 60,
        //paddingHorizontal: 12,
        width:'50%',
        alignItems: 'center'
    },
    active_txt: {
        color: '#fff',
        fontSize: 11,
    },
    txt: {
        fontSize: 11,

    }
})
export default styles
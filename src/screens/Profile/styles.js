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
        flex: 1,
    },
    imgStyle:{
        width: width,
        height: height*0.3
    },
    balans:{
        flexDirection: 'row',
        justifyContent:'space-between',
        width: '100%',
        height: '9%',
        backgroundColor: '#FFF529'
    },
    text: {
        fontSize: 20,
        color: '#242424',
        fontFamily: 'SFProDisplay-Regular'

    },
    text_2:{
        fontSize: 10,
        color: '#242424',
        fontFamily: 'SFProDisplay-Regular'

    },
    left:{
        justifyContent: 'center',
        paddingLeft: 40
    },
    right:{
        justifyContent: 'center',
    },
    btn:{
        borderWidth: 1,
        borderRadius: 31,
        paddingHorizontal: 40,
        paddingVertical: 10,
        marginRight: 20
    },
    plus: {
        fontSize: 16,
        fontFamily: 'SFProDisplay-Regular'
        
    }
})
export default styles
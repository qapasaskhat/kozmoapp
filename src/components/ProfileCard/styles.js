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
        marginTop: -20,
        backgroundColor: '#fff',
        marginHorizontal: '10%',
        height: width*0.3,
        borderRadius: 11,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    nameStyle: {
        fontSize: 16,
        color: '#1F1F1F',
        fontWeight: '500',
        fontFamily: 'SFProDisplay-Regular'
    },
    ageStyle: {
        fontSize: 13,
        fontWeight: '500',
        color: '#6D6D6D',
        fontFamily: 'SFProDisplay-Regular'

    },
    cityStyle:{
        fontSize: 13,
        fontWeight: '500',
        color: '#1F1F1F',
        fontFamily: 'SFProDisplay-Regular'

    },
    number:{
        fontSize: 13,
        color: '#6D6D6D',
        fontFamily: 'SFProDisplay-Regular'

    },
    instaIcon:{
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    shareIcon:{
        width: 20,
        resizeMode: 'contain',
        height: 20,
    },
    location:{
        width:4,
        height:12,
        resizeMode: 'contain'
    },
    city:{
        marginTop: 12
    },
    right:{
        width: '40%',
        backgroundColor: '#fff',
        borderRadius: 11,
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
    },
    left:{
        width: '60%',
        paddingLeft: '10%',
        paddingVertical: '3%',
        borderRadius: 11,
    },
    progress:{
        color: '#1DDB69',
        fontSize: 26,
        fontFamily: 'SFProDisplay-Regular'

    },
    icon: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
        tintColor: '#000',
        marginLeft: 12
    }
})
export default styles
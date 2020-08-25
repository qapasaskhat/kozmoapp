import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        width: 200,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 11,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: '#fff',
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    icon:{
        width: 24,
          height: 24,
          resizeMode: 'contain',
          tintColor: '#000',
    }
})

export default styles
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
      height: '100%',
      paddingHorizontal: '5%',
    },
    title:{
        fontSize: 19,
              fontWeight: '600',
              color: '#3E3E3E',
    },
    userCard:{
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 11,
        marginTop: 8,
      },
      img_ava:{
        height: 68,
        width: 68,
        borderRadius: 16,
        resizeMode: 'contain'
    },
    icon_view:{
        width: 40,
        height: 40,
        borderRadius: 11,
        backgroundColor: '#eee',
        marginLeft: 3,
    },
    check:{
        width:20,
        height:20,
        resizeMode: 'contain',
        marginRight: 5
    },
    slide2: {
        height: '100%',
        paddingHorizontal: '10%'
    },
    slide3: {
      flex: 1,
      paddingHorizontal: '10%'
    },
    reviewBtn:{
        width: 139,
              height: 30,
              borderWidth: 1,
              borderColor: '#D5D5D5',
              borderRadius: 46,
              justifyContent: 'center',
              alignItems: 'center'
    },
    reviewBtnText:{
        fontSize: 14,
        fontWeight: '500',
        color: '#646464'
    },
    reviewTitle:{
        fontSize: 13,
        color:'#262626'
    },
    reviewText:{
        fontSize: 13,
        color: '#929292',
        maxWidth: '90%'
    }
})
export default styles

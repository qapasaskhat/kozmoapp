import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { img_ava } from '../../../assets/img'
import { star, profile, velo } from '../../../assets/icons'

const Subscriptions=({})=>(
    <View style={{
        width:150,
        height: 100,
        borderRadius: 11,
        backgroundColor: '#FFF614'
    }}>
        <Text>Велотренировка</Text>
        <Text>пн</Text>
        <View>
            <Image source={velo} style={{
                width:25, height:20,resizeMode:'contain'
            }} />
            <Text>15<Text>{'\n'}тренировок</Text></Text>
        </View>

    </View>
)

const Favorites =({item})=>(
    <View style={styles.view}>
        <Image source={img_ava} style={styles.img}/>
        <View>
            <View>
                <Text style={styles.h2}>{item.time}</Text>
                <Text>{item.price}</Text>
            </View>
            <Text>{item.title} </Text>
            <Text>{item.address}</Text>
            <View style={{
                flexDirection:'row',
                justifyContent: 'space-between'
            }}>
                <View style={styles.rating}>
                    <Image source={star} style={styles.ratingIcon}/>
                    <Text>{item.rating}</Text>
                </View>
                <View style={styles.userCount}>
                    <Text>7/10</Text>
                    <Image style={styles.ratingIcon} source={profile} />
                </View>
            </View>
        </View>
    </View>
)
class FavoritesClass extends React.Component{
    state={
        items:[
            {
                id: 1,
                time: '08:00',
                price: 2000,
                rating: '9.0',
                title: 'Велотренировка',
                address: 'ул.Габдуллина, д. 132'
            }
        ]
    }
    render() {
        const {items} = this.state
      return (
        <View style={styles.conatiner}>
            <Text style={styles.h1}>Популярные тренировки</Text>
            {
                items.map(item=>(
                    <Favorites item={item} />
                ))
            }
        </View>
      )
    };
}
const styles = StyleSheet.create({
    conatiner: {
        flex: 1
    },
    h1:{
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '600',
        fontFamily: 'SFProDisplay-Regular'
    },
    h2:{
        fontSize: 15,
        fontWeight:'normal',
        fontFamily: 'SFProDisplay-Regular',
        color: '#626262'
    },
    h3:{
        fontFamily: 'SFProDisplay-Regular',
        fontWeight:'normal',
        color: '#6FC716',
        fontSize: 15,
    },
    h4:{
        fontSize: 13,
        fontFamily: 'SFProDisplay-Regular',
        color:'#000',
        fontWeight:'normal',
    },
    h5:{
        color: '#4F4F4F',
        fontFamily: 'SFProDisplay-Regular',
        fontWeight:'normal',
        fontSize: 11,
    },
    img:{
        height: 68,
        width: 68,
        borderRadius: 9
    },
    view:{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10
    },
    ratingIcon:{
        width:16,
        height: 16,
        resizeMode: 'center'
    },
    rating:{
        flexDirection: 'row',
        backgroundColor: '#000',
    },
    userCount:{
        flexDirection:'row'
    }
})
export default FavoritesClass
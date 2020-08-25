import React from 'react';
import { Text, View,FlatList,TouchableOpacity,Image } from 'react-native';
import {image} from '../../assets/img'

const photos = [
    {
        id: 1,
        image: image
    },
    {
        id: 2,
        image: image
    },{
        id: 3,
        image: image
    },{
        id: 4,
        image: image
    },{
        id: 5,
        image: image
    },{
        id: 6,
        image: image
    }
]

const Myphotos = ({
    params,
    value,
    onPress
}) => (
    <>
    <View style={{
        marginHorizontal: '10%',
        //marginTop: '10%',
    }}>
        <Text>Мои фото</Text>
        <FlatList 
           data={photos}
           numColumns={4}
           renderItem={({item})=>(
               <View style={{
                   width: 74,
                   height: 74,
                   borderRadius: 11,
                   backgroundColor: '#000',
                   marginHorizontal: '1%',
                   marginVertical: '1%'
               }}>
                   <Image source={item.image} style={{
                       width: 74,
                       height: 74,
                       borderRadius: 11,
                       resizeMode: 'cover'
                   }} />
               </View>
           )}
            />
    </View>
   { value?null: <View style={{
        marginHorizontal: '10%',
        flexDirection: 'row',
        height: '5%',
        justifyContent: 'space-between',
        marginTop: '5%'
    }}>
        <TouchableOpacity 
        onPress={onPress}
         style={{
            width:'100%',
            height: 46,
            borderWidth: 1,
            borderRadius: 31,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Редактировать фото</Text>
        </TouchableOpacity>
        
    </View>}
    </>
);

export default Myphotos;

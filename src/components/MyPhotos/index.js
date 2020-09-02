import React from 'react';
import { Text, View,FlatList,TouchableOpacity,Image } from 'react-native';
import {image} from '../../assets/img'

const Myphotos = ({
    params,
    value,
    onPress,
    items,
    main
}) => (
    <>
    <View style={{
        marginHorizontal: '10%',
        //marginTop: '10%',
    }}>
        <Text>Мои фото</Text>
        <FlatList 
           data={items}
           numColumns={4}
           ListEmptyComponent={<Text style={{textAlign: 'center', color: '#dadada'}}>нет данных</Text>}
           renderItem={({item})=>(
               <View style={{
                   width: 74,
                   height: 74,
                   borderRadius: 11,
                   backgroundColor: '#fff',
                   marginHorizontal: '1%',
                   marginVertical: '1%'
               }}>
                   <Image source={{uri: `https://lepapp.com/storage/${item.image}`}} style={{
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
        {main ? <TouchableOpacity 
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
        </TouchableOpacity>: <View/>}
        
    </View>}
    </>
);

export default Myphotos;

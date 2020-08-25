import React from 'react';
import { Text, View, FlatList,Image ,TouchableOpacity} from 'react-native';
import { workout } from '../../assets/icons'


const Inventary = ({
    params,
    onPress,
    text,
    items
}) => (
    <View style={{
        marginHorizontal: '10%',
        marginTop: '10%'
    }}>
        <Text style={{
            fontSize: 11,
            color: '#242424',
            fontFamily: 'SFProDisplay-Regular',
            fontWeight: '600',
            marginBottom: 8
        }}>{text? text: 'Мой инвентарь'}</Text>
        <View style={{flexDirection: 'row'}}>
        <FlatList data={items}
           horizontal
           renderItem={({item})=>(
               <View style={{
                   width: 40,
                   height: 40,
                   justifyContent:'center',
                   alignItems:'center',
                   borderRadius: 7,
                   backgroundColor: '#fff',
                   margin: 3,
                   shadowColor: "#000",
                   shadowOffset: {
                       width: 0,
                       height: 1,
                   },
                   shadowOpacity: 0.25,
                   shadowRadius: 1.84,

                   elevation: 3,
                   borderRadius: 11,
                   marginTop: 5
               }}>
                   <Image source={item.img}  style={{width: 20, height:20, resizeMode: 'center', tintColor: '#000'}}/>
               </View>
           )} />
           <TouchableOpacity 
           onPress={onPress}
           style={{
               width: 68,
               height: 40,
               borderRadius: 7,
               borderWidth: 1,
               borderColor:'#C4C4C4',
               alignItems: 'center',
               justifyContent: 'center',
               alignSelf: 'center',
               marginLeft: 10
           }}>
           <Text style={{color:'#cecece', fontSize: 24,}}>+</Text>
           </TouchableOpacity>
           </View>
    </View>
);

export default Inventary;
